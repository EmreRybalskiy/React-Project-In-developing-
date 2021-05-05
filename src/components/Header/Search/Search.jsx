import React from "react";

import { Input } from "../../Input/Input.jsx";

import "./search.css";

export const Search = () => {
  return (
    <div className="search">
      <Input class="header-search search" place="Search products..." />
      <Input type="button" value="Search" class="header-btn btn" />
    </div>
  );
};
