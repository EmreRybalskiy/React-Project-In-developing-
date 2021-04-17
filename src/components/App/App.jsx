import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "../Header/Header.jsx";
import { Main } from "../Main/Main.jsx";
import { Footer } from "../Footer/Footer.jsx";

import "./App.css";

export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route path="/" component={Main} />
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}
