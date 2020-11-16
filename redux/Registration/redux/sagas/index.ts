import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import { requestToAuth } from 'redux/Auth/redux/actions';
import Api from 'services/api/api';
import { UserCredential } from 'services/api/Firebase/modules/Authentication/types';

import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from '../../constants';
import { ProfileData, RegistrationStatusSuccess, RegistrationStatusFailed } from '../../types';

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

  const maxSymbolLength = 255;

  try {
    if (name.length > maxSymbolLength || surname.length > maxSymbolLength)
      throw new Error(`Имя или Фамилия не может иметь более ${maxSymbolLength} символов`);

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

    yield requestToAuth({ email, password });
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
