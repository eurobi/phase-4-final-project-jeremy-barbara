import React, { useState } from "react";
import {useNavigate} from "react-router-dom"


function CreateQuiz({currentUser, quizzes, setQuizzes}){

    const [errors, setErrors] = useState()

    const [formData, setFormData] = useState({
        title: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
    })

    const history = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const quizData = {
            title: formData.title,
            author_id: currentUser.id,
            questions: [
                formData.q1, formData.q2, formData.q3, formData.q4, formData.q5
            ],
            answers: [
                formData.a1, formData.a2, formData.a3, formData.a4, formData.a5
            ]
        }
        fetch('/quizzes',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizData)
        }).then(r => {
            if(r.ok){
                r.json()
                .then(quiz => {
                    setQuizzes([...quizzes, quiz])
                    history(`/quizzes/${quiz.id}`)})
            }else{
                r.json().then(e => setErrors(Object.entries(e.errors).flat()))
            }
        })
    }

    if(!currentUser){
        return(
            <h4>please log in or sign up to create a quiz.</h4>
        )
    }

    return(
        <div id='quiz-form-container'>
            <h4>{errors}</h4>
            <form id="quiz-form" onSubmit={handleSubmit}>
                <label for='quiz-title-input'><strong>Quiz Title:</strong> </label>
                <input id='quiz-title-input' value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}></input>

                <label for='question-1-input'>Image 1 URL: </label>
                <input id='question-1-input' value={formData.q1} onChange={(e) => setFormData({...formData, q1: e.target.value})}></input>
                <label for='answer-1-input'>Answer: </label>
                <input className="answer-input" id='answer-1-input' value={formData.a1} onChange={(e) => setFormData({...formData, a1: e.target.value})}></input>

                <label for='question-2-input'>Image 2 URL: </label>
                <input id='question-2-input' value={formData.q2} onChange={(e) => setFormData({...formData, q2: e.target.value})}></input>
                <label for='answer-2-input'>Answer: </label>
                <input className="answer-input" id='answer-2-input' value={formData.a2} onChange={(e) => setFormData({...formData, a2: e.target.value})}></input>

                <label for='question-3-input'>Image 3 URL: </label>
                <input id='question-3-input' value={formData.q3} onChange={(e) => setFormData({...formData, q3: e.target.value})}></input>
                <label for='answer-3-input'>Answer: </label>
                <input className="answer-input" id='answer-3-input' value={formData.a3} onChange={(e) => setFormData({...formData, a3: e.target.value})}></input>

                <label for='question-4-input'>Image 4 URL: </label>
                <input id='question-4-input' value={formData.q4} onChange={(e) => setFormData({...formData, q4: e.target.value})}></input>
                <label for='answer-4-input'>Answer: </label>
                <input className="answer-input" id='answer-4-input' value={formData.a4} onChange={(e) => setFormData({...formData, a4: e.target.value})}></input>

                <label for='question-5-input'>Image 5 URL: </label>
                <input id='question-5-input' value={formData.q5} onChange={(e) => setFormData({...formData, q5: e.target.value})}></input>
                <label for='answer-5-input'>Answer: </label>
                <input className="answer-input" id='answer-5-input' value={formData.a5} onChange={(e) => setFormData({...formData, a5: e.target.value})}></input>

                <input className="submit-button" type='submit'></input>
            </form>
            <div className="quiz-form-image-container">
                <div className="img-container">
                    <img className="quiz-form-img" src={formData.q1}></img>
                </div>
                <div className="img-container">
                    <img className="quiz-form-img" src={formData.q2}></img>
                </div>
                <div className="img-container">
                    <img className="quiz-form-img" src={formData.q3}></img>
                </div>
                <div className="img-container">
                    <img className="quiz-form-img" src={formData.q4}></img>
                </div>
                <div className="img-container">
                    <img className="quiz-form-img" src={formData.q5}></img>
                </div>
            </div>
        </div>
    )
}

export default CreateQuiz