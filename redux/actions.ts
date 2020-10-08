import { AUTH_PROCESS, BREAK_AUTH_PROCESS } from './constant';
import { RequestToAuth, BreakAuthProcess, SetAuthStatus, AuthData } from './types';

const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: AUTH_PROCESS,
  payload: data,
});

const breakAuthProcess = (): BreakAuthProcess => ({
  type: BREAK_AUTH_PROCESS,
});

const setAuthStatus = (data: SetAuthStatus): SetAuthStatus => data;

export { requestToAuth, setAuthStatus, breakAuthProcess };
