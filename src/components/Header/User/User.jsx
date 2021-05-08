import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import userProfileImage from "../../../../src/img/userProfileImage.png";
import shoppingCart from "../../../../src/img/shopping-cart.png";

import "./user.css";

export const User = () => {
  const [value, setValue] = useState(false);
  const token = localStorage.getItem("token");

  const checkValue = () => {
    if (token && token !== "null") {

      setValue(true);
    } else {

      setValue(false);
    }
  };

  useEffect(() => {
    checkValue();
  }, [value]);

  return (
    <div className="user">
      <img src={userProfileImage} alt="login" className="userProfileImage" />
      <Link to={value ? "/profile" : "/signup"} className="login-link">
        {value ? "Profile" : "Login"}
      </Link>
      <Link to="/basket" className="shoppingCart-link">
        <img src={shoppingCart} alt="shopping-cart" className="shoppingCart" />
      </Link>
    </div>
  );
};
