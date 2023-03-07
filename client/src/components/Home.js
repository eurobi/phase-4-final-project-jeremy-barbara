import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

function Home({currentUser, quizzes, setQuizzes}){
    

    const quizElements = quizzes.map((quiz) => {
        return (
            <Quiz key={quiz.id} currentUser={currentUser} quiz={quiz}/>
        )
    })

    return(
        <div id='quiz-container'>
            {quizElements}
        </div>
    )
}

export default Home