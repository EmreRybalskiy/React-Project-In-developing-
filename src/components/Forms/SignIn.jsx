import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

import { SIGN_IN_QUERY } from "./queries";

import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";

import "./forms.css";

export const SignIn = (props) => {
  const [userData, setUserData] = useState({
    login: "",
    password: "",
  });

  const [Login, { called, loading, data }] = useLazyQuery(SIGN_IN_QUERY, {
    variables: {
      login: userData.login,
      password: userData.password,
    },
  });

  const changeData = ({ target }) => {
    setUserData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.login);
    }
  }, [data]);

  useEffect(() => {
    if (called && !loading) {
      props.history.push("/");
    }
  }, [called, loading]);

  if (called && loading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="signin">
      <div className="form form-signin">
        <span className="name-field">{"Email"}</span>
        <Input
          type="text"
          class="input-form"
          value={userData.login}
          onChange={changeData}
          name="login"
        />
        <span className="name-field password">
          {"Password"}
          <Link to="/recovery" className="recovery-link">
            {"Forgot password?"}
          </Link>
        </span>
        <Input
          type="password"
          class="input-form"
          value={userData.password}
          onChange={changeData}
          name="password"
        />
        <Button
          type="button"
          text="Login"
          class="form-btn"
          onClick={() => {
            console.log(userData);
            Login();
          }}
        />
      </div>
    </div>
  );
};
