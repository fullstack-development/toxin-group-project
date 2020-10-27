import BookedHistoryReducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { BookedHistoryReducer },
  sagas: [rootSaga],
};
