import {
  AUTH_PROCESS,
  BREAK_AUTH_PROCESS,
  PRELOAD_AUTH_DATA,
  GOOGLE_AUTH_PROCESS,
} from './constants';
import {
  RequestToAuth,
  BreakAuthProcess,
  SetAuthStatusFailed,
  AuthData,
  SetAuthStatusSuccess,
  PreloadAuthData,
  SetAuthRequired,
} from './types';

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

const setAuthStatus = (
  data: SetAuthStatusSuccess | SetAuthStatusFailed | SetAuthRequired,
): SetAuthStatusSuccess | SetAuthStatusFailed | SetAuthRequired => data;

export { requestToAuth, requestToAuthWithGoogle, setAuthStatus, breakAuthProcess, preloadAuthData };
