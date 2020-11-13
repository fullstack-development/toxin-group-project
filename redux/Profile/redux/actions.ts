import { User } from 'firebase';

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
} from '../model';

const emailUpdate = (data: EmailUpdate): EmailUpdateRequest => ({
  type: 'EMAIL_UPDATE_PROCESS',
  payload: data,
});

const completeEmailUpdate = (): EmailUpdateCompleted => ({
  type: 'EMAIL_UPDATE_COMPLETED',
});

const getAdditionalUserData = (user: User): GetAdditionalUserDataRequest => ({
  type: 'GET_ADDITIONAL_USER_DATA_PROCESS',
  payload: user,
});

const passwordUpdate = (data: PasswordUpdate): PasswordUpdateRequest => ({
  type: 'PASSWORD_UPDATE_PROCESS',
  payload: data,
});

const completePasswordUpdate = (): PasswordUpdateCompleted => ({
  type: 'PASSWORD_UPDATE_COMPLETED',
});

const updateAdditionalUserData = (
  data: UpdateAdditionalUserData,
): UpdateAdditionalUserDataRequest => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_PROCESS',
  payload: data,
});

const completeAdditionalUserDataUpdate = (): UpdateAdditionalUserDataCompleted => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_COMPLETED',
});

const usernameUpdate = (data: UsernameUpdate): UsernameUpdateRequest => ({
  type: 'USERNAME_UPDATE_PROCESS',
  payload: data,
});

const completeUsernameUpdate = (): UsernameUpdateCompleted => ({
  type: 'USERNAME_UPDATE_COMPLETED',
});

export {
  emailUpdate,
  completeEmailUpdate,
  getAdditionalUserData,
  passwordUpdate,
  completePasswordUpdate,
  updateAdditionalUserData,
  completeAdditionalUserDataUpdate,
  usernameUpdate,
  completeUsernameUpdate,
};
