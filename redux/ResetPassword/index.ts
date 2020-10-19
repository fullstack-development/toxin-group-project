import reducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

const reduxEntry = {
  reducers: { reducer },
  sagas: [rootSaga],
};

export { reduxEntry };
