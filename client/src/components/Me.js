import React from "react";
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import EditUserForm from "./EditUserForm";
import UserScores from "./UserScores";

function Me({ currentUser, setCurrentUser, quizzes, setQuizzes }){
    const history = useNavigate()
    const [editing, setEditing] = useState(false)

    function handleCreateQuiz(e){
        history('/create-quiz')
    }

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

    function handleDeleteClick(e){
        e.preventDefault()
        fetch(`/users/${currentUser.id}`,{
            method: "DELETE"
        })
        .then(setCurrentUser(null))
        .then(history('/login'))
    }

    
    let quizElements

    if (currentUser.createdquizzes && currentUser.createdquizzes !== []){
        quizElements = currentUser.createdquizzes.map((quiz) => {
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
            <button onClick={handleDeleteClick}>Delete Account</button>
            {editing? <EditUserForm setEditing={setEditing} currentUser={currentUser} setCurrentUser={setCurrentUser}></EditUserForm>: null}
            <div id='user-quiz-info-container'>
                <div>
                    <div id='your-quizzes-banner'>
                        <h1>Your quizzes</h1>
                        <button id='your-quizzes-banner-btn' onClick={handleCreateQuiz}>Create Quiz</button>
                    </div>
                    {quizElements? quizElements : null}
                </div>
                <div>
                    <h1>Your scores</h1>
                    <UserScores currentUser={currentUser}/>
                </div>
            </div>

        </div>
    )
}

export default Me