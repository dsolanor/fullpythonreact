import React, { useState, setState } from "react";
import { LOCAL_STORAGE_KEY, apiRequest } from "../services/api.js";

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
        const req = await apiRequest({ path: "login" });
    };

    const context = { user, setCurrentUser };

    return (
        <AuthContext.Provider value={context}>
            {children(context.user)}
        </AuthContext.Provider>
    );
};
export default Auth;
