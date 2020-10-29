import { User } from 'firebase';

import {
  EMAIL_UPDATE_PROCESS,
  EMAIL_UPDATE_COMPLETED,
  GET_ADDITIONAL_USER_DATA_PROCESS,
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_COMPLETED,
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_COMPLETED,
} from '../constants';
import {
  EmailUpdate,
  PasswordUpdate,
  UpdateAdditionalUserData,
  UsernameUpdate,
  EmailUpdateRequest,
  EmailUpdateCompleted,
  GetAdditionalUserDataRequest,
  PasswordUpdateRequest,
  PasswordUpdateCompleted,
  UpdateAdditionalUserDataRequest,
  UpdateAdditionalUserDataCompleted,
  UsernameUpdateRequest,
  UsernameUpdateCompleted,
} from '../types';

const emailUpdateRequest = (data: EmailUpdate): EmailUpdateRequest => ({
  type: EMAIL_UPDATE_PROCESS,
  payload: data,
});

const emailUpdateCompleted = (): EmailUpdateCompleted => ({
  type: EMAIL_UPDATE_COMPLETED,
});

const getAdditionalUserDataRequest = (user: User): GetAdditionalUserDataRequest => ({
  type: GET_ADDITIONAL_USER_DATA_PROCESS,
  payload: user,
});

const passwordUpdateRequest = (data: PasswordUpdate): PasswordUpdateRequest => ({
  type: PASSWORD_UPDATE_PROCESS,
  payload: data,
});

const passwordUpdateCompleted = (): PasswordUpdateCompleted => ({
  type: PASSWORD_UPDATE_COMPLETED,
});

const updateAdditionalUserDataRequest = (
  data: UpdateAdditionalUserData,
): UpdateAdditionalUserDataRequest => ({
  type: UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  payload: data,
});

const updateAdditionalUserDataCompleted = (): UpdateAdditionalUserDataCompleted => ({
  type: UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
});

const usernameUpdateRequest = (data: UsernameUpdate): UsernameUpdateRequest => ({
  type: USERNAME_UPDATE_PROCESS,
  payload: data,
});

const usernameUpdateCompleted = (): UsernameUpdateCompleted => ({
  type: USERNAME_UPDATE_COMPLETED,
});

export {
  emailUpdateRequest,
  emailUpdateCompleted,
  getAdditionalUserDataRequest,
  passwordUpdateRequest,
  passwordUpdateCompleted,
  updateAdditionalUserDataRequest,
  updateAdditionalUserDataCompleted,
  usernameUpdateRequest,
  usernameUpdateCompleted,
};
