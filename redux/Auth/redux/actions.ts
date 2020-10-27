import {
  AUTH_PROCESS,
  BREAK_AUTH_PROCESS,
  PRELOAD_AUTH_DATA,
  GOOGLE_AUTH_PROCESS,
  AUTH_LOGOUT_PROCESS,
} from '../constants';
import {
  RequestToAuth,
  BreakAuthProcess,
  AuthData,
  PreloadAuthData,
  LogoutProcess,
} from '../types';

const Logout = (): LogoutProcess => ({
  type: AUTH_LOGOUT_PROCESS,
});

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

export { Logout, requestToAuth, requestToAuthWithGoogle, breakAuthProcess, preloadAuthData };
