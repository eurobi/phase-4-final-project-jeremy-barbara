import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Login({ currentUser, setCurrentUser }){

    const [loggingIn, setLoggingIn] = useState(true)

    return (
        <>
            <button className={loggingIn? "selected" : null} onClick={() => setLoggingIn(true)}>Login</button>
            <button className={loggingIn? null : "selected"} onClick={() => setLoggingIn(false)}>Signup</button>
            {loggingIn? <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <SignupForm currentUser={currentUser} setCurrentUser={setCurrentUser}  />}
        </>
    )
}

export default Login