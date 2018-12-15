import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/title/';
import Cover from '../cover/cover';

import './card.css';

export default function Card({item, ...rest}) {
  return (
    <section className="card" {...rest}>
      <header data-cy="card-title" className="card__title">
        <Title >{item.title}</Title>
      </header>
      <section className="card__details">
        <aside className="card__image">
          <Cover coverImage={item.coverImage} />
        </aside>
        {Boolean(item.description)
          ? <article data-cy="card-description" className="card__description" dangerouslySetInnerHTML={{ __html: item.description}}/>
          : ''
        }
      </section>
    </section>
  );
}

Card.propTypes = {
  rest: PropTypes.object,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    coverImage: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string,
    }),
  }),
};
