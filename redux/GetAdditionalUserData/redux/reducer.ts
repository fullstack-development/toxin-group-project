import {
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
} from '../constants';
import { GetAdditionalUserDataActions, GetAdditionalUserDataState } from '../types';

const initialState: GetAdditionalUserDataState = {
  isCompleted: false,
  additionalUserData: null,
};

const getAdditionalUserData = (
  state: GetAdditionalUserDataState = initialState,
  action: GetAdditionalUserDataActions,
): GetAdditionalUserDataState => {
  switch (action.type) {
    case GET_ADDITIONAL_USER_DATA_PROCESS:
      return {
        isCompleted: false,
        additionalUserData: null,
      };
    case GET_ADDITIONAL_USER_DATA_SUCCESS:
      return {
        isCompleted: true,
        additionalUserData: action.payload,
      };
    case GET_ADDITIONAL_USER_DATA_FAILED:
      return {
        isCompleted: false,
        additionalUserData: null,
      };
    default:
      return state;
  }
};

export { getAdditionalUserData };
