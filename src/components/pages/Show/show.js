import React, { useState, useEffect, useReducer, Fragment } from 'react';
import PropTypes from 'prop-types';
import showReducers from '../../../domains/show/show.reducers';
import episodeReducers from '../../../domains/episode/episode.reducers';
import ShowService from '../../../domains/show/show.service.js';
import EpisodeService from '../../../domains/episode/episode.service';
import { Show } from '../../../domains/show/show.model';
import { FETCH_SHOW_ERROR, FETCH_SHOW_REQUEST } from '../../../domains/show/show.constants';
import ErrorPage from '../Error';
import Card from '../../organisms/card/';
import { useDocumentTitle } from '../common/useDocumentTitle';
import Season from '../../organisms/season/season';
import {
  FETCH_EPISODES_ERROR,
  FETCH_SEASON_BY_EPISODE_REQUEST,
} from '../../../domains/episode/episode.constants';

function getShowId(match) {
  if (match && match.params && match.params.showId) {
    return match.params.showId;
  }
  return undefined;
}

function ShowPage(props) {
  const [setTitle] = useDocumentTitle('Show');
  const [showId, setShowId] = useState(getShowId(props.match));

  useEffect(() => {
    setShowId(getShowId(props.match));
  }, [props.match]);

  const [{show, showHttpError}, dispatchShow] = useReducer(showReducers, {show: new Show()});
  useEffect(() => {
    ShowService.getShow(showId)
      .subscribe(
        currentShow => {
          setTitle(currentShow.title);
          dispatchShow({
            type: FETCH_SHOW_REQUEST,
            show: currentShow,
            showHttpError: false,
          });
        },
        () => {
          dispatchShow({
            type: FETCH_SHOW_ERROR,
            showHttpError: true,
          });
        });
  }, [showId]);

  const [{seasonsByEpisodes, episodesHttpError}, dispatchEpisodes] = useReducer(episodeReducers, {seasonsByEpisodes: {}});
  useEffect(() => {
    EpisodeService.getSeasonsByEpisodes(showId)
      .subscribe(
        (currentSeasonsByEpisodes) => {
          dispatchEpisodes({
            type: FETCH_SEASON_BY_EPISODE_REQUEST,
            seasonsByEpisodes: currentSeasonsByEpisodes,
            episodesHttpError: false,
          });
        },
        () => {
          dispatchEpisodes({
            type: FETCH_EPISODES_ERROR,
            episodesHttpError: true,
          });
        });
  }, [showId]);

  if (showHttpError) {
    return (
      <ErrorPage/>
    );
  }

  return (
    <Fragment>
      <Card data-cy="show" id="card" item={show}/>
      {!episodesHttpError
        ? <Season seasonsByEpisodes={seasonsByEpisodes} />
        : ''}
    </Fragment>
  );
}

ShowPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      showId: PropTypes.number.isRequired,
    }),
  }),
};

export default ShowPage;
