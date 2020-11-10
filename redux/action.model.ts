import { ForkEffect, takeLatest, takeLeading } from 'redux-saga/effects';

export type Action<Z> = {
  type: Z;
};

export type ActionPayload<Z, T> = Action<Z> & {
  payload: T;
};

export const takeLatestAction = <T extends string>(
  type: T,
  worker: (action: Action<T>) => unknown,
): ForkEffect<unknown> => takeLatest(type, worker);

export const takeLeadingAction = <T extends string>(
  type: T,
  worker: (action: Action<T>) => unknown,
): ForkEffect<unknown> => takeLeading(type, worker);
