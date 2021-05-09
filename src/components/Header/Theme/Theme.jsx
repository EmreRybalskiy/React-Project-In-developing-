import React, { useState } from "react";

import light from "../../../img/sun.png";
import dark from "../../../img/moon.png";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme.js";
import { GlobalStyles } from "../../global.js";

import "./theme.css";

export const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = ({ target }) => {
    if (target.name === "dark") {
      setTheme("dark");
    } else if (target.name === "light") {
      setTheme("light");
    }
  };

  return (
    <div className="theme">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <img
          src={light}
          alt="light"
          className="light"
          name="light"
          onClick={toggleTheme}
        />
        <img
          src={dark}
          alt="dark"
          className="dark"
          name="dark"
          onClick={toggleTheme}
        />
      </ThemeProvider>
    </div>
  );
};
