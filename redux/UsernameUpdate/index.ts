import { usernameUpdate } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const usernameUpdateReduxEntry = {
  reducers: { usernameUpdate },
  sagas: [rootSaga],
};

export { usernameUpdateReduxEntry };
