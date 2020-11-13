import { language } from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { language },
  sagas: [rootSaga],
};
