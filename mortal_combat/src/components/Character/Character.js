import { useSelector, useDispatch } from "react-redux";

import "./Character.css";

export default function Character({ сharacter }) {
  // const count = useSelector((state) => state.gameData.value);
  return (
    <div
      className={сharacter.active ? "character active" : "character"}
      style={{
        backgroundImage: `url('./images/${сharacter.imgName}.png')`,
      }}
    >
    </div>
  );
}
