import { DispatchEvent } from 'react-redux';

import { store } from 'redux/store';

import {
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
} from '../constants';
import { SentData, UpdateAdditionalUserDataRequest } from '../types';

const updateAdditionalUserDataRequest = (data: SentData): UpdateAdditionalUserDataRequest => ({
  type: UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  payload: data,
});

const updateAdditionalUserDataCompleted = (): DispatchEvent =>
  store.dispatch({ type: UPDATE_ADDITIONAL_USER_DATA_COMPLETED });

export { updateAdditionalUserDataRequest, updateAdditionalUserDataCompleted };
