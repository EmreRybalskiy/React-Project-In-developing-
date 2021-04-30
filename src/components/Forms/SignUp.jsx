import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";

import "./forms.css";

export const SignUp = () => {
  const reg = gql`
    mutation reg($login: String!, $pass: String!, $nick: String!) {
      UserUpsert(user: { login: $login, password: $pass, nick: $nick }) {
        _id
        login
        password
        nick
      }
    }
  `;

  const [addTodo, { data }] = useMutation(reg);

  // const { data, refetch } = useQuery(reg, {
  //   variables: { login: "emre97", password: "228", nick : "emr10ka" },
  // });

  const click = () => {
    addTodo({ variables: { login: "Emr", pass: "Emr", nick: "Emr" } });
  };
  // console.log(data);
  console.log(data);
  return (
    <div className="signup">
      <form action="" className="form ">
        <button onClick={click}>MUTATION</button>
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
