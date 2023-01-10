import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom"
import Attempt from "./Attempt";


function QuizInfo({currentUser}){
    const history = useNavigate()
    const [quiz, setQuiz] = useState({
        questions: [],
        answers: [],
        title: ""
    })

    const [attempting, setAttempting] = useState(false)

    function handleClick(e){
        e.preventDefault()
        setAttempting(true)
    }

    

    useEffect(()=> {
        fetch(`/quizzes/${id}`)
        .then(resp=> resp.json())
        .then(quiz => {
            setQuiz(quiz)
        })
    },[])

    
    const imgs = quiz.questions.map((q) => {
        return (
            <div>
                <img src={q}></img>
            </div>

    )})
    

    const { id } = useParams()

    if(attempting){
        return(
            <Attempt quiz={quiz} currentUser={currentUser}></Attempt>
        )
    }
    else{
    return(
        <>
            <h1>{quiz.title}</h1>
            {quiz? imgs : null}
            {quiz.user_id !== currentUser.id? <button onClick={handleClick} id='take-quiz-btn'>Take quiz</button> : null}
        </>
    )}
}

export default QuizInfo