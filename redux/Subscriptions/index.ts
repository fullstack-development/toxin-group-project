import { subscriptions } from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const subscriptionsReduxEntry = {
  reducers: { subscriptions },
  sagas: [rootSaga],
};
