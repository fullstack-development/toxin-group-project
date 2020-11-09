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
  subscriptionData: null,
  isUpdatePending: false,
  isUpdateCompleted: false,
  updateStatusText: '',
};

const subscriptions = (
  state: SubscriptionState = initialState,
  action: SubscriptionActions,
): SubscriptionState => {
  switch (action.type) {
    case GET_SUBSCRIPTION_DATA_PROCESS:
      return {
        ...state,
        subscriptionData: null,
      };
    case GET_SUBSCRIPTION_DATA_SUCCESS:
      return {
        ...state,
        subscriptionData: action.payload,
      };
    case GET_SUBSCRIPTION_DATA_FAILED:
      return {
        ...state,
        subscriptionData: action.payload,
      };
    case SUBSCRIPTION_UPDATE_PROCESS:
      return {
        ...state,
        isUpdatePending: true,
        isUpdateCompleted: false,
        updateStatusText: '',
      };
    case SUBSCRIPTION_UPDATE_SUCCESS:
      return {
        ...state,
        isUpdatePending: false,
        isUpdateCompleted: true,
        updateStatusText: action.payload,
      };
    case SUBSCRIPTION_UPDATE_FAILED:
      return {
        ...state,
        isUpdatePending: false,
        isUpdateCompleted: true,
        updateStatusText: action.payload,
      };
    case SUBSCRIPTION_UPDATE_COMPLETED:
      return {
        ...state,
        isUpdatePending: false,
        isUpdateCompleted: false,
        updateStatusText: '',
      };
    default:
      return state;
  }
};

export { subscriptions };
