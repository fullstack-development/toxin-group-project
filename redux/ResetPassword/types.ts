import { PROCESS, SUCCESS, FAILED } from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type State = {
  statusText: string;
};

export type Request = Action<typeof PROCESS, string>;

export type SetStatusSuccess = Action<typeof SUCCESS, string>;

export type SetStatusFailed = Action<typeof FAILED, string>;

export type Actions = Request | SetStatusSuccess | SetStatusFailed;
