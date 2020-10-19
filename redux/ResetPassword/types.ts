import { PROCESS, SUCCESS, FAILED } from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type State = {
  statusText: string;
};

type Request = Action<typeof PROCESS, string>;

type SetStatusSuccess = Action<typeof SUCCESS, string>;

type SetStatusFailed = Action<typeof FAILED, string>;

type Actions = Request | SetStatusSuccess | SetStatusFailed;

export type { State, Request, SetStatusSuccess, SetStatusFailed, Actions };
