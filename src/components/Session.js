import React from 'react';
import plan from './data';

export const Session = ({session}) => {

    const {id,name,sets,reps} = plan[session];
    
    return (
        <>
            {/* <span>Session {session}</span> */}
        <div  key={id}>
            <span >Exercise No. {id} </span>
            <span className="text-warning">Name : {name} </span>
            <span>Sets {sets} </span>
            <span className="text-warning">Reps {reps} </span>
        
        </div>
        </>
    )
}
