import RegistrationReducer from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { RegistrationReducer },
  sagas: [rootSaga],
};
