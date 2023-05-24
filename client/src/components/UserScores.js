import React, { useEffect, useState } from "react";
import UserScore from "./UserScore";

function UserScores({currentUser}){


    const [attemptData, setAttemptData] = useState()

    useEffect(() => {
        fetch(`/users/${currentUser.id}/attempts`)
        .then(r => r.json())
        .then(attemptData => setAttemptData(attemptData))
    },[currentUser])

    let attemptElements


    if(attemptData){
        attemptElements = attemptData.map(attempt => {
            return(
            <UserScore key={attempt.id} currentUser={currentUser} attempt={attempt}/>)
        })
    }
    

    return(
        <div>
            {attemptElements? attemptElements : null}
        </div>
    )
}

export default UserScores
