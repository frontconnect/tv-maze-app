import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './seasonTable.css';

export default function SeasonTable({episodes}) {
  return (
    <Fragment>
      <table className="table">
        <thead className="table__header">
          <tr>
            <th className="header__number">Number</th>
            <th className="header__airdate">Date</th>
            <th className="header__title">Title</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {episodes.map((episode, i) => (
            <tr key={`e${i}`}>
              <td>{episode.number}</td>
              <td className="body__airdate">{episode.airDate}</td>
              <td>
                <Link to={episode.url}>{episode.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

SeasonTable.propTypes = {
  episodes: PropTypes.array,
};
