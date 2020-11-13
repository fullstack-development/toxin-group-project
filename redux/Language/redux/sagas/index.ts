import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import { i18next } from 'services/i18next';
import { Lang } from 'services/i18next/types';

import { CHANGE_LANGUAGE_REQUEST, CHANGE_LANGUAGE_SUCCESS } from '../../constants';

function* changeLanguage(data: { type: typeof CHANGE_LANGUAGE_REQUEST; payload: Lang }): Generator {
  i18next.changeLanguage(data.payload);

  yield put({ type: CHANGE_LANGUAGE_SUCCESS, payload: data.payload });
}

export function* rootSaga(): SagaIterator {
  yield takeLatest<never>(CHANGE_LANGUAGE_REQUEST, changeLanguage);
}
