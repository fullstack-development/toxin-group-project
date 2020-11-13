import { SagaIterator } from 'redux-saga';
import { put, call, PutEffect } from 'redux-saga/effects';

import { takeLatestAction } from 'redux/action.model';
import Api from 'services/api/api';
import { UserCredential } from 'services/api/Firebase/modules/Authentication/types';

import {
  RegistrationStatusSuccess,
  RegistrationStatusFailed,
  RegistrationRequest,
} from '../../model';

function* registration({
  payload,
}: RegistrationRequest):
  | Generator
  | Generator<PutEffect<RegistrationStatusSuccess | RegistrationStatusFailed>, void, never> {
  try {
    const { email, password, name, surname, birthDate, gender, avatar, hasSpecialOffers } = payload;

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
      type: 'REGISTRATION_SUCCESS',
      payload: result,
    });
  } catch (error) {
    yield put({
      type: 'REGISTRATION_FAILED',
      payload: error.message,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatestAction<RegistrationRequest['type']>('REGISTRATION_REQUEST', registration);
}

export { rootSaga };
