import firebase from 'firebase';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLeading } from 'redux-saga/effects';

import { Dependencies } from 'redux/store.model';
import {
  getEmailUpdateErrorMessage,
  getPasswordUpdateErrorMessage,
} from 'shared/helpers/errorMessages';

import {
  EMAIL_UPDATE_PROCESS,
  EMAIL_UPDATE_SUCCESS,
  EMAIL_UPDATE_FAILED,
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
  UPDATE_ADDITIONAL_USER_DATA_FAILED,
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_SUCCESS,
  USERNAME_UPDATE_FAILED,
} from '../../constants';
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
      type: EMAIL_UPDATE_SUCCESS,
      payload: `A confirmation email has been sent to the specified email address`,
    });
  } catch (err) {
    yield put({
      type: EMAIL_UPDATE_FAILED,
      payload: getEmailUpdateErrorMessage(err),
    });
  }
}

function* passwordUpdate(
  { api }: Dependencies,
  { payload: { user, currentPassword, newPassword, confirmPassword } }: PasswordUpdateRequest,
) {
  try {
    if (newPassword !== confirmPassword) throw new Error('Passwords do not match');

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
      type: PASSWORD_UPDATE_SUCCESS,
      payload: 'Password changed successfully',
    });
  } catch (err) {
    yield put({
      type: PASSWORD_UPDATE_FAILED,
      payload: getPasswordUpdateErrorMessage(err),
    });
  }
}

function* updateAdditionalUserData(
  { api }: Dependencies,
  { payload: { user, data } }: UpdateAdditionalUserDataRequest,
) {
  try {
    const isDocument = yield call(api.auth.getAdditionalUserInformation, user.uid);
    if (isDocument) {
      yield call(api.auth.updateAdditionalUserInformation, user.uid, data);
    } else {
      yield call(api.auth.addAdditionalUserInformation, user.uid, data);
    }
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
      payload: 'Data has been successfully updated',
    });
  } catch (err) {
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_FAILED,
      payload: 'An error occured, please try again later',
    });
  }
}

function* usernameUpdate({ payload }: UsernameUpdateRequest) {
  try {
    const { user, displayName } = payload;

    yield user.updateProfile({ displayName });

    yield put({
      type: USERNAME_UPDATE_SUCCESS,
      payload: 'Data has been successfully updated',
    });
  } catch (err) {
    yield put({
      type: USERNAME_UPDATE_FAILED,
      payload: 'An error occured, please try again later',
    });
  }
}

function* getAdditionalUserData(
  { api }: Dependencies,
  { payload: user }: GetAdditionalUserDataRequest,
) {
  try {
    const additionalUserData = yield call(api.auth.getAdditionalUserInformation, user.uid);
    yield put({
      type: GET_ADDITIONAL_USER_DATA_SUCCESS,
      payload: additionalUserData,
    });
  } catch (err) {
    yield put({
      type: GET_ADDITIONAL_USER_DATA_FAILED,
      payload: null,
    });
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeading(EMAIL_UPDATE_PROCESS, emailUpdate);
  yield takeLeading(USERNAME_UPDATE_PROCESS, usernameUpdate);
  yield takeLeading(GET_ADDITIONAL_USER_DATA_PROCESS, getAdditionalUserData, deps);
  yield takeLeading(PASSWORD_UPDATE_PROCESS, passwordUpdate, deps);
  yield takeLeading(UPDATE_ADDITIONAL_USER_DATA_PROCESS, updateAdditionalUserData, deps);
}

export { rootSaga };
