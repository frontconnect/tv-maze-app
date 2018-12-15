import React from 'react';
import PropTypes from 'prop-types';
import { BREAKPOINTS } from '../../common/breakpoints';

import './cover.css';

export default function Cover({coverImage, alt = ''}) {
  return (
    <picture>
      <source srcSet={`${coverImage.original}`} media={`(min-width: ${BREAKPOINTS.small})`}/>
      <img className="cover__image" src={coverImage.medium} alt={alt}/>
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
