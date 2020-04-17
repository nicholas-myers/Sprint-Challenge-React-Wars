// Write your Character component here

import React from "react";
import styled from "styled-components"

const CharacterCard = styled.div`
    background-color: #414a4c;
    color: #FDCC0D;
    border: 3px solid #FDCC0D;
    outline: 3px solid black;
    padding: 1%;
    margin: 3% 0;
    width: 40%;
    opacity: 60%;
`

const CharacterCardTitle = styled.h2`
    width: 100%;
    word-break: break-word;
`

const Character = ({ character }) => {

  return (
    <CharacterCard>
      <CharacterCardTitle>{character.name}</CharacterCardTitle>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
    </CharacterCard>
  );
};

export default Character