import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (contex) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(bindMiddleware([sagaMiddleware]));

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
