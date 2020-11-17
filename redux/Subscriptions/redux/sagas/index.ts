import { SagaIterator } from 'redux-saga';
import { call, ForkEffect, put, takeLeading } from 'redux-saga/effects';

import api from 'services/api/api';

import { Action, GetSubscriptionDataRequest, SubscriptionUpdateRequest } from '../../model';

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
        ? 'Notification settings changed'
        : 'You have successfully subscribed to the special offers',
    });
  } catch (err) {
    yield put({
      type: 'SUBSCRIPTION_UPDATE_FAILED',
      payload: 'An error occured, please try again later',
    });
  }
}
// TODO Вынести в отдельный файл, так как предполгается неоднократное использование
const takeLeadingAction = <T extends string>(
  type: T,
  worker: (action: Action<T>) => unknown,
): ForkEffect<unknown> => takeLeading(type, worker);

function* rootSaga(): SagaIterator {
  yield takeLeadingAction<GetSubscriptionDataRequest['type']>(
    'GET_SUBSCRIPTION_DATA_PROCESS',
    getSubscriptionsData,
  );
  yield takeLeadingAction<SubscriptionUpdateRequest['type']>(
    'SUBSCRIPTION_UPDATE_PROCESS',
    subscriptionUpdate,
  );
}

export { rootSaga };
