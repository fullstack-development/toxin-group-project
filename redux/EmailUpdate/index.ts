import { emailUpdate } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const emailUpdateReduxEntry = {
  reducers: { emailUpdate },
  sagas: [rootSaga],
};

export { emailUpdateReduxEntry };
