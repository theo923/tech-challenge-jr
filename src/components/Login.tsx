/* eslint-disable */
import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Iaccess } from "../interfaces/Iaccess";

const Login = (): JSX.Element => {
    const history = useHistory();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        name === "username"
            ? setUsername(value)
            : name === "password"
            ? setPassword(value)
            : null;
    };

    const handleRequest = async () => {
        const result: AxiosResponse<Iaccess> = await axios.post(
            "https://api.bybits.co.uk/auth/token",
            {
                username,
                password,
                type: "USER_PASSWORD_AUTH",
            },
            {
                headers: {
                    environment: "mock",
                    "Content-type": "application/json",
                },
            }
        );
        if (result?.data) {
            history.push({
                pathname: "/policy",
                state: result.data,
            });
        } else {
            setError("Invalid Username & Password");
        }
    };

    return (
        <div data-test="component-login">
            <h1 className="card-title">Sign In</h1>
            <div className="divider" />
            <div className="form-control">
                <label htmlFor="username" className="label">
                    <h2>User Name:</h2>
                </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="username"
                    className="input input-bordered"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(e)
                    }
                    value={username}
                />
                <label htmlFor="password" className="label">
                    <h2>Password:</h2>
                </label>
                <input
                    id="password"
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(e)
                    }
                    value={password}
                />
            </div>
            {error ? <h1 className="text-red-500">Error, please try again!</h1> : null}
            <div className="flex justify-end mt-4">
                <button
                    disabled={!Boolean(username && password)}
                    className="btn btn-primary"
                    onClick={handleRequest}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
