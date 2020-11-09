import {
  SUBSCRIPTION_UPDATE_PROCESS,
  SUBSCRIPTION_UPDATE_COMPLETED,
  GET_SUBSCRIPTION_DATA_PROCESS,
} from '../constants';
import {
  SubscriptionUpdate,
  GetSubscriptionDataRequest,
  SubscriptionUpdateRequest,
  SubscriptionUpdateCompleted,
} from '../types';

const getSubscriptionData = (email: string): GetSubscriptionDataRequest => ({
  type: GET_SUBSCRIPTION_DATA_PROCESS,
  payload: email,
});

const subscriptionUpdate = (data: SubscriptionUpdate): SubscriptionUpdateRequest => ({
  type: SUBSCRIPTION_UPDATE_PROCESS,
  payload: data,
});

const completionSubscriptionUpdate = (): SubscriptionUpdateCompleted => ({
  type: SUBSCRIPTION_UPDATE_COMPLETED,
});

export { getSubscriptionData, subscriptionUpdate, completionSubscriptionUpdate };
