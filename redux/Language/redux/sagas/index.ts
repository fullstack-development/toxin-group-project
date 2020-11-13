import { SagaIterator } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { takeLatestAction } from 'redux/action.model';
import i18next from 'services/i18next';

import { ChangeLanguageRequest } from '../../model';

function* changeLanguage(data: ChangeLanguageRequest) {
  i18next.changeLanguage(data.payload);

  yield put({ type: 'CHANGE_LANGUAGE_SUCCESS', payload: data.payload });
}

function* rootSaga(): SagaIterator {
  yield takeLatestAction<ChangeLanguageRequest['type']>('CHANGE_LANGUAGE_REQUEST', changeLanguage);
}

export { rootSaga };
