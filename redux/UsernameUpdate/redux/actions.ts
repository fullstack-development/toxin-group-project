import { DispatchEvent } from 'react-redux';

import { store } from 'redux/store';

import { USERNAME_UPDATE_PROCESS, USERNAME_UPDATE_COMPLETED } from '../constants';
import { SentData, UsernameUpdateRequest } from '../types';

const usernameUpdateRequest = (data: SentData): UsernameUpdateRequest => ({
  type: USERNAME_UPDATE_PROCESS,
  payload: data,
});

const usernameUpdateCompleted = (): DispatchEvent =>
  store.dispatch({ type: USERNAME_UPDATE_COMPLETED });

export { usernameUpdateRequest, usernameUpdateCompleted };
