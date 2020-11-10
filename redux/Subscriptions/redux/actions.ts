import {
  SubscriptionUpdate,
  GetSubscriptionDataRequest,
  SubscriptionUpdateRequest,
  SubscriptionUpdateCompleted,
} from '../model';

export const getSubscriptionData = (email: string): GetSubscriptionDataRequest => ({
  type: 'GET_SUBSCRIPTION_DATA_PROCESS',
  payload: email,
});

export const subscriptionUpdate = (data: SubscriptionUpdate): SubscriptionUpdateRequest => ({
  type: 'SUBSCRIPTION_UPDATE_PROCESS',
  payload: data,
});

export const completionSubscriptionUpdate = (): SubscriptionUpdateCompleted => ({
  type: 'SUBSCRIPTION_UPDATE_COMPLETED',
});
