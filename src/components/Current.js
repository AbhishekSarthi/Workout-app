import React, { useState ,useEffect} from 'react'

import {Session} from './Session';

export const Current = () => {
    
    const [session , setSession] = useState(0);
    
    const nextWorkout = () => {
        
        setSession(prevSession => prevSession + 1);
        // if(prevSession > 2){
        //     setSession(0);
        // }
    }

    useEffect(() => {

        if(session === 2){
            setSession(0);
        }

    },[session])


    return (
        <>
        <h2>Current Session</h2>
        <Session session={session} />
        
        <button onClick={() => nextWorkout()} >Next</button>
        </>
    )
}
