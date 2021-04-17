import React from "react";
import { Link } from "react-router-dom";

import { SignIn } from "./SignIn/SignIn.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";

import "./authentication.css";

export const Authentication = () => {
  return (
    <form className="authentication">
      <Link to="/signin" className="nav-link authBtn">
        <SignIn />
      </Link>
      <Link to="/signup" className="nav-link authBtn">
        <SignUp />
      </Link>
    </form>
  );
};
