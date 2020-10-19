import reducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { reducer },
  sagas: [rootSaga],
};
