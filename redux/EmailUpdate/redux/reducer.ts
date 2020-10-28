import {
  EMAIL_UPDATE_PROCESS,
  EMAIL_UPDATE_SUCCESS,
  EMAIL_UPDATE_FAILED,
  EMAIL_UPDATE_COMPLETED,
} from '../constants';
import { EmailUpdateActions, EmailUpdateState } from '../types';

const initialState: EmailUpdateState = {
  isCompleted: false,
  statusText: '',
};

const emailUpdate = (
  state: EmailUpdateState = initialState,
  action: EmailUpdateActions,
): EmailUpdateState => {
  switch (action.type) {
    case EMAIL_UPDATE_PROCESS:
      return {
        isCompleted: false,
        statusText: '',
      };
    case EMAIL_UPDATE_SUCCESS:
      return {
        isCompleted: true,
        statusText: action.payload,
      };
    case EMAIL_UPDATE_FAILED:
      return {
        isCompleted: true,
        statusText: action.payload,
      };
    case EMAIL_UPDATE_COMPLETED:
      return {
        isCompleted: false,
        statusText: '',
      };
    default:
      return state;
  }
};

export { emailUpdate };
