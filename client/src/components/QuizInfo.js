import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom"
import Attempt from "./Attempt";


function QuizInfo({currentUser, quizzes, setQuizzes}){
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

    function handleDeleteClick(){
        fetch(`/quizzes/${id}`,{
            method: "DELETE"
        })
        .then(deletedQuiz => {
            console.log(deletedQuiz)
            setQuizzes([...quizzes].filter(q => q.id !== quiz.id))
            currentUser.createdquizzes = currentUser.createdquizzes.filter(q => q.id !== quiz.id)
            history('/')
        })
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
    
    let attempters = []

    if(quiz.attempts){
        attempters = quiz.attempts.map((attempt) => attempt.user_id)
    }

    let attemptElements = []

    if(quiz.attempts){
        attemptElements = quiz.users.map((user) => {
            return(<p>
                {`${user.username}`}
            </p>)
    })}
    

    const { id } = useParams()

    if(attempting){
        return(
            <Attempt quizzes={quizzes} setQuizzes={setQuizzes} quiz={quiz} currentUser={currentUser}></Attempt>
        )
    }
    else{
    return(
        <div>
            <div>
                <h1>{quiz.title}</h1>
                {quiz? imgs : null}
                {quiz.author_id !== currentUser.id && !attempters.includes(currentUser.id) ? <button onClick={handleClick} id='take-quiz-btn'>Take quiz</button> : null}
                {quiz.author_id == currentUser.id? <button onClick={handleDeleteClick} id='delete-quiz-btn'>Delete quiz</button> : null}
                {attempters.includes(currentUser.id)? <h4>You've already taken this quiz</h4> : null}
            </div>
            <div>
                <h1>Users who have taken this quiz:</h1>
                <p>
                    {attemptElements.length > 0? attemptElements : <p>No users have attempted this quiz yet</p>}
                </p>
            </div>
        </div>
    )}
}

export default QuizInfo