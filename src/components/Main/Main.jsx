import React from "react";
import { Route, Switch } from "react-router-dom";

import { Films } from "./Films/Films.jsx";
import { Favorites } from "./Favorites/Favorites.jsx";
import { Home } from "./Home/Home.jsx";

import "./main.css";

export const Main = () => {
  return (
    <div className="main">
      <Route>
        <Switch>
          <Home exact path="/" />
          <Films path="/films" />
          <Favorites path="/favorites" />
        </Switch>
      </Route>
    </div>
  );
};
