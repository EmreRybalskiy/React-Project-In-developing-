import React from "react";
import { Link } from "react-router-dom";

import userProfileImage from "../../../../src/img/userProfileImage.png";
import shoppingCart from "../../../../src/img/shopping-cart.png";

import "./authentication.css";

export const Authentication = () => {
  const token = localStorage.getItem("token");
  const checkToken = token && token !== "null";

  return (
    <div className="authentication">
      <img src={userProfileImage} alt="login" className="userProfileImage" />
      {checkToken ? (
        <Link to="/profile" className="login-link">
          Profile
        </Link>
      ) : (
        <Link to="/signup" className="login-link">
          Login
        </Link>
      )}
      <Link to="/cart" className="cart-link">
        <img src={shoppingCart} alt="shopping-cart" className="shoppingCart" />
      </Link>
    </div>
  );
};
