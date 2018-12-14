import React from 'react';
import PropTypes from 'prop-types';

export default function Title({children}) {
  // console.log('Title', text);
  return (
    <h1>{children}</h1>
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

