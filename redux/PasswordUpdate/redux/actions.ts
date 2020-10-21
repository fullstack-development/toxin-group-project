import { PASSWORD_UPDATE_PROCESS } from '../constants';
import { SentData, PasswordUpdateRequest } from '../types';

const passwordUpdateRequest = (data: SentData): PasswordUpdateRequest => ({
  type: PASSWORD_UPDATE_PROCESS,
  payload: data,
});

export { passwordUpdateRequest };
