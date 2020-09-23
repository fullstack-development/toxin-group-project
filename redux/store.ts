import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Store, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeStore = (): Store<unknown, Action<any>> => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(bindMiddleware([sagaMiddleware]));

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
