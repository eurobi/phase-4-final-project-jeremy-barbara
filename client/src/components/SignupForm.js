import React, { useState } from "react"

function SignupForm({currentUser, setCurrentUser}){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        pofile_img_url: ""
    })

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
                response.json().then(user => setCurrentUser(user))
            }
            else{
                response.json().then(e => console.log(e.errors))
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
                <label for='profile-image-input'>Profile Image: </label>
                    <input id='profile-image-input' className="login-input" value={formData.pofile_img_url} onChange={(e) => setFormData({...formData, pofile_img_url: e.target.value})}></input>
                <input type='submit'></input>
            </form>
    )
}

export default SignupForm