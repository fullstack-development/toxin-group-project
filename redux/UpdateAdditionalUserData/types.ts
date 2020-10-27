import { User } from 'api/Firebase/modules/Authentication/types';

import {
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
  UPDATE_ADDITIONAL_USER_DATA_FAILED,
  UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type SentData = {
  user: User;
  data: {
    birthday?: Date;
    gender?: string;
    receiveOffers?: boolean;
  };
};

type UpdateAdditionalUserDataState = {
  isCompleted: boolean;
  statusText: string;
};

type UpdateAdditionalUserDataRequest = Action<typeof UPDATE_ADDITIONAL_USER_DATA_PROCESS, SentData>;
type UpdateAdditionalUserDataSuccess = Action<typeof UPDATE_ADDITIONAL_USER_DATA_SUCCESS, string>;
type UpdateAdditionalUserDataFailed = Action<typeof UPDATE_ADDITIONAL_USER_DATA_FAILED, string>;
type UpdateAdditionalUserDataCompleted = Action<
  typeof UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
  string
>;

type UpdateAdditionalUserDataActions =
  | UpdateAdditionalUserDataRequest
  | UpdateAdditionalUserDataSuccess
  | UpdateAdditionalUserDataFailed
  | UpdateAdditionalUserDataCompleted;

export type {
  SentData,
  UpdateAdditionalUserDataState,
  UpdateAdditionalUserDataRequest,
  UpdateAdditionalUserDataSuccess,
  UpdateAdditionalUserDataFailed,
  UpdateAdditionalUserDataCompleted,
  UpdateAdditionalUserDataActions,
};
