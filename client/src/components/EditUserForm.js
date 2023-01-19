import React, { useState } from "react";

function EditUserForm({currentUser, setCurrentUser, setEditing}){

    const [formData, setFormData] = useState({
        username: currentUser.username,
        pofile_img_url: currentUser.pofile_img_url
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json())
        .then((user) => {
            setCurrentUser(user)
            setEditing(false)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>New Username</label>
            <input onChange={(e) => setFormData({...formData, username: e.target.value})} value={formData.username}></input>
            <label>New Profile Image URL</label>
            <input onChange={(e) => setFormData({...formData, pofile_img_url: e.target.value})} value={formData.pofile_img_url}></input>
            <input className="submit-button" type='submit'></input>
        </form>
    )

}

export default EditUserForm