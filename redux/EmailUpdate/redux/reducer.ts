import { EMAIL_UPDATE_PROCESS, EMAIL_UPDATE_SUCCESS, EMAIL_UPDATE_FAILED } from '../constants';
import { EmailUpdateActions, EmailUpdateState } from '../types';

const initialState: EmailUpdateState = {
  statusText: '',
};

const emailUpdateReducer = (
  state: EmailUpdateState = initialState,
  action: EmailUpdateActions,
): EmailUpdateState => {
  switch (action.type) {
    case EMAIL_UPDATE_PROCESS:
      return state;
    case EMAIL_UPDATE_SUCCESS:
      return {
        statusText: `Подтверждение адреса электронной почты было отправлено на ${action.payload.email}`,
      };
    case EMAIL_UPDATE_FAILED:
      return {
        statusText: 'Произошла ошибка повторите попытку позже',
      };
    default:
      return state;
  }
};

export { emailUpdateReducer };
