import bookingReducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { bookingReducer },
  sagas: [rootSaga],
};
