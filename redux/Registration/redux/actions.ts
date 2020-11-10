import { BreakRegistrationProcess, ProfileData, RegistrationRequest } from '../model';

const startRegistration = (data: ProfileData): RegistrationRequest => ({
  type: 'REGISTRATION_REQUEST',
  payload: data,
});

const cancelRegistration = (): BreakRegistrationProcess => ({
  type: 'BREAK_REGISTRATION_PROCESS',
});

export { startRegistration, cancelRegistration };
