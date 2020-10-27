import { getAdditionalUserDataReducer } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const getAdditionalUserDataReduxEntry = {
  reducers: { getAdditionalUserDataReducer },
  sagas: [rootSaga],
};

export { getAdditionalUserDataReduxEntry };
