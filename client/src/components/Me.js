import React from "react";
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import Quiz from "./Quiz";

function Me({ currentUser, setCurrentUser }){

    const history = useNavigate()

    function handleLogout(e){
        fetch('/logout',{
            method : "DELETE"
        })
        .then(setCurrentUser(null))
        .then(history('/login'))
    }

    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetch('/quizzes')
        .then(r => r.json())
        .then(quizzes => setQuizzes(quizzes))
    },[])

    const quizElements = quizzes.map((quiz) => {
        return (
            <Quiz key={quiz.id} currentUser={currentUser} quiz={quiz}/>
        )
    })


    return (
        <div>
            <h2>Welcome, {currentUser.username}</h2>
            <button onClick={handleLogout}>Logout</button>
            <h1>Your quizzes</h1>
            {quizElements}

        </div>
    )
}

export default Me