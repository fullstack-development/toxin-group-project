import { updateAdditionalUserDataReducer } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const updateAdditionalUserDataReduxEntry = {
  reducers: { updateAdditionalUserDataReducer },
  sagas: [rootSaga],
};

export { updateAdditionalUserDataReduxEntry };
