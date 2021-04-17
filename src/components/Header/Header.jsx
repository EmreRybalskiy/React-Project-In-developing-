import React from "react";

import { NavBar } from "./NavBar/NavBar.jsx";
import { Authentication } from "./Authentication/Authentication.jsx";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <Authentication />
    </div>
  );
};
