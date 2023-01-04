import React from "react";

function Quiz({quiz}){
    return(
        <>
            <img src={quiz.user.profile_img}></img>
            <h1>{quiz.title}</h1>
            <h1>{quiz.user.username}</h1>
            <h3>{quiz.avg_score}</h3>
        </>
    )
}

export default Quiz