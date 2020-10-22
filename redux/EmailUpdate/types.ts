import { EMAIL_UPDATE_PROCESS, EMAIL_UPDATE_SUCCESS, EMAIL_UPDATE_FAILED } from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type SentData = {
  user: firebase.User;
  email: string;
};

type EmailUpdateState = {
  isCompleted: boolean;
  statusText: string;
};

type EmailUpdateRequest = Action<typeof EMAIL_UPDATE_PROCESS, SentData>;
type EmailUpdateSuccess = Action<typeof EMAIL_UPDATE_SUCCESS, string>;
type EmailUpdateFailed = Action<typeof EMAIL_UPDATE_FAILED, string>;

type EmailUpdateActions = EmailUpdateRequest | EmailUpdateSuccess | EmailUpdateFailed;

export type {
  SentData,
  EmailUpdateState,
  EmailUpdateRequest,
  EmailUpdateSuccess,
  EmailUpdateFailed,
  EmailUpdateActions,
};
