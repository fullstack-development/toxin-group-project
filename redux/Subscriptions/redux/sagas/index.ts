import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import api from 'api/api';
import { takeLeadingAction } from 'redux/types';

import { GetSubscriptionDataRequest, SubscriptionUpdateRequest } from '../../model';

function* getSubscriptionsData({ payload: email }: GetSubscriptionDataRequest) {
  try {
    const subscriptionData = yield call(api.subscriptions.load, email);

    yield put({
      type: 'GET_SUBSCRIPTION_DATA_SUCCESS',
      payload: subscriptionData,
    });
  } catch (err) {
    yield put({
      type: 'GET_SUBSCRIPTION_DATA_FAILED',
    });
  }
}

function* subscriptionUpdate({ payload: { email, subscriptions } }: SubscriptionUpdateRequest) {
  try {
    const isDocument = yield call(api.subscriptions.load, email);
    if (isDocument) {
      yield call(api.subscriptions.update, email, subscriptions);
    } else {
      yield call(api.subscriptions.add, email, subscriptions);
    }

    const userAuthInfo = yield call(api.auth.fetchSignInMethodsForEmail, email);

    yield put({
      type: 'SUBSCRIPTION_UPDATE_SUCCESS',
      payload: userAuthInfo.length
        ? 'Настройки уведомлений изменены'
        : 'Вы успешно подписаны на рассылку спецпредложений',
    });
  } catch (err) {
    yield put({
      type: 'SUBSCRIPTION_UPDATE_FAILED',
      payload: 'Произошла ошибка повторите попытку позже',
    });
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLeadingAction<GetSubscriptionDataRequest['type']>(
    'GET_SUBSCRIPTION_DATA_PROCESS',
    getSubscriptionsData,
  );
  yield takeLeadingAction<SubscriptionUpdateRequest['type']>(
    'SUBSCRIPTION_UPDATE_PROCESS',
    subscriptionUpdate,
  );
}
