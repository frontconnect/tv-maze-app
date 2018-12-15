import React from 'react';
import Logo from '../../molecules/logo/';

import './header.css';
import Search from '../search/';

export default function Header() {
  return (
    <header className="header">
      <Logo/>
      <Search/>
    </header>
  );
}
