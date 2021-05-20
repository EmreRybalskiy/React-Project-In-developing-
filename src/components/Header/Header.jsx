import React from 'react';

import { Logo } from './Logo/Logo.jsx';
import { NavBar } from './NavBar/NavBar.jsx';
import { Search } from './Search/Search.jsx';
import { Contact } from './Contact/Contact.jsx';
import { Theme } from './Theme/Theme.jsx';
import { Authentication } from './Authentication/Authentication.jsx';

import './header.css';

export const Header = ({ isLoggetIn, handleSearchClick }) => {
  return (
    <header className="header-holder">
      <div className="header">
        <Logo />
        <NavBar />
        <Search handleSearchClick={handleSearchClick} />
        <Contact />
        <Theme />
        <Authentication isLoggetIn={isLoggetIn} />
      </div>
    </header>
  );
};
