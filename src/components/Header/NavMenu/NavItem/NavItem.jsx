import React from "react";

import "./navitem.css";

export function NavItem(props) {
    return (
        <div className="nav-item">
            <li>{props.text}</li>
        </div>
    );
}
