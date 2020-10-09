import { AUTH_PROCESS, BREAK_AUTH_PROCESS } from './constants';
import {
  RequestToAuth,
  BreakAuthProcess,
  SetAuthStatusFailed,
  AuthData,
  SetAuthStatusSuccess,
} from './types';

const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: AUTH_PROCESS,
  payload: data,
});

const breakAuthProcess = (): BreakAuthProcess => ({
  type: BREAK_AUTH_PROCESS,
});

const setAuthStatus = (
  data: SetAuthStatusSuccess | SetAuthStatusFailed,
): SetAuthStatusSuccess | SetAuthStatusFailed => data;

export { requestToAuth, setAuthStatus, breakAuthProcess };
