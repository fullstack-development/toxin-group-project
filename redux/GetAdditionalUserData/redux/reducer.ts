import {
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
} from '../constants';
import { GetAdditionalUserDataActions, GetAdditionalUserDataState } from '../types';

const initialState: GetAdditionalUserDataState = {
  additionalUserData: null,
};

const getAdditionalUserDataReducer = (
  state: GetAdditionalUserDataState = initialState,
  action: GetAdditionalUserDataActions,
): GetAdditionalUserDataState => {
  switch (action.type) {
    case GET_ADDITIONAL_USER_DATA_PROCESS:
      return {
        additionalUserData: null,
      };
    case GET_ADDITIONAL_USER_DATA_SUCCESS:
      return {
        additionalUserData: action.payload,
      };
    case GET_ADDITIONAL_USER_DATA_FAILED:
      return {
        additionalUserData: null,
      };
    default:
      return state;
  }
};

export { getAdditionalUserDataReducer };
