import {
  SubscriptionUpdate,
  GetSubscriptionDataRequest,
  SubscriptionUpdateRequest,
  SubscriptionUpdateCompleted,
} from '../model';

const getSubscriptionData = (email: string): GetSubscriptionDataRequest => ({
  type: 'GET_SUBSCRIPTION_DATA_PROCESS',
  payload: email,
});

const subscriptionUpdate = (data: SubscriptionUpdate): SubscriptionUpdateRequest => ({
  type: 'SUBSCRIPTION_UPDATE_PROCESS',
  payload: data,
});

const completeSubscriptionUpdate = (): SubscriptionUpdateCompleted => ({
  type: 'SUBSCRIPTION_UPDATE_COMPLETED',
});

export { getSubscriptionData, subscriptionUpdate, completeSubscriptionUpdate };
