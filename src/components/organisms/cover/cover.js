import React from 'react';
import PropTypes from 'prop-types';
import { BREAKPOINTS } from '../../common/breakpoints';

export default function Cover({coverImage, alt = ''}) {
  console.log(coverImage);
  return (
    <picture>
      <source srcSet={`${coverImage.medium}`} media={`(max-width: ${BREAKPOINTS.medium}`}/>
      <img src={coverImage.original} alt={alt}/>
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
