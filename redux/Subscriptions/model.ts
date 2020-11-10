import { Action, ActionPayload } from 'redux/types';

export type SubscriptionData = {
  hasSpecialOffers: boolean;
};

export type SubscriptionUpdate = {
  email: string;
  subscriptions: {
    hasSpecialOffers: boolean;
  };
};

export type SubscriptionState = {
  subscriptionData: null | SubscriptionData;
  isUpdatePending: boolean;
  isUpdateCompleted: boolean;
  updateStatusText: string;
};

export type GetSubscriptionDataRequest = ActionPayload<'GET_SUBSCRIPTION_DATA_PROCESS', string>;
export type GetSubscriptionDataSuccess = ActionPayload<
  'GET_SUBSCRIPTION_DATA_SUCCESS',
  SubscriptionData
>;
export type GetSubscriptionDataFailed = Action<'GET_SUBSCRIPTION_DATA_FAILED'>;

export type SubscriptionUpdateRequest = ActionPayload<
  'SUBSCRIPTION_UPDATE_PROCESS',
  SubscriptionUpdate
>;
export type SubscriptionUpdateSuccess = ActionPayload<'SUBSCRIPTION_UPDATE_SUCCESS', string>;
export type SubscriptionUpdateFailed = ActionPayload<'SUBSCRIPTION_UPDATE_FAILED', string>;
export type SubscriptionUpdateCompleted = Action<'SUBSCRIPTION_UPDATE_COMPLETED'>;

export type SubscriptionActions =
  | GetSubscriptionDataRequest
  | GetSubscriptionDataSuccess
  | GetSubscriptionDataFailed
  | SubscriptionUpdateRequest
  | SubscriptionUpdateSuccess
  | SubscriptionUpdateFailed
  | SubscriptionUpdateCompleted;
