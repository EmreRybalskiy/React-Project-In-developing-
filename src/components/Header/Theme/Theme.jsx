import React, { useState } from "react";

import light from "../../../img/sun.png";
import dark from "../../../img/moon.png";

import "./theme.css";

export const Theme = () => {
  const initialTheme = {
    theme: "light",
  };
  const [theme, setTheme] = useState(initialTheme);

  const handleClick = ({ target }) => {
    if (target.name === "dark") {
      setTheme((initialTheme.theme = "dark"));

    } else if (target.name === "light") {
      setTheme((initialTheme.theme = "light"));

    }
  };

  return (
    <div className="theme">
      <img
        src={light}
        alt="light"
        className="light"
        name="light"
        onClick={handleClick}
      />
      <img
        src={dark}
        alt="dark"
        className="dark"
        name="dark"
        onClick={handleClick}
      />
    </div>
  );
};
