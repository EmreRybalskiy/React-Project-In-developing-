import React from "react";
import { Link } from "react-router-dom";

import "./authentication.css";
import userProfileImage from "../../../../src/img/userProfileImage.png";
import shoppingCart from "../../../../src/img/shopping-cart.png";

export const Authentication = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="authentication">
      <Link to="/signup">
        <img src={userProfileImage} alt="user" className="userProfileImage" />
      </Link>
      <Link to="/cart">
        <img src={shoppingCart} alt="cart" className="shoppingCart" />
      </Link>
    </div>
  );
};
