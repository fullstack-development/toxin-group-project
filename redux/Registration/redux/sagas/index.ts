import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import { UserCredential } from 'services/api/Firebase/modules/Authentication/types';
import { dateValidator } from 'utils/validators';

import { Dependencies } from '../../../store.types';
import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from '../../constants';
import {
  RegistrationStatusSuccess,
  RegistrationStatusFailed,
  RegistrationRequest,
} from '../../types';

function* startRegistrationProcess(
  { api }: Dependencies,
  data: RegistrationRequest,
):
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
    const result: UserCredential = yield call(api.auth.signUp, {
      email,
      password,
      name,
      surname,
      birthDate,
      gender,
      avatar,
    });

    yield call(api.subscriptions.add, email, { hasSpecialOffers });

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

export function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLatest(REGISTRATION_REQUEST, startRegistrationProcess, deps);
}
