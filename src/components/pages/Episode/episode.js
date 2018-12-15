import React, { Fragment, useEffect, useReducer, useState } from 'react';
import { useDocumentTitle } from '../common/useDocumentTitle';
import Card from '../../organisms/card/card';
import PropTypes from 'prop-types';
import reducers from '../../../domains/episode/episode.reducers';
import EpisodeService from '../../../domains/episode/episode.service';
import { FETCH_EPISODE_ERROR, FETCH_EPISODE_REQUEST } from '../../../domains/episode/episode.constants';
import ErrorPage from '../Error';
import { Episode } from '../../../domains/episode/episode.model';
import showReducers from '../../../domains/show/show.reducers';
import { Show } from '../../../domains/show/show.model';
import ShowService from '../../../domains/show/show.service';
import { FETCH_SHOW_ERROR, FETCH_SHOW_REQUEST } from '../../../domains/show/show.constants';
import { Link } from 'react-router-dom';
import './breadcrumbs.css';

function getRouteParams(match) {
  if (match && match.params && match.params.showId && match.params.season && match.params.number) {
    return {
      showId: match.params.showId,
      season: match.params.season,
      number: match.params.number,
    };
  }
  return undefined;
}

function EpisodePage(props) {
  const [setTitle] = useDocumentTitle('Episodes');
  const [episodeRouteParams] = useState(getRouteParams(props.match));

  const [{episode, episodeHttpError}, dispatch] = useReducer(reducers, {episode: new Episode()});
  useEffect(() => {
    EpisodeService.getEpisode({...episodeRouteParams})
      .subscribe(
        currentEpisode => {
          setTitle(currentEpisode.title);
          dispatch({
            type: FETCH_EPISODE_REQUEST,
            episode: currentEpisode,
            episodeHttpError: false,
          });
        },
        () => {
          dispatch({
            type: FETCH_EPISODE_ERROR,
            episodeHttpError: true,
          });
        });
  }, [props.match]);

  const [{show, showHttpError}, dispatchShow] = useReducer(showReducers, {show: new Show()});
  useEffect(() => {
    ShowService.getShow(episodeRouteParams.showId)
      .subscribe(
        currentShow => {
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
  }, []);

  if (episodeHttpError) {
    return <ErrorPage/>;
  }

  return (
    <Fragment>
      {!showHttpError
        ? <ul className="bread-crumbs">
          <li className="bread-crumb-item">
            <Link to={`/shows/${episodeRouteParams.showId}`}>
              {show.title}
            </Link>
          </li>
          <li className="bread-crumb-item">{episode.title}</li>
        </ul>
        : ''
      }
      <Card data-cy="episode" id="episode-card" item={episode}/>
    </Fragment>
  );
}

export default EpisodePage;

EpisodePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      showId: PropTypes.number.isRequired,
      season: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    }),
  }),
};
