import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Menu({links}) {
  const menuLinks = links.map(({link, text}, index) => (
    <li key={index.toString()}>
      <Link to={link}>{text}</Link>
    </li>
  ));
  return (
    <nav>
      <ul>
        {menuLinks}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  links: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
