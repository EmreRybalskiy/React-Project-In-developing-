import React, { useState } from "react";

import { Input } from "../../Input/Input.jsx";

import "./aside.css";

export const Aside = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    if (state) {
      setState(false);
    }
    setState(true);
  };
  console.log(state);
  return (
    <aside className="aside">
      <h5 className="price">Price</h5>
      <span className="from">from</span>
      <Input type="text" class="sum prev" />
      <span className="to">to</span>
      <Input type="text" class="sum after" />
      <h5
        className="sort"
        onClick={() => {
          handleClick();
        }}
      >
        Sort
      </h5>
      <ul className="sort-menu price">
        <li>Price high to low</li>
        <li>Price low to high</li>
      </ul>
      <h5 className="category">Category</h5>
      <ul className="sort-menu">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </aside>
  );
};
