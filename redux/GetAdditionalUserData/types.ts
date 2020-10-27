import { User } from 'api/Firebase/modules/Authentication/types';
import { Timestamp } from 'api/Firebase/modules/Database';

import {
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type AdditionalUserData = {
  gender: string;
  birthday: Timestamp;
  receiveOffers: boolean;
};

type GetAdditionalUserDataState = {
  additionalUserData: null | AdditionalUserData;
};

type GetAdditionalUserDataRequest = Action<typeof GET_ADDITIONAL_USER_DATA_PROCESS, User>;
type GetAdditionalUserDataSuccess = Action<
  typeof GET_ADDITIONAL_USER_DATA_SUCCESS,
  AdditionalUserData
>;
type GetAdditionalUserDataFailed = Action<typeof GET_ADDITIONAL_USER_DATA_FAILED, null>;

type GetAdditionalUserDataActions =
  | GetAdditionalUserDataRequest
  | GetAdditionalUserDataSuccess
  | GetAdditionalUserDataFailed;

export type {
  GetAdditionalUserDataState,
  GetAdditionalUserDataRequest,
  GetAdditionalUserDataSuccess,
  GetAdditionalUserDataFailed,
  GetAdditionalUserDataActions,
};
