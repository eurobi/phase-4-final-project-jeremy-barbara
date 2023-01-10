import React from "react";
import {useNavigate} from "react-router-dom"


function Quiz({quiz}){
    const history = useNavigate()


    function handleClick(e){
        e.preventDefault()
        history(`/quizzes/${quiz.id}`)

    }


    return(
        <>  
            <img src={quiz.user.profile_img}></img>
            <h1>{quiz.title}</h1>
            <h1>{quiz.user.username}</h1>
            <h3>{quiz.avg_score}</h3>
            <button onClick={handleClick}>View Quiz</button>
        </>
    )
}

export default Quiz