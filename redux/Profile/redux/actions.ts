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

export const emailUpdate = (data: EmailUpdate): EmailUpdateRequest => ({
  type: 'EMAIL_UPDATE_PROCESS',
  payload: data,
});

export const completeEmailUpdate = (): EmailUpdateCompleted => ({
  type: 'EMAIL_UPDATE_COMPLETED',
});

export const getAdditionalUserData = (user: User): GetAdditionalUserDataRequest => ({
  type: 'GET_ADDITIONAL_USER_DATA_PROCESS',
  payload: user,
});

export const passwordUpdate = (data: PasswordUpdate): PasswordUpdateRequest => ({
  type: 'PASSWORD_UPDATE_PROCESS',
  payload: data,
});

export const completePasswordUpdate = (): PasswordUpdateCompleted => ({
  type: 'PASSWORD_UPDATE_COMPLETED',
});

export const updateAdditionalUserData = (
  data: UpdateAdditionalUserData,
): UpdateAdditionalUserDataRequest => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_PROCESS',
  payload: data,
});

export const completeAdditionalUserDataUpdate = (): UpdateAdditionalUserDataCompleted => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_COMPLETED',
});

export const usernameUpdate = (data: UsernameUpdate): UsernameUpdateRequest => ({
  type: 'USERNAME_UPDATE_PROCESS',
  payload: data,
});

export const completeUsernameUpdate = (): UsernameUpdateCompleted => ({
  type: 'USERNAME_UPDATE_COMPLETED',
});
