import { useState } from 'react';
import Character from "../Character/Character";

import "./CharactersList.css";

export default function CharactersList({ characters }) {
  // const [selectedСoordinates, setSelectedСoordinates] = useState({
  //   x: 1,
  //   y: 1,
  // });
 
  return (
    <div className="charactersContainer">
      <div className="selectFighterText">SELECT YOUR FIGHTER</div>
      <div className="charactersList">
        {characters &&
          characters.map((сharacter, i) => (
            <Character сharacter={сharacter} key={i} />
          ))}
      </div>
    </div>
  );
}