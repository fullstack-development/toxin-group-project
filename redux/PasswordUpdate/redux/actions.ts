import { DispatchEvent } from 'react-redux';

import { store } from 'redux/store';

import { PASSWORD_UPDATE_PROCESS, PASSWORD_UPDATE_COMPLETED } from '../constants';
import { SentData, PasswordUpdateRequest } from '../types';

const passwordUpdateRequest = (data: SentData): PasswordUpdateRequest => ({
  type: PASSWORD_UPDATE_PROCESS,
  payload: data,
});

const passwordUpdateCompleted = (): DispatchEvent =>
  store.dispatch({ type: PASSWORD_UPDATE_COMPLETED });

export { passwordUpdateRequest, passwordUpdateCompleted };
