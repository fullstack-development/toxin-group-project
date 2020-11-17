import { SagaIterator } from 'redux-saga';
import { call, put, takeLeading } from 'redux-saga/effects';

import { Apartment } from 'services/api/entities/types';

import { Dependencies } from '../../../store.types';
import {
  GET_ROOM_DETAILS_PROCESS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAILED,
} from '../../constants';
import { GetRoomDetailsRequest } from '../../types';

function* getRoomDetails({ api }: Dependencies, { payload: id }: GetRoomDetailsRequest) {
  try {
    const roomDetails: Apartment = yield call(api.apartments.load, id);
    yield put({
      type: GET_ROOM_DETAILS_SUCCESS,
      payload: roomDetails,
    });
  } catch (err) {
    yield put({
      type: GET_ROOM_DETAILS_FAILED,
      payload: null,
    });
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeading(GET_ROOM_DETAILS_PROCESS, getRoomDetails, deps);
}

export { rootSaga };
