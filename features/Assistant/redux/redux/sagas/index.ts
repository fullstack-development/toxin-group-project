import { SagaIterator } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { takeLatestAction } from 'redux/action.model';

import { SendMessage } from '../../model';
import { pushMessage } from '../actions';

function* sendMessage(_, data) {
  const { text } = data.payload;

  yield put(pushMessage(data.payload));

  switch (text) {
    case 'Закажи питсу':
      yield put(
        pushMessage({
          author: 'Евгений',
          text: 'Пока что я не умею заказывать питсу :c',
          type: 'to',
        }),
      );
      break;
    default:
      yield put(
        pushMessage({
          author: 'Евгений',
          text: 'Я не понимаю что вы от меня хотите :(',
          type: 'to',
        }),
      );
      break;
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatestAction<SendMessage['type']>('SEND_MESSAGE', sendMessage);
}

export { rootSaga };
