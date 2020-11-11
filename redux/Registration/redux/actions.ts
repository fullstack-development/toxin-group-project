import { DispatchEvent } from 'react-redux';

import { store } from '../../store';
import { REGISTRATION_REQUEST, BREAK_REGISTRATION_PROCESS } from '../constants';
import { ProfileData, RegistrationRequest } from '../model';

const startRegistration = (data: ProfileData): RegistrationRequest => ({
  type: REGISTRATION_REQUEST,
  payload: data,
});

const cancelRegistration = (): DispatchEvent =>
  store.dispatch({ type: BREAK_REGISTRATION_PROCESS });

export { startRegistration, cancelRegistration };
