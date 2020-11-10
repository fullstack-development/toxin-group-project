import { SagaIterator } from 'redux-saga';
import { put, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { UserCredential } from 'api/Firebase/modules/Authentication/types';
import { takeLatestAction } from 'redux/types';

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
    const result: UserCredential = yield call(Api.auth.signUp, { ...payload });

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

export function* rootSaga(): SagaIterator {
  yield takeLatestAction<RegistrationRequest['type']>('REGISTRATION_REQUEST', registration);
}
