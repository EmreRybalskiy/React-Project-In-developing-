import React, { useState } from "react";

import { Input } from "../../Input/Input.jsx";

import "./aside.css";

export const Aside = () => {
  const [state, setState] = useState("arrow");

  const dropMenu = ({ target }) => {
    if (state == "arrow") {
      setState("arrow arrow-bottom");
    } else if (state == "arrow arrow-bottom") {
      setState("arrow");
    }
  };
  return (
    <aside className="aside">
      <h5 className="price">Price</h5>
      <span className="from">from</span>
      <Input type="text" class="sum prev" />
      <span className="to">to</span>
      <Input type="text" class="sum after" />
      <div className="item" onClick={dropMenu}>
        <h5 className="field-name" className="category">
          Category
        </h5>
        <div className="vision-menu">
          <div className={state}></div>
        </div>
      </div>
      {state == "arrow arrow-bottom" && (
        <ul className="category-menu">
          <li>
            <Input type="checkbox" />
            Food
          </li>
          <li>
            <Input type="checkbox" />
            Phone
          </li>
          <li>
            <Input type="checkbox" />
            Car
          </li>
          <li>
            <Input type="checkbox" />
            Materials
          </li>
        </ul>
      )}
    </aside>
  );
};
