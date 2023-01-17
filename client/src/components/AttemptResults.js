import React from "react";

function AttemptResults({ currentUser, attemptData }){

    console.log(attemptData)
    return(
        <>
            <h1>{attemptData.quiz.title}</h1>
            <h1>Score: {attemptData.score}/5</h1>
            <h1>{currentUser.username}</h1>
        </>
    )
}

export default AttemptResults