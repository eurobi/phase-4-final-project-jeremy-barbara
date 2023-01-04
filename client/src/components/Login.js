import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Login({ currentUser, setCurrentUser }){

    const [loggingIn, setLoggingIn] = useState(true)

    return (
        <>
        <button onClick={() => setLoggingIn(true)} className="login-toggle">Login</button>
        <button onClick={() => setLoggingIn(false)} className="login-toggle">Signup</button>
        {loggingIn? <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <SignupForm currentUser={currentUser} setCurrentUser={setCurrentUser}  />}
        </>
    )
}

export default Login