import { AUTH_PROCESS, AUTH_SUCCESS, AUTH_FAILED, BREAK_AUTH_PROCESS } from './constant';
import { AuthTypes } from './types';

export type State = {
  isAuthSuccess?: boolean;
  isAuthProcessNow?: boolean;
  authStatusText?: string | unknown;
  displayName?: false | string;
};

const initialState: State = {
  isAuthSuccess: false,
  isAuthProcessNow: false,
  displayName: false,
  authStatusText: '',
};

const rootReducer = (state: State = initialState, action: AuthTypes): State => {
  switch (action.type) {
    case AUTH_PROCESS:
      return state;
    case BREAK_AUTH_PROCESS:
      return {
        ...state,
        isAuthProcessNow: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthProcessNow: true,
        isAuthSuccess: true,
        authStatusText: 'Вы успешно авторизованы!',
        displayName: action.payload.user.displayName || 'Аноним',
      };
    case AUTH_FAILED:
      return {
        ...state,
        isAuthProcessNow: true,
        authStatusText: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
