import { PASSWORD_RESET_PROCESS } from '../constants';
import { PasswordResetRequest } from '../types';

const passwordResetRequest = (email: string): PasswordResetRequest => ({
  type: PASSWORD_RESET_PROCESS,
  payload: email,
});

export { passwordResetRequest };
