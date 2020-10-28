import { passwordUpdate } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const passwordUpdateReduxEntry = {
  reducers: { passwordUpdate },
  sagas: [rootSaga],
};

export { passwordUpdateReduxEntry };
