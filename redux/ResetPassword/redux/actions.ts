import { PROCESS } from '../constants';
import { Request } from '../types';

const request = (email: string): Request => ({
  type: PROCESS,
  payload: email,
});

export { request };
