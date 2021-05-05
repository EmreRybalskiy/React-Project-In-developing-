import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/catalog" className="nav-link">
          Catalog
        </Link>
      </ul>
    </div>
  );
};
