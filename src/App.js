import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Date from './components/date'
// Renders to dom 
const App = () => {
  const [nasa, setNasa] = useState("")
  
  // I just stored the url in api
  const api = `https://api.nasa.gov/planetary/apod?api_key=R3RMfqITi5NzBuBcSLzv6of5lHPClfGoR0WdnOY4`
  // Im grabbing the api data
  useEffect(() => {
    axios
    .get(api)
    .then((res) => {
  //setting nasa to hold data
      setNasa(res.data)
    })
    .catch( error => {
      console.log(error);
    })
  },[])
  console.log(nasa)
  return (
    <div className="App">
      <p>Nasa</p>
      <Date date={nasa}/>
    </div>
  );
}

export default App;

