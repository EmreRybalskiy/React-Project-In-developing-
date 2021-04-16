import React from "react";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from "../Main/Main.jsx";
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

import "./App.css";

export function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </div>
    );
}
