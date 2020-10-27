import { User } from 'api/Firebase/modules/Authentication/types';

import {
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
  PASSWORD_UPDATE_COMPLETED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type SentData = {
  user: User;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type PasswordUpdateState = {
  isCompleted: boolean;
  statusText: string;
};

type PasswordUpdateRequest = Action<typeof PASSWORD_UPDATE_PROCESS, SentData>;
type PasswordUpdateSuccess = Action<typeof PASSWORD_UPDATE_SUCCESS, string>;
type PasswordUpdateFailed = Action<typeof PASSWORD_UPDATE_FAILED, string>;
type PasswordUpdateCompleted = Action<typeof PASSWORD_UPDATE_COMPLETED, string>;

type PasswordUpdateActions =
  | PasswordUpdateRequest
  | PasswordUpdateSuccess
  | PasswordUpdateFailed
  | PasswordUpdateCompleted;

export type {
  SentData,
  PasswordUpdateState,
  PasswordUpdateRequest,
  PasswordUpdateSuccess,
  PasswordUpdateFailed,
  PasswordUpdateCompleted,
  PasswordUpdateActions,
};
