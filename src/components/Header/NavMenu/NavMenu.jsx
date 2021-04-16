import React from "react";
import { Link } from 'react-router-dom'
import { NavItem } from "./NavItem/NavItem.jsx";

import "./navmenu.css";
export function NavMenu() {
    return (
        <div>
            <ul className="nav-list">
                <Link to='/films'><NavItem text="Films" /></Link>
                <Link to='/favorite'><NavItem text="Favorite" /></Link>
                <Link to='/about'><NavItem text="About" /></Link>
            </ul>
        </div>
    );
}
