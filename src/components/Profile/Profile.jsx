import React from "react";
import { Link } from "react-router-dom";

import "./profile.css";

export const Profile = () => {
  const logOut = () => {
    const token = localStorage.removeItem("token");
  };
  return (
    <div className="profile">
      Profile
      <Link to="/" onClick={logOut}>
        Logout
      </Link>
    </div>
  );
};
