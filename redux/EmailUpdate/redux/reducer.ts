import { EMAIL_UPDATE_PROCESS, EMAIL_UPDATE_SUCCESS, EMAIL_UPDATE_FAILED } from '../constants';
import { EmailUpdateActions, EmailUpdateState } from '../types';

const initialState: EmailUpdateState = {
  isCompleted: false,
  statusText: '',
};

const emailUpdateReducer = (
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
    default:
      return state;
  }
};

export { emailUpdateReducer };
