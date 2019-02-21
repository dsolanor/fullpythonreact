import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default App;
