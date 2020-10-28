import { getRoomDetails } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const getRoomDetailsReduxEntry = {
  reducers: { getRoomDetails },
  sagas: [rootSaga],
};

export { getRoomDetailsReduxEntry };
