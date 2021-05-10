import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";

import { SIGN_UP_MUTATION } from "./mutations.js";

import "./forms.css";

export const SignUp = () => {
  const [SignUp] = useMutation(SIGN_UP_MUTATION);
  const [signUpData, setSignUpData] = useState({
    login: "",
    nick: "",
    password: "",
  });

  const changeData = ({ target }) => {
    setSignUpData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSignUp = async () => {
    const userData = await SignUp({
      variables: {
        login: signUpData.login,
        nick: signUpData.nick,
        password: signUpData.password,
      },
    });
    console.log("данные юзера после регистрации - ", userData);
  };

  return (
    <div className="signup">
      <div action="" className="form ">
        <span className="name-field">Email</span>
        <Input
          type="email"
          class="input-form"
          name="login"
          value={signUpData.login}
          onChange={changeData}
        />
        <span className="name-field">Name</span>
        <Input
          type="text"
          class="input-form"
          name="nick"
          value={signUpData.nick}
          onChange={changeData}
        />
        <span className="name-field password">{"Password "}</span>
        <span className="recovery-field"></span>
        <Input
          type="password"
          class="input-form"
          name="password"
          value={signUpData.password}
          onChange={changeData}
        />
        <span className="name-field">Confirm Password</span>
        <Input type="password" class="input-form" />
        <Button
          type="button"
          text="Create Accout"
          class="form-btn"
          onClick={onSignUp}
        />
        <Link to="/signin" className="create-btn">
          Have account?
        </Link>
      </div>
    </div>
  );
};
