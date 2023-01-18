import React from "react";

function AttemptResults({ currentUser, attemptData }){

    const scoredAttempt = attemptData.answers.map((answer, index) => {
        if (answer.toLowerCase() === attemptData.quiz.answers[index].toLowerCase()){
            return <h4 class='result' id='right-answer'>{answer}</h4>
        }else{
            return <h4 class='result' id='wrong-answer'>{answer}</h4>
        }
    })

    const imgs = attemptData.quiz.questions.map((q) => {
        return (
            <div>
                <img class='result-img' src={q}></img>
            </div>

    )})
    
    return(
        <div className="attempt-results">
            <h1>{attemptData.quiz.title}</h1>
            <div id='results-container'>
            <div class='results-column'>
                {imgs}
            </div>
                <div class='results-column'>
                    <h4 class='result'>{attemptData.quiz.answers[0]}</h4>
                    <h4 class='result'>{attemptData.quiz.answers[1]}</h4>
                    <h4 class='result'>{attemptData.quiz.answers[2]}</h4>
                    <h4 class='result'>{attemptData.quiz.answers[3]}</h4>
                    <h4 class='result'>{attemptData.quiz.answers[4]}</h4>
                </div>
                <div class='results-column'>
                    {scoredAttempt}
                </div>
            </div>
            <h2>Score: {attemptData.score}/5</h2>
        </div>
    )
}

export default AttemptResults