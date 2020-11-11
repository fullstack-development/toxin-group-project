import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import api from 'services/api/api';
import { Apartment } from 'services/api/entities/types';

import { GetRoomDetailsRequest } from '../../model';

function* getRoomDetails({ payload: id }: GetRoomDetailsRequest) {
  try {
    const roomDetails: Apartment = yield call(api.apartments.load, id);
    yield put({
      type: 'GET_ROOM_DETAILS_SUCCESS',
      payload: roomDetails,
    });
  } catch (err) {
    yield put({
      type: 'GET_ROOM_DETAILS_FAILED',
      payload: null,
    });
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLeadingAction<GetRoomDetailsRequest['type']>(
    'GET_ROOM_DETAILS_PROCESS',
    getRoomDetails,
  );
}
