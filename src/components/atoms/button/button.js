import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

export default function Button({onClick, className, children}) {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

