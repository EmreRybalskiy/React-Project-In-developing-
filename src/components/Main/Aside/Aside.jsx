import React, { useState } from "react";

import { Input } from "../../Input/Input.jsx";

import "./aside.css";

export const Aside = () => {
  // const [state, setState] = useState(false);

  // const handleClick = () => {
  //   if (state) {
  //     setState(false);
  //   }
  //   setState(true);
  // };
  // console.log
  return (
    <aside className="aside">
      <h5 className="price">Price</h5>
      <span className="from">from</span>
      <Input type="text" class="sum prev" />
      <span className="to">to</span>
      <Input type="text" class="sum after" />
      <div className="item">
        <h5 className="field-name" className="sort">
          Sort
        </h5>
        <div className="vision-menu">
          <div className="arrow"></div>
        </div>
      </div>
      <ul className="sort-menu">
        <li>Price high to low</li>
        <li>Price low to high</li>
      </ul>
    </aside>
  );
};
