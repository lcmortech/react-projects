import React, { useReducer } from "react";
import './App.css';
import logo from './logo.svg'


function App() {    
    const [checked, toggled] = useReducer(
    (checked => !checked), false);
    
  return (
    <>
        <input 
        type="checkbox" 
        value={checked}
        onChange={ toggled }
        />
        <p>{checked ? 'checked' : 'not checked'}</p>
    </>
  );
}

export default App;
