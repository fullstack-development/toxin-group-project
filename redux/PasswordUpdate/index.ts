import { passwordUpdateReducer } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const passwordUpdateReduxEntry = {
  reducers: { passwordUpdateReducer },
  sagas: [rootSaga],
};

export { passwordUpdateReduxEntry };
