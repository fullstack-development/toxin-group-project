import {
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type SentData = {
  user: firebase.User;
  currentPassword: string;
  newPassword: string;
};

type PasswordUpdateState = {
  statusText: string;
};

type PasswordUpdateRequest = Action<typeof PASSWORD_UPDATE_PROCESS, SentData>;
type PasswordUpdateSuccess = Action<typeof PASSWORD_UPDATE_SUCCESS, string>;
type PasswordUpdateFailed = Action<typeof PASSWORD_UPDATE_FAILED, string>;

type PasswordUpdateActions = PasswordUpdateRequest | PasswordUpdateSuccess | PasswordUpdateFailed;

export type {
  SentData,
  PasswordUpdateState,
  PasswordUpdateRequest,
  PasswordUpdateSuccess,
  PasswordUpdateFailed,
  PasswordUpdateActions,
};
