import { User } from 'api/types';

import {
  AUTH_PROCESS,
  BREAK_AUTH_PROCESS,
  AUTH_SUCCESS,
  AUTH_FAILED,
  PRELOAD_AUTH_DATA,
} from './constants';

export type AuthData = {
  email: string;
  password: string;
};

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type PreloadAuthData = Action<typeof PRELOAD_AUTH_DATA, null>;

export type RequestToAuth = Action<typeof AUTH_PROCESS, AuthData>;

export type BreakAuthProcess = Action<typeof BREAK_AUTH_PROCESS, null>;

export type SetAuthStatusSuccess = Action<typeof AUTH_SUCCESS, User>;

export type SetAuthStatusFailed = Action<typeof AUTH_FAILED, string>;

export type AuthActions =
  | RequestToAuth
  | BreakAuthProcess
  | SetAuthStatusSuccess
  | SetAuthStatusFailed
  | PreloadAuthData;
