import React from "react";
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import EditUserForm from "./EditUserForm";

function Me({ currentUser, setCurrentUser }){
    const history = useNavigate()
    const [editing, setEditing] = useState(false)

    function handleLogout(e){
        fetch('/logout',{
            method : "DELETE"
        })
        .then(setCurrentUser(null))
        .then(history('/login'))
    }

    function handleEditClick(e){
        e.preventDefault()
        setEditing(!editing)
    }

    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetch(`/users/${currentUser.id}/quizzes`)
        .then(r => r.json())
        .then(quizzes => setQuizzes(quizzes))
    },[])
    
    let quizElements

    if (quizzes !== []){
        quizElements = quizzes.map((quiz) => {
            return (
                <Quiz key={quiz.id} currentUser={currentUser} quiz={quiz}/>
            )
        })
    }
    


    return (
        <div>
            <div id='welcome-banner'>
                <h2>Welcome, {currentUser.username}</h2>
                <img className="profile-img" src={currentUser.pofile_img_url}></img>
            </div>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleEditClick}>Edit User Details</button>
            {editing? <EditUserForm setEditing={setEditing} currentUser={currentUser} setCurrentUser={setCurrentUser}></EditUserForm>: null}
            <h1>Your quizzes</h1>
            {quizElements? quizElements : null}

        </div>
    )
}

export default Me