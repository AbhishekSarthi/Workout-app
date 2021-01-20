import React from 'react'
import plan from './data'

export const Workout = () => {

    return (
        <>
        <h2>All Exercises</h2>
        {
            plan.map((p) => {
                const {id,name,sets,reps,time} = p;
                return (
                    <div key={id}>
                        <span>{name} </span>
                        <span>reps {reps}</span>
                        <span>sets {sets}</span>
                        <span>time : {time} secs</span>
                    </div>
                    
                )
            })
        }

        </>
    )
}

