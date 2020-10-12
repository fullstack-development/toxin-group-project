import { AUTH_PROCESS, BREAK_AUTH_PROCESS, PRELOAD_AUTH_DATA } from './constants';
import {
  RequestToAuth,
  BreakAuthProcess,
  SetAuthStatusFailed,
  AuthData,
  SetAuthStatusSuccess,
  PreloadAuthData,
} from './types';

const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: AUTH_PROCESS,
  payload: data,
});

const breakAuthProcess = (): BreakAuthProcess => ({
  type: BREAK_AUTH_PROCESS,
});

const preloadAuthData = (): PreloadAuthData => ({
  type: PRELOAD_AUTH_DATA,
});

const setAuthStatus = (
  data: SetAuthStatusSuccess | SetAuthStatusFailed,
): SetAuthStatusSuccess | SetAuthStatusFailed => data;

export { requestToAuth, setAuthStatus, breakAuthProcess, preloadAuthData };
