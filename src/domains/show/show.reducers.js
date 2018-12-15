import { FETCH_SHOW_ERROR, FETCH_SHOW_REQUEST } from './show.constants';

function fetchShowRequest(state, action) {
  return {
    show: action.show,
    showHttpError: false,
  };
}

function fetchShowError(state, action) {
  return {
    ...state,
    showHttpError: action.showHttpError,
  };
}

const reducersMap = {
  [FETCH_SHOW_REQUEST]: fetchShowRequest,
  [FETCH_SHOW_ERROR]: fetchShowError,
};

export default function reducers(state, action) {
  return reducersMap[action.type](state, action);
}
