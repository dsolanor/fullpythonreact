import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Auth from "./Auth";

const authRedirect = currentUser => {
    if (!currentUser) {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect from="*" to="/login" />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Redirect from="*" to="/home" />
            </Switch>
        );
    }
};

const App = () => {
    return <Auth>{authRedirect}</Auth>;
};

export default App;
