import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  ///set my state for the Data to manipulate

  const [starWarsCharacters, setStarWarsCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/`)
      .then((res) => {
        setStarWarsCharacters(res.data.results);
      })
      .catch((error) => {
        debugger;
      });
  }, []);

  // console.log(starWarsData)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>{starWarsCharacters.map((character) => console.log(character))}</div>
    </div>
  );
};

export default App;
