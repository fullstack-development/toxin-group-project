import { User } from 'api/Firebase/modules/Authentication/types';

import {
  EMAIL_UPDATE_PROCESS,
  EMAIL_UPDATE_SUCCESS,
  EMAIL_UPDATE_FAILED,
  EMAIL_UPDATE_COMPLETED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type SentData = {
  user: User;
  email: string;
};

type EmailUpdateState = {
  isCompleted: boolean;
  statusText: string;
};

type EmailUpdateRequest = Action<typeof EMAIL_UPDATE_PROCESS, SentData>;
type EmailUpdateSuccess = Action<typeof EMAIL_UPDATE_SUCCESS, string>;
type EmailUpdateFailed = Action<typeof EMAIL_UPDATE_FAILED, string>;
type EmailUpdateCompleted = Action<typeof EMAIL_UPDATE_COMPLETED, string>;

type EmailUpdateActions =
  | EmailUpdateRequest
  | EmailUpdateSuccess
  | EmailUpdateFailed
  | EmailUpdateCompleted;

export type {
  SentData,
  EmailUpdateState,
  EmailUpdateRequest,
  EmailUpdateSuccess,
  EmailUpdateFailed,
  EmailUpdateCompleted,
  EmailUpdateActions,
};
