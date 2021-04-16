import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

import { Films } from "./Films/Films.jsx";
import { Favorite } from "./Favorite/Favorite.jsx";
import { About } from "./About/About.jsx";
import { Greeting } from "./Greeting/Greeting.jsx";

import './main.css'

const Main = () => {
    return (
        <div className="main">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Greeting} />
                    <Route path="/films" component={Films} />
                    <Route path="/favorite" component={Favorite} />
                    <Route path="/about" component={About} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default withRouter(Main)