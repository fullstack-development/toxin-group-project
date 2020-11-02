import {
  GET_SUBSCRIPTION_DATA_PROCESS,
  GET_SUBSCRIPTION_DATA_SUCCESS,
  GET_SUBSCRIPTION_DATA_FAILED,
  SUBSCRIPTION_UPDATE_PROCESS,
  SUBSCRIPTION_UPDATE_SUCCESS,
  SUBSCRIPTION_UPDATE_FAILED,
  SUBSCRIPTION_UPDATE_COMPLETED,
} from '../constants';
import { SubscriptionState, SubscriptionActions } from '../types';

const initialState: SubscriptionState = {
  isGetSubscriptionDataCompleted: false,
  subscriptionData: null,
  isSubscriptionUpdateCompleted: false,
  subscriptionUpdateStatusText: '',
};

const subscriptions = (
  state: SubscriptionState = initialState,
  action: SubscriptionActions,
): SubscriptionState => {
  switch (action.type) {
    case GET_SUBSCRIPTION_DATA_PROCESS:
      return {
        ...state,
        isGetSubscriptionDataCompleted: false,
        subscriptionData: null,
      };
    case GET_SUBSCRIPTION_DATA_SUCCESS:
      return {
        ...state,
        isGetSubscriptionDataCompleted: true,
        subscriptionData: action.payload,
      };
    case GET_SUBSCRIPTION_DATA_FAILED:
      return {
        ...state,
        isGetSubscriptionDataCompleted: false,
        subscriptionData: action.payload,
      };
    case SUBSCRIPTION_UPDATE_PROCESS:
      return {
        ...state,
        isSubscriptionUpdateCompleted: false,
        subscriptionUpdateStatusText: '',
      };
    case SUBSCRIPTION_UPDATE_SUCCESS:
      return {
        ...state,
        isSubscriptionUpdateCompleted: true,
        subscriptionUpdateStatusText: action.payload,
      };
    case SUBSCRIPTION_UPDATE_FAILED:
      return {
        ...state,
        isSubscriptionUpdateCompleted: true,
        subscriptionUpdateStatusText: action.payload,
      };
    case SUBSCRIPTION_UPDATE_COMPLETED:
      return {
        ...state,
        isSubscriptionUpdateCompleted: false,
        subscriptionUpdateStatusText: '',
      };
    default:
      return state;
  }
};

export { subscriptions };
