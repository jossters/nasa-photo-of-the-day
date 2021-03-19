import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Date from './components/date'
import {NASA_API} from './constant'
import StyledApp from './constant/styles'
// Renders to dom 
const App = () => {
  //I set state so that i can use it to store data
  
  const [nasa, setNasa] = useState("")
  
  // Im grabbing the api data
  useEffect(() => {
    axios
    .get(NASA_API)
    .then((res) => {
  //setting nasa to hold data
      setNasa(res.data)
    })
  //catching any errors if any
    .catch( error => {
      console.log(error);
    })
  },[])
  
  return (
    <StyledApp>
      <h1>Nasa Photo Of The Day</h1>
      <Date date={nasa}/>
    </StyledApp>
  );
}

export default App;

