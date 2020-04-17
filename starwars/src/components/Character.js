// Write your Character component here

import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = ({ character }) => {
  return (
    <div className="characterCard">
      <h2>{character.name}</h2>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
    </div>
  );
};

export default Character