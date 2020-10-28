import {
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_COMPLETED,
} from '../constants';
import { PasswordResetState, PasswordResetActions } from '../types';

const initialState: PasswordResetState = {
  isCompleted: false,
  statusText: '',
};

const passwordReset = (
  state: PasswordResetState = initialState,
  action: PasswordResetActions,
): PasswordResetState => {
  switch (action.type) {
    case PASSWORD_RESET_PROCESS:
      return {
        isCompleted: false,
        statusText: '',
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        isCompleted: true,
        statusText: action.payload,
      };
    case PASSWORD_RESET_FAILED:
      return {
        isCompleted: true,
        statusText: action.payload,
      };
    case PASSWORD_RESET_COMPLETED:
      return {
        isCompleted: false,
        statusText: '',
      };
    default:
      return state;
  }
};

export { passwordReset };
