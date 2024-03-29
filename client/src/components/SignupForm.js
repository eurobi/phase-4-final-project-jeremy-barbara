import React, { useState } from "react"
import {useNavigate} from "react-router-dom"


function SignupForm({currentUser, setCurrentUser}){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        pofile_img_url: ""
    })

    const history = useNavigate()

    const [errors, setErrors] = useState()


    function handleSubmit(e){
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if(response.ok){
                response.json()
                .then(user => setCurrentUser(user))
                .then(history('/'))
            }
            else{
                response.json().then(e => setErrors(Object.entries(e.errors).flat()))
            }
        })
    }

    return(
        <form onSubmit={handleSubmit} id='signup-form' className="user-form">
                <label for='username-input'>Username: </label>
                    <input id='username-input' className="login-input" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}></input>
                <label for='password-input'>Password: </label>
                    <input id='password-input' className="login-input" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
                <label for='password-confirmation-input'>Confirm Password: </label>
                    <input id='password-confirmation-input' className="login-input" value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}></input>
                <label for='profile-image-input'>Profile Image URL: </label>
                    <input id='profile-image-input' className="login-input" value={formData.pofile_img_url} onChange={(e) => setFormData({...formData, pofile_img_url: e.target.value})}></input>
                <input className="submit-button" type='submit'></input>
                <h4>{errors}</h4>
            </form>
    )
}

export default SignupForm