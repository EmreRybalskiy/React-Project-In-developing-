import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";

import { SIGN_UP_MUTATION } from "./mutations.js";

import "./forms.css";

export const SignUp = () => {
  const [SignUp, { error }] = useMutation(SIGN_UP_MUTATION);

  const onSignUp = async () => {
    const userData = await SignUp({
      variables: { login: "Emre3", nick: "Emre3", password: "228" },
    });
    console.log("данные юзера после регистрации - ", userData);
  };

  return (
    <div className="signup">
      <div action="" className="form ">
        <button onClick={onSignUp}>MUTATION</button>
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
      </div>
    </div>
  );
};
