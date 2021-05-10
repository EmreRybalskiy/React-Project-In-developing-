import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import userProfileImage from "../../../../src/img/userProfileImage.png";
import shoppingCart from "../../../../src/img/shopping-cart.png";

import "./user.css";

export const User = ({ isLoggetIn }) => {
  const [isCorrectToken, setIsCorrectToken] = useState(isLoggetIn);

  const checkValue = () => {
    if (isLoggetIn && isLoggetIn !== "null") {
      setIsCorrectToken(true);
    } else {
      setIsCorrectToken(false);
    }
  };

  useEffect(() => {
    checkValue();
  }, [isLoggetIn]);

  return (
    <div className="user">
      <img src={userProfileImage} alt="login" className="userProfileImage" />
      <Link to={isCorrectToken ? "/profile" : "/signup"} className="login-link">
        {isCorrectToken ? "Profile" : "Login"}
      </Link>
      <Link to="/basket" className="shoppingCart-link">
        <img src={shoppingCart} alt="shopping-cart" className="shoppingCart" />
      </Link>
    </div>
  );
};
