import React from "react";

import sun from "../../../img/sun.png";
import moon from "../../../img/moon.png";

import "./theme.css";

export const Theme = () => {
  return (
    <div className="theme">
      <img src={sun} alt="sun" className="sun" />

      <img src={moon} alt="moon" className="moon" />
    </div>
  );
};
