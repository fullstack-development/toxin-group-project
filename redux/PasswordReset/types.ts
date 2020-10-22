import { PASSWORD_RESET_PROCESS, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILED } from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type PasswordResetState = {
  isCompleted: boolean;
  statusText: string;
};

type PasswordResetRequest = Action<typeof PASSWORD_RESET_PROCESS, string>;

type PasswordResetSuccess = Action<typeof PASSWORD_RESET_SUCCESS, string>;

type PasswordResetFailed = Action<typeof PASSWORD_RESET_FAILED, string>;

type PasswordResetActions = PasswordResetRequest | PasswordResetSuccess | PasswordResetFailed;

export type {
  PasswordResetState,
  PasswordResetRequest,
  PasswordResetSuccess,
  PasswordResetFailed,
  PasswordResetActions,
};
