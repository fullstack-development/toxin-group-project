import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import { requestToAuth } from 'redux/Auth/redux/actions';
import { Dependencies } from 'redux/store.model';
import { UserCredential } from 'services/api/Firebase/modules/Authentication';
import { dateValidator } from 'utils/validators';

import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from '../../constants';
import {
  RegistrationRequest,
  RegistrationStatusSuccess,
  RegistrationStatusFailed,
} from '../../model';

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

  const maxSymbolLength = 50;

  if (name.length > maxSymbolLength || surname.length > maxSymbolLength)
    throw new Error(`Имя или Фамилия не может иметь более ${maxSymbolLength} символов`);

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

    yield requestToAuth({ email, password });
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
