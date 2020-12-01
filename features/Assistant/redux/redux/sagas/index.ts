import { SagaIterator } from 'redux-saga';
import { put, select, call } from 'redux-saga/effects';

import { defaultFilters } from 'features/Rooms/SearchRoomForm/SearchRoomForm.fixture';
import { takeLatestAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';

import { SendMessage, AssistantState } from '../../model';
import { pushMessage, changeDialogState, setFindingRoomFilter } from '../actions';

function* sendMessage({ api }: Dependencies, data) {
  yield put(pushMessage(data.payload));

  const { text } = data.payload;
  const currentState: AssistantState = yield select((state) => state.assistant);

  const answers = {
    findRoom: /(най(=?ти|ди)|под(=?б[еи]ри|обрать))\s?(мне)?\s(номер|комнату)/i,
    roomCost: /\d{1,}/,
  };

  if (currentState.dialogState === null) {
    switch (true) {
      case answers.findRoom.test(text):
        yield put(
          pushMessage({
            author: 'Евгений',
            text:
              'Хорошо, давайте попробуем подобрать вам номер. На какую сумму вы рассчитываете ?',
            type: 'to',
          }),
        );
        yield put(changeDialogState('FINDING_ROOM_AWAIT_COST'));
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
  } else {
    switch (currentState.dialogState) {
      case 'FINDING_ROOM_AWAIT_COST':
        yield put(
          setFindingRoomFilter({
            ...defaultFilters,
            price: { from: 0, to: Number(text.match(answers.roomCost)[0]) },
          }),
        );

        yield put(
          pushMessage({
            author: 'Евгений',
            text: `Вот какие варианты я нашёл с ценой до ${text.match(answers.roomCost)[0]} руб.:`,
            type: 'to',
            data: {
              type: 'rooms',
              payload: yield call(api.booking.filterRooms, {
                ...defaultFilters,
                price: { from: 0, to: Number(text.match(answers.roomCost)[0]) },
              }),
            },
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
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLatestAction<SendMessage['type']>('SEND_MESSAGE', sendMessage, deps);
}

export { rootSaga };
