import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import api from 'services/api/api';
import { Apartment } from 'services/api/entities/types';

import { GetRoomDetailsRequest } from '../../model';
import { getRoomDetailsFailed, getRoomDetailsSuccess } from '../actions';

function* getRoomDetails({ payload: id }: GetRoomDetailsRequest) {
  try {
    const roomDetails: Apartment = yield call(api.apartments.load, id);
    yield put(getRoomDetailsSuccess(roomDetails));
  } catch (err) {
    yield put(getRoomDetailsFailed());
  }
}

function* rootSaga(): SagaIterator {
  yield takeLeadingAction<GetRoomDetailsRequest['type']>(
    'GET_ROOM_DETAILS_PROCESS',
    getRoomDetails,
  );
}

export { rootSaga };
