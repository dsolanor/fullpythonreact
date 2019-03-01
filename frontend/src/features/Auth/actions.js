import { apiRequest } from "../../services/api";
import { history } from "../../helpers/history";

export const LOGIN = "login";
export const LOGOUT = "logout";

export const login = data => async dispatch => {
    const response = await apiRequest({ path: "/login", method: "POST", data });
    dispatch({
        type: LOGIN,
        payload: {
            success: response && response.status === 200,
            data: response && response.data
        }
    });
    history.push("/");
};

export const logout = () => async dispatch => {
    const response = await apiRequest("/logout/access");
    dispatch({ type: LOGOUT, payload: response.data });
};
