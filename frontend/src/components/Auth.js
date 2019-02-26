import React, { useState, setState, useEffect } from "react";
import { LOCAL_STORAGE_KEY, apiRequest } from "../services/api.js";
import axios from "axios";

export const AuthContext = React.createContext();

const Auth = ({ children }) => {
    const [initialLoading, setInitialLoading] = useState(true);
    const [user, setUser] = useState(null);

    const setCurrentUser = newUser => {
        setUser(newUser);

        if (!newUser) {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        }
    };

    const authenticate = async () => {
        if (!user) {
            const user = await apiRequest({
                path: "/user",
                method: "GET"
            });

            const userResponse =
                user && user.response && user.response.status !== 200
                    ? null
                    : user;

            setCurrentUser(userResponse);
        }
    };

    useEffect(() => {
        authenticate();
    }, []);

    const context = { user, setCurrentUser };

    return (
        <AuthContext.Provider value={context}>
            {children(context.user)}
        </AuthContext.Provider>
    );
};
export default Auth;
