import {
  AUTH_PROCESS,
  BREAK_AUTH_PROCESS,
  PRELOAD_AUTH_DATA,
  GOOGLE_AUTH_PROCESS,
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_COMPLETED,
} from '../constants';
import {
  RequestToAuth,
  BreakAuthProcess,
  AuthData,
  PreloadAuthData,
  PasswordResetRequest,
  PasswordResetCompleted,
} from '../types';

const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: AUTH_PROCESS,
  payload: data,
});

const requestToAuthWithGoogle = (): RequestToAuth => ({
  type: GOOGLE_AUTH_PROCESS,
});

const breakAuthProcess = (): BreakAuthProcess => ({
  type: BREAK_AUTH_PROCESS,
});

const preloadAuthData = (): PreloadAuthData => ({
  type: PRELOAD_AUTH_DATA,
});

const passwordResetRequest = (email: string): PasswordResetRequest => ({
  type: PASSWORD_RESET_PROCESS,
  payload: email,
});

const passwordResetCompleted = (): PasswordResetCompleted => ({
  type: PASSWORD_RESET_COMPLETED,
});

export {
  requestToAuth,
  requestToAuthWithGoogle,
  breakAuthProcess,
  preloadAuthData,
  passwordResetRequest,
  passwordResetCompleted,
};
