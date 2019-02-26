import React from "react";
import { useAuth } from "../../hooks/auth";

const Home = () => {
    const { logOut } = useAuth();
    return (
        <div>
            {" "}
            <button onClick={() => logOut()}>Logout</button>
        </div>
    );
};

export default Home;
