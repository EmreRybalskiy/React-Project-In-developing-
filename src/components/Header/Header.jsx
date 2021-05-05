import React from "react";

import { Logo } from "./Logo/Logo.jsx";
import { NavBar } from "./NavBar/NavBar.jsx";
import { Search } from "./Search/Search.jsx";
import { Theme } from "./Theme/Theme.jsx";
import { User } from "./User/User.jsx";

import "./header.css";

export const Header = () => {
  return (
    <div className="header-holder">
      <div className="header">
        <Logo />
        <NavBar />
        <Search />
        <Theme />
        <User />
      </div>
    </div>
  );
};
