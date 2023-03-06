import React, { useEffect, useState } from "react";
import UserScore from "./UserScore";

function UserScores({currentUser}){

    function handleViewAttempt(){
        
    }

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
            <UserScore currentUser={currentUser} attempt={attempt}/>)
        })
    }
    

    return(
        <div>
            {attemptElements}
        </div>
    )
}

export default UserScores
