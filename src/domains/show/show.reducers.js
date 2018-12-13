import { FETCH_SHOW_ERROR, FETCH_SHOW_REQUEST } from './show.constants';

function fetchShowRequest(state, action) {
  return {
    show: action.show,
    serverSideError: false,
  };
}

function fetchShowError(state, action) {
  return {
    ...state,
    serverSideError: action.serverSideError,
  };
}

const reducersMap = {
  [FETCH_SHOW_REQUEST]: fetchShowRequest,
  [FETCH_SHOW_ERROR]: fetchShowError,
};

export default function reducers(state, action) {
  return reducersMap[action.type](state, action);
}
