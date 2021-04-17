import React from "react";

import { Aside } from "./Aside/Aside.jsx";
import { Content } from "./Content/Content.jsx";

import "./films.css";

export const Films = () => {
  return (
    <div className="films">
      <Aside />
      <Content />
    </div>
  );
};
