import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img src="//static.tvmaze.com/images/tvm-header-logo.png" alt=""/>
    </Link>
  );
}

export default Logo;
