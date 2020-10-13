import {
  AUTH_PROCESS,
  AUTH_SUCCESS,
  AUTH_FAILED,
  PRELOAD_AUTH_DATA,
  BREAK_AUTH_PROCESS,
  AUTH_REQUIRED,
} from './constants';
import { AuthActions } from './types';

export type State = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  displayName: null | string;
  wasFinishedAuthChecking: boolean;
};

const initialState: State = {
  isAuthSuccess: false,
  isAuthProcessNow: false,
  wasFinishedAuthChecking: false,
  displayName: null,
  authStatusText: '',
};

const rootReducer = (state: State = initialState, action: AuthActions): State => {
  switch (action.type) {
    case AUTH_PROCESS:
      return {
        ...state,
      };
    case PRELOAD_AUTH_DATA:
      return state;
    case BREAK_AUTH_PROCESS:
      return {
        ...state,
        isAuthProcessNow: false,
      };
    case AUTH_REQUIRED:
      return {
        ...state,
        wasFinishedAuthChecking: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthProcessNow: false,
        isAuthSuccess: true,
        wasFinishedAuthChecking: true,
        authStatusText: 'Вы успешно авторизованы!',
        displayName: action.payload.displayName || 'Аноним',
      };
    case AUTH_FAILED:
      return {
        ...state,
        isAuthProcessNow: true,
        wasFinishedAuthChecking: true,
        authStatusText: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
