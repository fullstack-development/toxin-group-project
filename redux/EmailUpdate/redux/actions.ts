import { DispatchEvent } from 'react-redux';

import { store } from 'redux/store';

import { EMAIL_UPDATE_PROCESS, EMAIL_UPDATE_COMPLETED } from '../constants';
import { SentData, EmailUpdateRequest } from '../types';

const emailUpdateRequest = (data: SentData): EmailUpdateRequest => ({
  type: EMAIL_UPDATE_PROCESS,
  payload: data,
});

const emailUpdateCompleted = (): DispatchEvent => store.dispatch({ type: EMAIL_UPDATE_COMPLETED });

export { emailUpdateRequest, emailUpdateCompleted };
