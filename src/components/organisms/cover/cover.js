import React from 'react';
import PropTypes from 'prop-types';
import { BREAKPOINTS } from '../../common/breakpoints';

import './cover.css';

export default function Cover({coverImage, alt = ''}) {
  return (
    <picture>
      <source srcSet={`${coverImage.medium}`} media={`(max-width: ${BREAKPOINTS.medium}`}/>
      <img className="cover--image" src={coverImage.original} alt={alt}/>
    </picture>
  );
}

Cover.propTypes = {
  coverImage: PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
  }),
  alt: PropTypes.string,
};
