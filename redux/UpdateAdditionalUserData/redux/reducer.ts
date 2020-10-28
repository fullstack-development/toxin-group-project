import {
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
  UPDATE_ADDITIONAL_USER_DATA_FAILED,
  UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
} from '../constants';
import { UpdateAdditionalUserDataActions, UpdateAdditionalUserDataState } from '../types';

const initialState: UpdateAdditionalUserDataState = {
  isCompleted: false,
  statusText: '',
};

const updateAdditionalUserData = (
  state: UpdateAdditionalUserDataState = initialState,
  action: UpdateAdditionalUserDataActions,
): UpdateAdditionalUserDataState => {
  switch (action.type) {
    case UPDATE_ADDITIONAL_USER_DATA_PROCESS:
      return {
        isCompleted: false,
        statusText: '',
      };
    case UPDATE_ADDITIONAL_USER_DATA_SUCCESS:
      return {
        isCompleted: true,
        statusText: 'Данные были успешно обновлены',
      };
    case UPDATE_ADDITIONAL_USER_DATA_FAILED:
      return {
        isCompleted: true,
        statusText: 'Произошла ошибка повторите попытку позже',
      };
    case UPDATE_ADDITIONAL_USER_DATA_COMPLETED:
      return {
        isCompleted: false,
        statusText: '',
      };
    default:
      return state;
  }
};

export { updateAdditionalUserData };
