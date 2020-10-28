import { getAdditionalUserData } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const getAdditionalUserDataReduxEntry = {
  reducers: { getAdditionalUserData },
  sagas: [rootSaga],
};

export { getAdditionalUserDataReduxEntry };
