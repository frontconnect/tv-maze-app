import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/title/';
import Cover from '../cover/cover';

import './card.css';

export default function Card({show}) {
  console.log('Card', show);
  return (
    <section>
      <header>
        <Title>{show.title}</Title>
      </header>
      <section className="card--details">
        <aside className="card--image">
          <Cover coverImage={show.coverImage} />
        </aside>
        <article className="card--description" dangerouslySetInnerHTML={{ __html: show.description}}/>
      </section>
    </section>
  );
}

Card.propTypes = {
  show: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverImage: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string,
    }),
  }),
};
