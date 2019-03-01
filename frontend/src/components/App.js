import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

import { Router } from "react-router-dom";
import { history } from "../helpers/history";

import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.success ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute
                        exact
                        auth={this.props.auth}
                        path="/"
                        component={Home}
                    />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(
    mapStateToProps,
    null
)(App);
