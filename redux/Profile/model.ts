import { Action, ActionPayload } from 'redux/action.model';
import { AdditionalUserInformation } from 'services/api/entities/types';
import { User } from 'services/api/Firebase/modules/Authentication/types';

export type EmailUpdate = {
  user: User;
  email: string;
};

export type PasswordUpdate = {
  user: User;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type UpdateAdditionalUserData = {
  user: User;
  data: {
    birthDate?: string;
    gender?: 'female' | 'male';
  };
};

export type UsernameUpdate = {
  user: User;
  displayName: string;
};

export type ProfileState = {
  isEmailUpdatePending: boolean;
  isEmailUpdateCompleted: boolean;
  emailUpdateStatusText: string;
  isGetAdditionalUserDataSuccess: boolean;
  additionalUserData: AdditionalUserInformation;
  isPasswordUpdatePending: boolean;
  isPasswordUpdateCompleted: boolean;
  passwordUpdateStatusText: string;
  isUpdateAdditionalUserDataPending: boolean;
  isUpdateAdditionalUserDataCompleted: boolean;
  updateAdditionalUserDataStatusText: string;
  isUsernameUpdatePending: boolean;
  isUsernameUpdateCompleted: boolean;
  usernameUpdateStatusText: string;
};

export type EmailUpdateRequest = ActionPayload<'EMAIL_UPDATE_PROCESS', EmailUpdate>;
export type EmailUpdateSuccess = ActionPayload<'EMAIL_UPDATE_SUCCESS', string>;
export type EmailUpdateFailed = ActionPayload<'EMAIL_UPDATE_FAILED', string>;
export type EmailUpdateCompleted = Action<'EMAIL_UPDATE_COMPLETED'>;

export type GetAdditionalUserDataRequest = ActionPayload<'GET_ADDITIONAL_USER_DATA_PROCESS', User>;
export type GetAdditionalUserDataSuccess = ActionPayload<
  'GET_ADDITIONAL_USER_DATA_SUCCESS',
  AdditionalUserInformation
>;
export type GetAdditionalUserDataFailed = Action<'GET_ADDITIONAL_USER_DATA_FAILED'>;

export type PasswordUpdateRequest = ActionPayload<'PASSWORD_UPDATE_PROCESS', PasswordUpdate>;
export type PasswordUpdateSuccess = ActionPayload<'PASSWORD_UPDATE_SUCCESS', string>;
export type PasswordUpdateFailed = ActionPayload<'PASSWORD_UPDATE_FAILED', string>;
export type PasswordUpdateCompleted = Action<'PASSWORD_UPDATE_COMPLETED'>;

export type UpdateAdditionalUserDataRequest = ActionPayload<
  'UPDATE_ADDITIONAL_USER_DATA_PROCESS',
  UpdateAdditionalUserData
>;
export type UpdateAdditionalUserDataSuccess = ActionPayload<
  'UPDATE_ADDITIONAL_USER_DATA_SUCCESS',
  string
>;
export type UpdateAdditionalUserDataFailed = ActionPayload<
  'UPDATE_ADDITIONAL_USER_DATA_FAILED',
  string
>;
export type UpdateAdditionalUserDataCompleted = Action<'UPDATE_ADDITIONAL_USER_DATA_COMPLETED'>;

export type UsernameUpdateRequest = ActionPayload<'USERNAME_UPDATE_PROCESS', UsernameUpdate>;
export type UsernameUpdateSuccess = ActionPayload<'USERNAME_UPDATE_SUCCESS', string>;
export type UsernameUpdateFailed = ActionPayload<'USERNAME_UPDATE_FAILED', string>;
export type UsernameUpdateCompleted = Action<'USERNAME_UPDATE_COMPLETED'>;

export type ProfileActions =
  | EmailUpdateRequest
  | EmailUpdateSuccess
  | EmailUpdateFailed
  | EmailUpdateCompleted
  | GetAdditionalUserDataRequest
  | GetAdditionalUserDataSuccess
  | GetAdditionalUserDataFailed
  | PasswordUpdateRequest
  | PasswordUpdateSuccess
  | PasswordUpdateFailed
  | PasswordUpdateCompleted
  | UpdateAdditionalUserDataRequest
  | UpdateAdditionalUserDataSuccess
  | UpdateAdditionalUserDataFailed
  | UpdateAdditionalUserDataCompleted
  | UsernameUpdateRequest
  | UsernameUpdateSuccess
  | UsernameUpdateFailed
  | UsernameUpdateCompleted;
