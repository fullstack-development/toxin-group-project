import { UserCredential } from 'api/Firebase/modules/Authentication/types';

import {
  REGISTRATION_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  BREAK_REGISTRATION_PROCESS,
} from './constants';

export type ProfileData = {
  email: string;
  password: string;
  name: string;
  surname: string;
  birthDate: string;
  gender: 'male' | 'female';
  avatar: ArrayBuffer | Blob | Uint8Array;
  specialOffers: boolean;
};

export type RegistrationState = {
  isSuccess: boolean;
  isProcess: boolean;
  statusText: string;
};

export type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type RegistrationRequest = Action<typeof REGISTRATION_REQUEST, ProfileData>;
export type RegistrationStatusSuccess = Action<typeof REGISTRATION_SUCCESS, UserCredential>;
export type RegistrationStatusFailed = Action<typeof REGISTRATION_FAILED, string>;
export type BreakRegistrationProcess = Action<typeof BREAK_REGISTRATION_PROCESS, null>;

export type RegistrationActions =
  | RegistrationRequest
  | RegistrationStatusSuccess
  | RegistrationStatusFailed
  | BreakRegistrationProcess;
