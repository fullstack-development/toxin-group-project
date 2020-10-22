import {
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_SUCCESS,
  USERNAME_UPDATE_FAILED,
} from '../constants';
import { UsernameUpdateActions, UsernameUpdateState } from '../types';

const initialState: UsernameUpdateState = {
  isCompleted: false,
  statusText: '',
};

const usernameUpdateReducer = (
  state: UsernameUpdateState = initialState,
  action: UsernameUpdateActions,
): UsernameUpdateState => {
  switch (action.type) {
    case USERNAME_UPDATE_PROCESS:
      return {
        isCompleted: false,
        statusText: '',
      };
    case USERNAME_UPDATE_SUCCESS:
      return {
        isCompleted: true,
        statusText: 'Данные были успешно обновлены',
      };
    case USERNAME_UPDATE_FAILED:
      return {
        isCompleted: true,
        statusText: 'Произошла ошибка повторите попытку позже',
      };
    default:
      return state;
  }
};

export { usernameUpdateReducer };
