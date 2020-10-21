import {
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
} from '../constants';
import { PasswordUpdateActions, PasswordUpdateState } from '../types';

const initialState: PasswordUpdateState = {
  statusText: '',
};

const passwordUpdateReducer = (
  state: PasswordUpdateState = initialState,
  action: PasswordUpdateActions,
): PasswordUpdateState => {
  switch (action.type) {
    case PASSWORD_UPDATE_PROCESS:
      return state;
    case PASSWORD_UPDATE_SUCCESS:
      return {
        statusText: 'Пароль был успешно изменен',
      };
    case PASSWORD_UPDATE_FAILED:
      return {
        statusText: 'Произошла ошибка',
      };
    default:
      return state;
  }
};

export { passwordUpdateReducer };
