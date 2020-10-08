import { UserCredential } from 'api/types';

import { AUTH_PROCESS, BREAK_AUTH_PROCESS, AUTH_SUCCESS, AUTH_FAILED } from './constant';

export type AuthData = {
  email: string;
  password: string;
};

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type RequestToAuth = Action<typeof AUTH_PROCESS, AuthData>;

export type BreakAuthProcess = Action<typeof BREAK_AUTH_PROCESS, null>;

export type SetAuthStatus = Action<typeof AUTH_SUCCESS | typeof AUTH_FAILED, UserCredential>;

export type AuthTypes = RequestToAuth | BreakAuthProcess | SetAuthStatus;
