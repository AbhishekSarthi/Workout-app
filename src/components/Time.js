import React ,{useState,useRef,useEffect} from 'react'
import {Current} from './Current';

const Time = () => {

    const [time , setTime] = useState(0);
    const [running , setRunning] = useState(false);
    const timeRef = useRef(null);
    const [session,setSession] = useState("Workout");
    const [extime , setExtime] = useState(45);


    const startTime = () => {

        console.log("time",time);
        if(running === false){
            setRunning(true);


            timeRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1)
                    
            }, 1000)
        }
    }

    const handleSpace = (e) =>{
        if(e.charCode===32){
            startTime();
            console.log("space pressed");
        }
    }

        
  const pauseTime = () => {
        setRunning(false);
        clearInterval(timeRef.current);
    }

    useEffect(() => {

        console.log("effect called",time);

        if(time === extime){
            
            
            clearInterval(timeRef.current);
            setSession(session === "Workout" ? "Break" : "Workout");
            setExtime(extime === 45 ? 15 : 45);
            setTime(0);
            setRunning(false);
        }

    }, [time,extime,session]);





  

    return (
        <div className='jumbotron'>
            <h1>Workout App</h1>
            <div className="card text-white bg-info mb-3">
                <h1 className="display-4">{session}</h1>
                <h1 className="display-1">{time}</h1>
            </div>
            <div className="center">
            <button type="button" className="btn btn-success" onKeyPress={handleSpace} onClick={() => startTime()}>Start</button>
            <button type="button" className="btn btn-warning" onClick={() => pauseTime()}>Pause</button>
            </div>
            {/* <h2>Current Session</h2>
                
                <Session session={session} />
        
            <button onClick={() => nextWorkout()} >Next</button> */}
            <Current />

        </div>
    )
}

export default Time;
