import React from "react";

import { Input } from "../../Input/Input.jsx";
import { Button } from "../../Button/Button.jsx";

import "./forms.css";

export const SignUp = () => {
  return (
    <div className="signup">
      <form action="" className="form">
        <span className="name-field">Name</span>
        <Input type="text" class="input-form" />
        <span className="name-field">Last Name</span>
        <Input type="text" class="input-form" />
        <span className="name-field">Email</span>
        <Input type="email" class="input-form" />
        <span className="name-field password">{"Password "}</span>
        <span className="recovery-field"></span>
        <Input type="password" class="input-form" />
        <span className="name-field">Confirm Password</span>
        <Input type="password" class="input-form" />
        <Button type="button" text="Create Accout" class="form-btn" />
      </form>
    </div>
  );
};
