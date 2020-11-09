import { SagaIterator } from 'redux-saga';
import { call, put, takeLeading } from 'redux-saga/effects';

import api from 'api/api';

import {
  SUBSCRIPTION_UPDATE_PROCESS,
  SUBSCRIPTION_UPDATE_SUCCESS,
  SUBSCRIPTION_UPDATE_FAILED,
  GET_SUBSCRIPTION_DATA_SUCCESS,
  GET_SUBSCRIPTION_DATA_FAILED,
  GET_SUBSCRIPTION_DATA_PROCESS,
} from '../../constants';
import { GetSubscriptionDataRequest, SubscriptionUpdateRequest } from '../../types';

function* getSubscriptionsData({ payload: email }: GetSubscriptionDataRequest) {
  try {
    const subscriptionData = yield call(api.subscriptions.load, email);

    yield put({
      type: GET_SUBSCRIPTION_DATA_SUCCESS,
      payload: subscriptionData,
    });
  } catch (err) {
    yield put({
      type: GET_SUBSCRIPTION_DATA_FAILED,
      payload: null,
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
    yield put({
      type: SUBSCRIPTION_UPDATE_SUCCESS,
      payload: 'Вы успешно подписаны',
    });
  } catch (err) {
    yield put({
      type: SUBSCRIPTION_UPDATE_FAILED,
      payload: 'Произошла ошибка, повторите попытку позже',
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLeading(GET_SUBSCRIPTION_DATA_PROCESS, getSubscriptionsData);
  yield takeLeading(SUBSCRIPTION_UPDATE_PROCESS, subscriptionUpdate);
}

export { rootSaga };
