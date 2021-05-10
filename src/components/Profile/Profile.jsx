import React from "react";
import { Link } from "react-router-dom";

import "./profile.css";

export const Profile = ({ setIsLoggetIn }) => {
  const logOut = () => {
    localStorage.removeItem("token");
    setIsLoggetIn(false);
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
