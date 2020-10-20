import { emailUpdateReducer } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const emailUpdateReduxEntry = {
  reducers: { emailUpdateReducer },
  sagas: [rootSaga],
};

export { emailUpdateReduxEntry };
