import { AUTH_PROCESS, AUTH_SUCCESS, AUTH_FAILED, CLOSE_SNACKBAR } from './constant';
import { Action } from './types';

const initialState = {
  hasAuth: false,
  authStatusText: '',
  displayName: 'Аноним',
};

const rootReducer = (
  state: Record<string, unknown> = initialState,
  action: Action<unknown>,
): unknown => {
  switch (action.type) {
    case AUTH_PROCESS:
      return state;
    case AUTH_SUCCESS:
      return {
        ...state,
        hasAuth: true,
        authStatusText: 'Авторизация прошла успешно',
        displayName: action.payload.user.displayName || 'Аноним',
      };
    case AUTH_FAILED:
      return {
        ...state,
        authStatusText: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
