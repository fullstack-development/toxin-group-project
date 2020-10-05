import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { watchAuthUser } from './sagas';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

sagaMiddleware.run(watchAuthUser);
