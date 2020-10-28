import { AdditionalUserInformation } from 'api/entities/types';
import { User } from 'api/Firebase/modules/Authentication/types';

import {
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type GetAdditionalUserDataState = {
  isCompleted: boolean;
  additionalUserData: null | AdditionalUserInformation;
};

type GetAdditionalUserDataRequest = Action<typeof GET_ADDITIONAL_USER_DATA_PROCESS, User>;
type GetAdditionalUserDataSuccess = Action<
  typeof GET_ADDITIONAL_USER_DATA_SUCCESS,
  AdditionalUserInformation
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
