import React from 'react';
// import Time from './components/Time';
import Clock from './components/Clock';
import {Workout} from './components/Workout';
import './App.css';



function App() {
  return (
    <div className="App">
        {/* <Time /> */}
        <Clock />
        <Workout />
        <br/>
        {/* <Current /> */}

        
    </div >
  );
}

export default App;
