import React from "react";

import { Logo } from "./Logo/Logo.jsx";
import { NavBar } from "./NavBar/NavBar.jsx";
import { Authentication } from "./Authentication/Authentication.jsx";
import { Search } from "./Search/Search.jsx";

import "./header.css";

export const Header = () => {
  return (
    <div className="header-holder">
      <div className="header">
        <Logo />
        <NavBar />
        <Search />
        <Authentication />
      </div>
    </div>
  );
};
