import {
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
} from '../constants';
import { PasswordResetState, PasswordResetActions } from '../types';

const initialState: PasswordResetState = {
  statusText: '',
};

const passwordResetReducer = (
  state: PasswordResetState = initialState,
  action: PasswordResetActions,
): PasswordResetState => {
  switch (action.type) {
    case PASSWORD_RESET_PROCESS:
      return state;
    case PASSWORD_RESET_SUCCESS:
      return {
        statusText: action.payload,
      };
    case PASSWORD_RESET_FAILED:
      return {
        statusText: action.payload,
      };
    default:
      return state;
  }
};

export { passwordResetReducer };
