import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../img/logo.jpg";

import "./logo.css";

export const Logo = () => {
  return <Link to="/">{<img src={logo} alt="logo" className="logo" />}</Link>;
};
