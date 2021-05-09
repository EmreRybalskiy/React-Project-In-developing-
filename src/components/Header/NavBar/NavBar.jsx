import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="nav-link">
          <Link to="/catalog" className="link">
            Catalog
          </Link>
        </li>
      </ul>
    </div>
  );
};
