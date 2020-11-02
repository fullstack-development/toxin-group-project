import {
  GET_SUBSCRIPTION_DATA_PROCESS,
  GET_SUBSCRIPTION_DATA_SUCCESS,
  GET_SUBSCRIPTION_DATA_FAILED,
  SUBSCRIPTION_UPDATE_PROCESS,
  SUBSCRIPTION_UPDATE_SUCCESS,
  SUBSCRIPTION_UPDATE_FAILED,
  SUBSCRIPTION_UPDATE_COMPLETED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type SubscriptionData = {
  specialOffers: boolean;
};

type SubscriptionUpdate = {
  email: string;
  subscriptions: {
    specialOffers: boolean;
  };
};

type SubscriptionState = {
  isGetSubscriptionDataCompleted: boolean;
  subscriptionData: null | SubscriptionData;
  isSubscriptionUpdateCompleted: boolean;
  subscriptionUpdateStatusText: string;
};

type GetSubscriptionDataRequest = Action<typeof GET_SUBSCRIPTION_DATA_PROCESS, string>;
type GetSubscriptionDataSuccess = Action<typeof GET_SUBSCRIPTION_DATA_SUCCESS, SubscriptionData>;
type GetSubscriptionDataFailed = Action<typeof GET_SUBSCRIPTION_DATA_FAILED, null>;

type SubscriptionUpdateRequest = Action<typeof SUBSCRIPTION_UPDATE_PROCESS, SubscriptionUpdate>;
type SubscriptionUpdateSuccess = Action<typeof SUBSCRIPTION_UPDATE_SUCCESS, string>;
type SubscriptionUpdateFailed = Action<typeof SUBSCRIPTION_UPDATE_FAILED, string>;
type SubscriptionUpdateCompleted = Action<typeof SUBSCRIPTION_UPDATE_COMPLETED, string>;

type SubscriptionActions =
  | GetSubscriptionDataRequest
  | GetSubscriptionDataSuccess
  | GetSubscriptionDataFailed
  | SubscriptionUpdateRequest
  | SubscriptionUpdateSuccess
  | SubscriptionUpdateFailed
  | SubscriptionUpdateCompleted;

export type {
  SubscriptionData,
  SubscriptionUpdate,
  SubscriptionState,
  GetSubscriptionDataRequest,
  GetSubscriptionDataSuccess,
  GetSubscriptionDataFailed,
  SubscriptionUpdateRequest,
  SubscriptionUpdateSuccess,
  SubscriptionUpdateFailed,
  SubscriptionUpdateCompleted,
  SubscriptionActions,
};
