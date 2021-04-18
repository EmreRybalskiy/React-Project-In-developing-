import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Input/Input.jsx";
import { Button } from "../../Button/Button.jsx";

import "./forms.css";

export const SignIn = () => {
  return (
    <div className="signin">
      <form action="" className="form form-signin">
        <span className="name-field">{"Email"}</span>
        <Input type="email" class="input-form" />
        <span className="name-field password">
          {"Password"}
          <Link to="/recovery" className="recovery-link">
            {"Forgot password?"}
          </Link>
        </span>
        <Input type="password" class="input-form" />
        <Button type="button" text="Login" class="form-btn" />
      </form>
    </div>
  );
};
