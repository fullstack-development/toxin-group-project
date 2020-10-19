import { PROCESS, SUCCESS, FAILED } from '../constants';
import { State, Actions } from '../types';

const initialState: State = {
  statusText: '',
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case PROCESS:
      return state;
    case SUCCESS:
      return {
        statusText: action.payload,
      };
    case FAILED:
      return {
        statusText: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
