import {
  AUTH_PROCESS,
  BREAK_AUTH_PROCESS,
  PRELOAD_AUTH_DATA,
  GOOGLE_AUTH_PROCESS,
} from '../constants';
import { RequestToAuth, BreakAuthProcess, AuthData, PreloadAuthData } from '../types';

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

export { requestToAuth, requestToAuthWithGoogle, breakAuthProcess, preloadAuthData };
