import React, { useState } from "react";
import AttemptResults from "./AttemptResults";

function UserScore({currentUser, attempt}){

    const [viewing, setViewing] = useState(false)

    function handleViewAttempt(e){
        e.preventDefault()
        setViewing(!viewing)
    }


    return(
        <>
            <div className="attempt-thumb">
                <h4>{attempt.quiz? attempt.quiz.title : "Deleted Quiz"}</h4>
                <h4>{attempt.score}/5</h4>
                {attempt.quiz? <button onClick={handleViewAttempt}>View attempt</button> : null}
            </div>
            <div>
            {viewing? <AttemptResults currentUser={currentUser} attemptData={attempt}/> : null}
            </div>
        </>
        )
}

export default UserScore