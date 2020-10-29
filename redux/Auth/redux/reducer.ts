import {
  AUTH_PROCESS,
  AUTH_SUCCESS,
  AUTH_FAILED,
  PRELOAD_AUTH_DATA,
  BREAK_AUTH_PROCESS,
  AUTH_REQUIRED,
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_COMPLETED,
} from '../constants';
import { AuthActions, AuthState } from '../types';

const initialState: AuthState = {
  isAuthSuccess: false,
  isAuthProcessNow: false,
  wasFinishedAuthChecking: false,
  displayName: null,
  authStatusText: '',
  isPasswordResetCompleted: false,
  passwordResetStatusText: '',
};

const auth = (state: AuthState = initialState, action: AuthActions): AuthState => {
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
    case PASSWORD_RESET_PROCESS:
      return {
        ...state,
        isPasswordResetCompleted: false,
        passwordResetStatusText: '',
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isPasswordResetCompleted: true,
        passwordResetStatusText: action.payload,
      };
    case PASSWORD_RESET_FAILED:
      return {
        ...state,
        isPasswordResetCompleted: true,
        passwordResetStatusText: action.payload,
      };
    case PASSWORD_RESET_COMPLETED:
      return {
        ...state,
        isPasswordResetCompleted: false,
        passwordResetStatusText: '',
      };
    default:
      return state;
  }
};

export default auth;
