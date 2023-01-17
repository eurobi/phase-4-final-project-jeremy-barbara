import React, { useState } from "react"
import {useNavigate} from "react-router-dom"

function LoginForm({currentUser, setCurrentUser}){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const history = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(user => setCurrentUser(user))
        .then(history('/'))
    }

    return(
        <form onSubmit={handleSubmit} id='login-form' className="user-form">
                <label for='username-input'>Username: </label>
                    <input id='username-input' className="login-input" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}></input>
                <label for='password-input'>Password: </label>
                    <input id='password-input' className="login-input" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
                <input className="submit-button" type='submit'></input>
            </form>
    )
}

export default LoginForm