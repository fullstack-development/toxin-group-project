import { Action, ActionPayload } from 'redux/action.model';
import { UserCredential } from 'services/api/Firebase/modules/Authentication/types';

export type ProfileData = {
  email: string;
  password: string;
  name: string;
  surname: string;
  birthDate: string;
  gender: 'male' | 'female';
  avatar: ArrayBuffer | Blob | Uint8Array;
  hasSpecialOffers: boolean;
};

export type RegistrationState = {
  isSuccess: boolean;
  isProcess: boolean;
  statusText: string;
};

export type RegistrationRequest = ActionPayload<'REGISTRATION_REQUEST', ProfileData>;
export type RegistrationStatusSuccess = ActionPayload<'REGISTRATION_SUCCESS', UserCredential>;
export type RegistrationStatusFailed = ActionPayload<'REGISTRATION_FAILED', string>;
export type BreakRegistrationProcess = Action<'BREAK_REGISTRATION_PROCESS'>;

export type RegistrationActions =
  | RegistrationRequest
  | RegistrationStatusSuccess
  | RegistrationStatusFailed
  | BreakRegistrationProcess;
