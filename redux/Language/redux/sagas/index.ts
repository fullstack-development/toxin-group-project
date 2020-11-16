import { SagaIterator } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { takeLatestAction } from 'redux/action.model';
import i18next from 'services/i18next';

import { ChangeLanguageRequest } from '../../model';
import { changeLanguageSuccess } from '../actions';

function* changeLanguage({ payload }: ChangeLanguageRequest) {
  i18next.changeLanguage(payload);

  yield put(changeLanguageSuccess(payload));
}

function* rootSaga(): SagaIterator {
  yield takeLatestAction<ChangeLanguageRequest['type']>('CHANGE_LANGUAGE_REQUEST', changeLanguage);
}

export { rootSaga };
