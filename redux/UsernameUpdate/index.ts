import { usernameUpdateReducer } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const usernameUpdateReduxEntry = {
  reducers: { usernameUpdateReducer },
  sagas: [rootSaga],
};

export { usernameUpdateReduxEntry };
