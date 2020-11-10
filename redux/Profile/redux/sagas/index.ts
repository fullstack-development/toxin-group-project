import firebase from 'firebase';
import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import api from 'api/api';
import { takeLeadingAction } from 'redux/types';
import {
  getEmailUpdateErrorMessage,
  getPasswordUpdateErrorMessage,
} from 'shared/helpers/errorMessages';

import {
  EmailUpdateRequest,
  PasswordUpdateRequest,
  UpdateAdditionalUserDataRequest,
  UsernameUpdateRequest,
  GetAdditionalUserDataRequest,
} from '../../model';

function* emailUpdate({ payload }: EmailUpdateRequest) {
  try {
    const { user, email } = payload;

    yield user.verifyBeforeUpdateEmail(email);

    yield put({
      type: 'EMAIL_UPDATE_SUCCESS',
      payload: `Подтверждение адреса электронной почты было отправлено на ${email}`,
    });
  } catch (err) {
    yield put({
      type: 'EMAIL_UPDATE_FAILED',
      payload: getEmailUpdateErrorMessage(err),
    });
  }
}

function* passwordUpdate({
  payload: { user, currentPassword, newPassword, confirmPassword },
}: PasswordUpdateRequest) {
  try {
    if (newPassword !== confirmPassword) throw new Error('Пароли не совпадают');

    const { email } = user;
    const userAuthInfo: string[] = yield call(api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    const isGoogleAuth = userAuthInfo.includes('google.com');

    if (isEmailAuth) {
      const credential = firebase.auth.EmailAuthProvider.credential(email, currentPassword);
      yield user.reauthenticateWithCredential(credential);
    } else if (isGoogleAuth) {
      yield user.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    yield user.updatePassword(newPassword);

    yield put({
      type: 'PASSWORD_UPDATE_SUCCESS',
      payload: 'Пароль успешно изменен',
    });
  } catch (err) {
    yield put({
      type: 'PASSWORD_UPDATE_FAILED',
      payload: getPasswordUpdateErrorMessage(err),
    });
  }
}

function* updateAdditionalUserData({ payload: { user, data } }: UpdateAdditionalUserDataRequest) {
  try {
    const isDocument = yield call(api.auth.getAdditionalUserInformation, user.uid);
    if (isDocument) {
      yield call(api.auth.updateAdditionalUserInformation, user.uid, data);
    } else {
      yield call(api.auth.addAdditionalUserInformation, user.uid, data);
    }
    yield put({
      type: 'UPDATE_ADDITIONAL_USER_DATA_SUCCESS',
      payload: 'Данные были успешно обновлены',
    });
  } catch (err) {
    yield put({
      type: 'UPDATE_ADDITIONAL_USER_DATA_FAILED',
      payload: 'Произошла ошибка повторите попытку позже',
    });
  }
}

function* usernameUpdate({ payload }: UsernameUpdateRequest) {
  try {
    const { user, displayName } = payload;

    yield user.updateProfile({ displayName });

    yield put({
      type: 'USERNAME_UPDATE_SUCCESS',
      payload: 'Данные были успешно обновлены',
    });
  } catch (err) {
    yield put({
      type: 'USERNAME_UPDATE_FAILE',
      payload: 'Произошла ошибка повторите попытку позже',
    });
  }
}

function* getAdditionalUserData({ payload: user }: GetAdditionalUserDataRequest) {
  try {
    const additionalUserData = yield call(api.auth.getAdditionalUserInformation, user.uid);
    yield put({
      type: 'GET_ADDITIONAL_USER_DATA_SUCCESS',
      payload: additionalUserData,
    });
  } catch (err) {
    yield put({
      type: 'GET_ADDITIONAL_USER_DATA_FAILED',
      payload: null,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLeadingAction<EmailUpdateRequest['type']>('EMAIL_UPDATE_PROCESS', emailUpdate);
  yield takeLeadingAction<GetAdditionalUserDataRequest['type']>(
    'GET_ADDITIONAL_USER_DATA_PROCESS',
    getAdditionalUserData,
  );
  yield takeLeadingAction<PasswordUpdateRequest['type']>('PASSWORD_UPDATE_PROCESS', passwordUpdate);
  yield takeLeadingAction<UpdateAdditionalUserDataRequest['type']>(
    'UPDATE_ADDITIONAL_USER_DATA_PROCESS',
    updateAdditionalUserData,
  );
  yield takeLeadingAction<UsernameUpdateRequest['type']>('USERNAME_UPDATE_PROCESS', usernameUpdate);
}

export { rootSaga };
