import React, { useState, useEffect, useReducer, Fragment } from 'react';
import PropTypes from 'prop-types';
import reducers from '../../../domains/show/show.reducers';
import ShowService from '../../../domains/show/show.service.js';
import { Show } from '../../../domains/show/show.model';
import { FETCH_SHOW_ERROR, FETCH_SHOW_REQUEST } from '../../../domains/show/show.constants';
import NotFound from '../NotFound';
import Card from '../../organisms/card/';
import { useDocumentTitle } from '../common/useDocumentTitle';

function getShowId(match) {
  if (match && match.params && match.params.showId) {
    return match.params.showId;
  }
  return undefined;
}

function ShowPage(props) {
  const [title, setTitle] = useDocumentTitle(title);
  const [showId] = useState(getShowId(props.match));

  const [{show, serverSideError}, dispatch] = useReducer(reducers, {show: new Show()});
  useEffect(() => {
    ShowService.getShow(showId)
      .subscribe(
        currentShow => {
          setTitle(currentShow.title);
          dispatch({
            type: FETCH_SHOW_REQUEST,
            show: currentShow,
            serverSideError: false,
          });
        },
        () => {
          dispatch({
            type: FETCH_SHOW_ERROR,
            serverSideError: true,
          });
        });
  }, []);

  if (serverSideError) {
    return (
      <NotFound/>
    );
  }

  return (
    <Fragment>
      <Card id="card" show={show}/>
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

// <Menu links={[{link: '#card', text: 'Main'}, {link: '#episodes', text: 'Episodes'}]}/>
