import { passwordReset } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const passwordResetReduxEntry = {
  reducers: { passwordReset },
  sagas: [rootSaga],
};

export { passwordResetReduxEntry };
