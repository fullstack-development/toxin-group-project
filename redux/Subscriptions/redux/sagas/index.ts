import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import api from 'services/api/api';

import {
  SubscriptionData,
  GetSubscriptionDataRequest,
  SubscriptionUpdateRequest,
} from '../../model';
import {
  getSubscriptionDataFailed,
  getSubscriptionDataSuccess,
  subscriptionUpdateFailed,
  subscriptionUpdateSuccess,
} from '../actions';

function* getSubscriptionsData({ payload: email }: GetSubscriptionDataRequest) {
  try {
    const subscriptionData: SubscriptionData = yield call(api.subscriptions.load, email);

    yield put(getSubscriptionDataSuccess(subscriptionData));
  } catch (err) {
    yield put(getSubscriptionDataFailed());
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
    const statusText = userAuthInfo.length
      ? 'Notification settings changed'
      : 'You have successfully subscribed to the special offers';

    yield put(subscriptionUpdateSuccess(statusText));
  } catch (err) {
    yield put(subscriptionUpdateFailed('An error occured, please try again later'));
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
