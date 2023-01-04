import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

function Home(){
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetch('/quizzes')
        .then(r => r.json())
        .then(quizzes => setQuizzes(quizzes))
    },[])

    const quizElements = quizzes.map((quiz) => {
        return (
            <Quiz quiz={quiz}/>
        )
    })

    return(
        <div>
            {quizElements}
        </div>
    )
}

export default Home