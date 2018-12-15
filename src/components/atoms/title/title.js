import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

export default function Title({children}) {
  return (
    <h1 className="title">{children}</h1>
  );
}

Title.propTypes = {
  children: PropTypes
    .oneOfType([
      PropTypes.element,
      PropTypes.string,
    ])
    .isRequired,
};

