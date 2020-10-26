import AuthReducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { AuthReducer },
  sagas: [rootSaga],
};
