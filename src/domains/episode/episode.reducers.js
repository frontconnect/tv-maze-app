import { FETCH_EPISODES_ERROR, FETCH_EPISODES_REQUEST } from './episode.constants';

function fetchEpisodesRequest(state, action) {
  return {
    seasons: action.seasons,
    serverSideError: false,
  };
}

function fetchEpisodesError(state, action) {
  return {
    ...state,
    serverSideError: action.serverSideError,
  };
}

const reducersMap = {
  [FETCH_EPISODES_REQUEST]: fetchEpisodesRequest,
  [FETCH_EPISODES_ERROR]: fetchEpisodesError,
};

export default function reducers(state, action) {
  return reducersMap[action.type](state, action);
}
