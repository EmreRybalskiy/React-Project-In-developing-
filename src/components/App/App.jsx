import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

import { Main } from "../Main/Main.jsx";
import { Favorites } from "../Favorites/Favorites.jsx";
import { Home } from "../Home/Home.jsx";
import { SignIn } from "../Forms/SignIn.jsx";
import { SignUp } from "../Forms/SignUp.jsx";
import { RecoveryPassword } from "../Recovery/Recovery.jsx";

import "./App.css";

export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Main} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/recovery" component={RecoveryPassword} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}
