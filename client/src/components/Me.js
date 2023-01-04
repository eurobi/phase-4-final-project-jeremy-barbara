import React from "react";
import {useNavigate} from "react-router-dom"

function Me({ currentUser, setCurrentUser }){

    const history = useNavigate()

    function handleLogout(e){
        fetch('/logout',{
            method : "DELETE"
        })
        .then(setCurrentUser(null))
        .then(history('/'))
    }


    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Me