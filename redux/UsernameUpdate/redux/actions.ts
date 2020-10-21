import { USERNAME_UPDATE_PROCESS } from '../constants';
import { SentData, UsernameUpdateRequest } from '../types';

const usernameUpdateRequest = (data: SentData): UsernameUpdateRequest => ({
  type: USERNAME_UPDATE_PROCESS,
  payload: data,
});

export { usernameUpdateRequest };
