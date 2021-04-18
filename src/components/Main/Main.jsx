import React from "react";
import { Route, Switch } from "react-router-dom";

import { Films } from "./Films/Films.jsx";
import { Favorites } from "./Favorites/Favorites.jsx";
import { Home } from "./Home/Home.jsx";
import { SignIn } from "./Forms/SignIn.jsx";
import { SignUp } from "./Forms/SignUp.jsx";
import { RecoveryPassword } from "./Recovery/Recovery.jsx";

import "./main.css";

export const Main = () => {
  return (
    <div className="main">
      <Route>
        <Switch>
          <Home exact path="/" />
          <Films path="/films" />
          <Favorites path="/favorites" />
          <SignIn path="/signin" />
          <SignUp path="/signup" />
          <RecoveryPassword path="/recovery" />
        </Switch>
      </Route>
    </div>
  );
};
