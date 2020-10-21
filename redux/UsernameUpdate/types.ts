import {
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_SUCCESS,
  USERNAME_UPDATE_FAILED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type SentData = {
  user: firebase.User;
  displayName?: string;
};

type UsernameUpdateState = {
  statusText: string;
};

type UsernameUpdateRequest = Action<typeof USERNAME_UPDATE_PROCESS, SentData>;
type UsernameUpdateSuccess = Action<typeof USERNAME_UPDATE_SUCCESS, string>;
type UsernameUpdateFailed = Action<typeof USERNAME_UPDATE_FAILED, string>;

type UsernameUpdateActions = UsernameUpdateRequest | UsernameUpdateSuccess | UsernameUpdateFailed;

export type {
  SentData,
  UsernameUpdateState,
  UsernameUpdateRequest,
  UsernameUpdateSuccess,
  UsernameUpdateFailed,
  UsernameUpdateActions,
};
