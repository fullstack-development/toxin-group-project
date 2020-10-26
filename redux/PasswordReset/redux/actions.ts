import { DispatchEvent } from 'react-redux';

import { store } from 'redux/store';

import { PASSWORD_RESET_PROCESS, PASSWORD_RESET_COMPLETED } from '../constants';
import { PasswordResetRequest } from '../types';

const passwordResetRequest = (email: string): PasswordResetRequest => ({
  type: PASSWORD_RESET_PROCESS,
  payload: email,
});

const passwordResetCompleted = (): DispatchEvent =>
  store.dispatch({ type: PASSWORD_RESET_COMPLETED });

export { passwordResetRequest, passwordResetCompleted };
