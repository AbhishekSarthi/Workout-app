import React ,{useState,useRef,useEffect} from 'react';
// import ReactAudioPlayer from 'react-audio-player';

export const Clock = () => {

    const [running , setRunning] = useState(false);
    const [clock ,setClock] = useState(0);
    const clockRef = useRef(null);
    const [clockSession,setClockSession] = useState("Workout");
    const [min,setMin] = useState(-1);
    const [sec,setSec] = useState(0);
    // let audio = new Audio("./Ghost.mp3");
    // const audioRef = useRef();


    const startTime = () => {

        
        if(running === false){
            setRunning(true);
            // audioRef.play();
            clockRef.current = setInterval(() => {
                setClock(prevClock => prevClock + 1)
            },1000)

        }
    }

    const pauseTime = () => {
        setRunning(false);
        clearInterval(clockRef.current);
    }


    useEffect(() => {

        console.log("UseEffect running clock");
        setSec(clock % 60);
        
        if(clock % 60 === 0){
            setMin(prevMin => prevMin + 1);
            
        }

        if(clock % 60 === 45){
            // if(audioRef.current){
            //     console.log("song")
            //     // audioRef.current.pause();
            //     // audioRef.current.load();
            //     audioRef.current.play();
            // }
            setClockSession("Break")
        }
        if(clock % 60 === 0){
            setClockSession("Workout")
        }

    },[clock]);

    return (
        <>
        <div className='jumbotron'>
            <h1>Workout App</h1>
            <div className="card text-white bg-info mb-3">
                <h1 className="display-4">{clockSession}</h1>
                <h1 className="display-1">{clock}</h1>
                <h1 className="display-1">{min} : {sec}</h1>
            </div>
            <div className="center">
            <button type="button" className="btn btn-success" onClick={() => startTime()}>Start</button>
            <button type="button" className="btn btn-warning" onClick={() => pauseTime()}>Pause</button>
            </div>

            {/* <ReactAudioPlayer src="./Ghost.mp3" type="audio/mp3" autoPlay={true} controls /> */}

            {/* <audio ref="audio_tag" src="./Ghost.mp3" controls autoPlay /> */}

{/* 
            <audio controls ref={audioRef}>
                <source src="./Ghost.mp3" type="audio/mp3" />
            </audio> */}


        </div>  
        </>
    )
}

export default Clock;