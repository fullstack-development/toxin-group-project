import BookingReducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { BookingReducer },
  sagas: [rootSaga],
};
