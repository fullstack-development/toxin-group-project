import { User } from 'api/Firebase/modules/Authentication';

import { GET_ADDITIONAL_USER_DATA_PROCESS } from '../constants';
import { GetAdditionalUserDataRequest } from '../types';

const getAdditionalUserDataRequest = (user: User): GetAdditionalUserDataRequest => ({
  type: GET_ADDITIONAL_USER_DATA_PROCESS,
  payload: user,
});

export { getAdditionalUserDataRequest };
