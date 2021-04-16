import React from "react";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import { NavMenu } from './NavMenu/NavMenu.jsx'
import { Authentication } from './Authentication/Authentication.jsx'

import "./header.css";

export function Header() {
    return (
        <div className="header">

            <BrowserRouter><NavMenu /></BrowserRouter>
            <Authentication />
        </div>
    );
}
