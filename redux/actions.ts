import { AUTH_PROCESS } from './constant';
import { Action, AuthData } from './types';

const requestToAuth = (data: AuthData): Action<AuthData> => ({
  type: AUTH_PROCESS,
  payload: data,
});

const setAuthStatus = (data: Action<unknown>): Action<unknown> => data;

export { requestToAuth, setAuthStatus };
