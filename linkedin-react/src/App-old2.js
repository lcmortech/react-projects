import React, { useState, useEffect } from "react";
import './App.css';
import logo from './logo.svg'


function App() {
    const [emotion, setEmotion] = useState('happy');
    const [secondary, setSecondary] = useState('tired')

    useEffect(()=>{
        console.log(`It's ${emotion} around here!`)
    },[emotion])

    useEffect(()=>{
        console.log(`It's ${secondary} around here!`)
    },[secondary])
    
    
  return (
    <>
        <h1>Current emotion is { emotion } and { secondary }.</h1>
       <button onClick={()=> setEmotion('frustrated')}>
       Frustrate</button>
       <button onClick={()=> setSecondary('crabby')}>
       Make Crabby</button>
       <button onClick={()=> setEmotion('enthusiastic')}>
       Enthuse</button>
       <button onClick={()=> setEmotion('happy')}>
       Happy</button>
    </>
  );
}

export default App;
