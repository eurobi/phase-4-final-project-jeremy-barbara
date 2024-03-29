import React, { useState } from "react";
import { useParams } from "react-router";
import AttemptResults from "./AttemptResults";
import {useNavigate} from "react-router-dom"



function Attempt({quiz, currentUser, quizzes, setQuizzes}){
    const history = useNavigate()
    const [done, setDone] = useState(false)
    const [attemptData, setAttemptData] = useState()
    const [answers, setAnswers] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: ""
    })

    const imgs = quiz.questions.map((q) => {
        return (
            <div>
                <img src={q}></img>
            </div>

    )})

    function handleSubmit(e){
        e.preventDefault()
        const data = {
            user_id: currentUser.id,
            quiz_id: quiz.id,
            answers: [answers.q1, answers.q2, answers.q3, answers.q4, answers.q5]
        }
        fetch('/attempts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                response.json()
                .then(attempt => {
                    setQuizzes([...quizzes].map(quiz =>{
                        if(quiz.id === attempt.quiz.id){
                            return {...quiz, avg_score: attempt.quiz.avg_score}
                        }
                        else{
                            return quiz
                        }
                    }))
                    setAttemptData(attempt)
                    setDone(true)
                })
            }
            else{
                response.json().then(e => console.log(e.errors))
            }
        })
        
    }

    if(done){
        return(
            <AttemptResults currentUser={currentUser} attemptData={attemptData}></AttemptResults>
        )
    }else{
    return(
        <>
            <div id='attempt-div'>
                <div className='attempt-sub-div'>
                    {imgs}
                </div>
                <div className='attempt-sub-div'>
                    <form onSubmit={handleSubmit} id='attempt-form'>
                        <input className="attempt-answer-input" onChange={(e) => setAnswers({...answers, q1: e.target.value})} value={answers.q1} id='attempt-input-q1'></input>
                        <input className="attempt-answer-input" onChange={(e) => setAnswers({...answers, q2: e.target.value})} value={answers.q2} id='attempt-input-q2'></input>
                        <input className="attempt-answer-input" onChange={(e) => setAnswers({...answers, q3: e.target.value})} value={answers.q3} id='attempt-input-q3'></input>
                        <input className="attempt-answer-input" onChange={(e) => setAnswers({...answers, q4: e.target.value})} value={answers.q4} id='attempt-input-q4'></input>
                        <input className="attempt-answer-input" onChange={(e) => setAnswers({...answers, q5: e.target.value})} value={answers.q5} id='attempt-input-q5'></input>
                        <input type='submit'></input>
                    </form>
                </div>
            </div>
            
        </>
    )}}


export default Attempt