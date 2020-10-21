import authReducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { authReducer },
  sagas: [rootSaga],
};
