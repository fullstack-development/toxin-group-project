import { ForkEffect, takeLatest, takeLeading } from 'redux-saga/effects';

type Action<Z> = {
  type: Z;
};

type ActionPayload<Z, T> = Action<Z> & {
  payload: T;
};

const takeLatestAction = <T extends string>(
  type: T,
  worker: (action: Action<T>) => unknown,
): ForkEffect<unknown> => takeLatest(type, worker);

const takeLeadingAction = <T extends string>(
  type: T,
  worker: (action: Action<T>) => unknown,
): ForkEffect<unknown> => takeLeading(type, worker);

export type { Action, ActionPayload };

export { takeLatestAction, takeLeadingAction };
