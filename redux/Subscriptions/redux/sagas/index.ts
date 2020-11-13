import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import api from 'services/api/api';

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
