import { DispatchEvent } from 'react-redux';

import { store } from '../../store';
import { REGISTRATION_REQUEST, BREAK_REGISTRATION_PROCESS } from '../constants';
import { ProfileData, RegistrationRequest } from '../types';

const sendRegistrationRequest = (data: ProfileData): RegistrationRequest => ({
  type: REGISTRATION_REQUEST,
  payload: data,
});

const stopRegistrationProcess = (): DispatchEvent =>
  store.dispatch({ type: BREAK_REGISTRATION_PROCESS });

export { sendRegistrationRequest, stopRegistrationProcess };
