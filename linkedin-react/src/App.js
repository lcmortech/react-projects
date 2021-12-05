import React, { useState, useEffect, useReducer } from "react";
import './App.css';
import logo from './logo.svg'

//https://api.github.com/users/rg326

//initiate state using 'null'
function App({ login }) {    
    const [data, setData] = useState(null);

//we destructor the property 'login' from the api
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then((res)=> res.json())
        .then(setData);
    }, [])

    if(data) { 
      return ( 
          <div>
          <h1>{data.name}</h1>
          <p>{data.location}</p>
          <img alt={data.login} src={data.avatar_url} height="300" />
          </div>
      )
    } else {
      return  <div>No user available</div>
    }
  return (
    <div>

    </div>
  );
}

export default App;
