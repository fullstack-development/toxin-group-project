import { updateAdditionalUserData } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const updateAdditionalUserDataReduxEntry = {
  reducers: { updateAdditionalUserData },
  sagas: [rootSaga],
};

export { updateAdditionalUserDataReduxEntry };
