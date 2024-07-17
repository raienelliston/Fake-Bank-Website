import React from "react";
import { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const backend_url =  process.env.REACT_APP_BACKEND_URL as string;
    
    const onLogin = async ( email: string, password: string ) => {
        const response = await fetch(backend_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <LoginContainer>
            <h1>Login</h1>
            <form
            onSubmit={async (e) => {
                e.preventDefault();
                await onLogin( email, password );
            }}
            >
            <input
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">login</button>
            </form>
        </LoginContainer>
    );
    }

export default Login;