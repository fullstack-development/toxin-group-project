import { SagaIterator } from 'redux-saga';
import { call, ForkEffect, put, takeLeading } from 'redux-saga/effects';

import { Dependencies } from '../../../store.types';
import { Action, GetSubscriptionDataRequest, SubscriptionUpdateRequest } from '../../model';

function* getSubscriptionsData(
  { api }: Dependencies,
  { payload: email }: GetSubscriptionDataRequest,
) {
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

function* subscriptionUpdate(
  { api }: Dependencies,
  { payload: { email, subscriptions } }: SubscriptionUpdateRequest,
) {
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
// TODO Вынести в отдельный файл, так как предполгается неоднократное использование
const takeLeadingAction = <T extends string>(
  type: T,
  worker: (deps: Dependencies, action: Action<T>) => unknown,
  deps: Dependencies,
): ForkEffect<unknown> => takeLeading(type, worker, deps);

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<GetSubscriptionDataRequest['type']>(
    'GET_SUBSCRIPTION_DATA_PROCESS',
    getSubscriptionsData,
    deps,
  );
  yield takeLeadingAction<SubscriptionUpdateRequest['type']>(
    'SUBSCRIPTION_UPDATE_PROCESS',
    subscriptionUpdate,
    deps,
  );
}

export { rootSaga };
