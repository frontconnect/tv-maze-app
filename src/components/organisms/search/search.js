import React, { Fragment, useState } from 'react';
import SearchService from '../../../services/search/';

import './search.css';
import Button from '../../atoms/button/button';
import ErrorPage from '../../pages/Error';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const searchShow = () => {
    SearchService.singleSearchShow(searchTerm)
      .subscribe(show => {
        props.history.push(`/shows/${show.id}`);
      },
      () => {
        setError(false);
      });
  };

  const onClick = () => {
    searchShow();
  };

  const onKeyUp = (event) => {
    setSearchTerm(event.target.value);
    if (event.keyCode === 13) { // Enter is hit on keyboard
      searchShow();
    }
  };

  if (error) {
    return <ErrorPage/>;
  }

  return (
    <Fragment>
      <div className="search">
        <input placeholder="Search by name" type="text" onKeyUp={onKeyUp}/>
        <Button onClick={onClick}><img src="/img/search.svg" alt=""/></Button>
      </div>
    </Fragment>
  );
}

Search.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Search);
