import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function QuizInfo({currentUser}){

    const [quiz, setQuiz] = useState({
        questions: [],
        answers: [],
        title: ""
    })

    

    useEffect(()=> {
        fetch(`/quizzes/${id}`)
        .then(resp=> resp.json())
        .then(quiz => {
            setQuiz(quiz)
        })
    },[])

    
    const imgs = quiz.questions.map((q) => {
        return <img src={q}></img>
        })
    

    const { id } = useParams()
    return(
        <>
            <h1>{quiz.title}</h1>
            {quiz? imgs : null}
            {quiz.user_id !== currentUser.id? <button id='take-quiz-btn'>Take quiz</button> : null}
        </>
    )
}

export default QuizInfo