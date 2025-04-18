import React from "react";
import { useState } from "react";
import userContext from "../context/UserContext";
import { useContext } from "react";

function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const { setuser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setuser({ username, password });
    };

    return (
        <>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {
                    setusername(e.target.value);
                }}
            />{" "}
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
            />{" "}
            <button onClick={handleSubmit}>submit</button>
        </>
    );
}

export default Login;
