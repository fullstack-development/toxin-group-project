import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import Api from 'services/api/api';
import { UserCredential } from 'services/api/Firebase/modules/Authentication/types';
import { dateValidator } from 'shared/helpers/validators';

import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from '../../constants';
import { ProfileData, RegistrationStatusSuccess, RegistrationStatusFailed } from '../../model';

function* startRegistrationProcess(data: {
  type: typeof REGISTRATION_REQUEST;
  payload: ProfileData;
}):
  | Generator
  | Generator<PutEffect<RegistrationStatusSuccess | RegistrationStatusFailed>, void, never> {
  const {
    email,
    password,
    name,
    surname,
    birthDate,
    gender,
    avatar,
    hasSpecialOffers,
  } = data.payload;

  const dateValidationResult = dateValidator(birthDate);

  if (dateValidationResult === 'Invalid date') {
    yield put({
      type: REGISTRATION_FAILED,
      payload: 'Все поля должны быть заполнены корректно!',
    });

    return;
  }
  try {
    const result: UserCredential = yield call(Api.auth.signUp, {
      email,
      password,
      name,
      surname,
      birthDate,
      gender,
      avatar,
    });

    yield call(Api.subscriptions.add, email, { hasSpecialOffers });

    yield put({
      type: REGISTRATION_SUCCESS,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: REGISTRATION_FAILED,
      payload: error.message,
    });
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLatest(REGISTRATION_REQUEST, startRegistrationProcess);
}
