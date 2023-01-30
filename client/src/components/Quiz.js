import React from "react";
import {useNavigate} from "react-router-dom"


function Quiz({quiz, currentUser}){
    const history = useNavigate()


    function handleClick(e){
        e.preventDefault()
        history(`/quizzes/${quiz.id}`)

    }

    const quizImages = quiz.questions.map((question) => {
        return <img key={question} className="quiz-preview-thumb" src={question}></img>
    })


    return(
        <div className="quiz-item">  
            
            <h1>{quiz.title}</h1>
            <div className="preview-thumb-container">
                {quizImages}
            </div>
            <h4>Author: {quiz.user.username}</h4>
            <h4>Average Score: {quiz.avg_score}/5</h4>
            {currentUser? <button onClick={handleClick}>View Quiz</button> : null}
        </div>
    )
}

export default Quiz