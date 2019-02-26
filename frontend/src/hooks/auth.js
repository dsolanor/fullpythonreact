import { useState, useContext } from "react";
import { apiRequest } from "../services/api";
import { AuthContext } from "../components/Auth";

export function useAuth() {
    const [errors, setErrors] = useState(null);
    const { setCurrentUser } = useContext(AuthContext);

    const logOut = async () => {
        await apiRequest({
            path: "/logout/access",
            method: "POST"
        });

        // setCurrentUser(null);
    };

    const register = async ({ name, username, password }) => {
        const response = await apiRequest({
            path: "/auth",
            method: "POST",
            data: { name, username, password }
        });

        // setCurrentUser(response.data);
    };

    const signIn = async ({ username, password }) => {
        const response = await apiRequest({
            path: "/login",
            method: "POST",
            data: { username, password }
        });

        if (response.status && response.status !== 200) {
            return setErrors(response.data.errors);
        }

        // return setCurrentUser(response.data);
    };

    const getReq = async () => {
        const response = await apiRequest({
            path: "/secret",
            method: "GET"
        });

        if (response.status && response.status !== 200) {
            return setErrors(response.data.errors);
        }

        // return setCurrentUser(response.data);
    };

    return { register, signIn, logOut, errors, getReq };
}
