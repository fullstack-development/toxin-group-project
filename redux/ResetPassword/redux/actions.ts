import { PROCESS } from '../constants';
import { Request } from '../types';

const request = (data: string): Request => ({
  type: PROCESS,
  payload: data,
});

export { request };
