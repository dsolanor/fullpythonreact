import React, { useState } from "react";

import { useAuth } from "../../hooks/auth";

const Login = () => {
    const [values, setValues] = useState({ username: "", password: "" });
    const { signIn, getReq, logOut } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        signIn({ username: values.username, password: values.password });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    type="text"
                    value={values.username}
                    onChange={event => {
                        event.preventDefault();
                        setValues({ ...values, username: event.target.value });
                    }}
                />
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={event => {
                        event.preventDefault();
                        setValues({ ...values, password: event.target.value });
                    }}
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => getReq()}>Request</button>
            <button onClick={() => logOut()}>Logout</button>
        </div>
    );
};

export default Login;
