import { passwordResetReducer } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const passwordResetReduxEntry = {
  reducers: { passwordResetReducer },
  sagas: [rootSaga],
};

export { passwordResetReduxEntry };
