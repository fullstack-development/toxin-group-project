import { getRoomDetailsReducer } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const getRoomDetailsReduxEntry = {
  reducers: { getRoomDetailsReducer },
  sagas: [rootSaga],
};

export { getRoomDetailsReduxEntry };
