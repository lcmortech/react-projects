import React, { useState, useEffect } from "react";
import './App.css';

//https://api.github.com/users/rg326

//initiate state using 'null'
function App({ login }) {    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //use useState to set various variables related to the initial state of the app

//we destructor the property 'login' from the api
//use useEffect to set and adjust various loading states
    useEffect(() => {
        if(!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then((res)=> res.json())
            .then(setData)
            .then(()=> setLoading(false))
            .catch(setError);
    }, [login]);

    if (loading) return <h1>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!data) return null;

   
      return ( 
          <div>
            <h1>{data.name}</h1>
            <p>{data.location}</p>
            <img alt={data.login} src={data.avatar_url} height="300" />
          </div>
  );
}

export default App;

//Basic stages of handling state
//loading state
//complete state
//error state