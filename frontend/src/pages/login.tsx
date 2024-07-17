import React from "react";
import { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const backend_url =  process.env.REACT_APP_BACKEND_URL;
    
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
        <form
        onSubmit={async (e) => {
            e.preventDefault();
            await onLogin({ email, password });
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
    );
    }

export default Login;