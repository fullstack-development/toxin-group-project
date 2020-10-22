import {
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
} from '../constants';
import { PasswordResetState, PasswordResetActions } from '../types';

const initialState: PasswordResetState = {
  isCompleted: false,
  statusText: '',
};

const passwordResetReducer = (
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
    default:
      return state;
  }
};

export { passwordResetReducer };
