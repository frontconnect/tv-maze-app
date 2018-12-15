import {
  FETCH_EPISODE_ERROR,
  FETCH_EPISODE_REQUEST,
  FETCH_EPISODES_ERROR,
  FETCH_EPISODES_REQUEST,
  FETCH_SEASON_BY_EPISODE_REQUEST,
} from './episode.constants';

function fetchEpisodeRequest(state, action) {
  return {
    episode: action.episode,
    episodeHttpError: false,
  };
}

function fetchEpisodeError(state, action) {
  return {
    ...state,
    episodeHttpError: action.episodeHttpError,
  };
}

function fetchEpisodesRequest(state, action) {
  return {
    episodes: action.episodes,
    episodesHttpError: false,
  };
}

function fetchEpisodesError(state, action) {
  return {
    ...state,
    episodesHttpError: action.episodesHttpError,
  };
}

function fetchSeasonByEpisodesRequest(state, action) {
  return {
    ...state,
    seasonsByEpisodes: action.seasonsByEpisodes,
    episodesHttpError: false,
  };
}

const reducersMap = {
  [FETCH_EPISODES_REQUEST]: fetchEpisodesRequest,
  [FETCH_EPISODES_ERROR]: fetchEpisodesError,
  [FETCH_SEASON_BY_EPISODE_REQUEST]: fetchSeasonByEpisodesRequest,
  [FETCH_EPISODE_REQUEST]: fetchEpisodeRequest,
  [FETCH_EPISODE_ERROR]: fetchEpisodeError,
};

export default function reducers(state, action) {
  return reducersMap[action.type](state, action);
}
