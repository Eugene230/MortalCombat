import "./App.css";
import CharactersList from "./components/CharactersList/CharactersList";

const charactersArray = [
  { imgName: "jax", active: true, x: 1, y: 1 },
  { imgName: "kabal", active: false, x: 2, y: 1 },
  { imgName: "smoke", active: false, x: 3, y: 1 },
  { imgName: "jax", active: false, x: 4, y: 1 },
  { imgName: "kabal", active: false, x: 5, y: 1 },
  { imgName: "smoke", active: false, x: 1, y: 2 },
  { imgName: "jax", active: false, x: 2, y: 2 },
  { imgName: "kabal", active: false, x: 3, y: 2 },
  { imgName: "smoke", active: false, x: 4, y: 2 },
  { imgName: "jax", active: false, x: 5, y: 2},
  { imgName: "kabal", active: false, x: 1, y: 3 },
  { imgName: "smoke", active: false, x: 2, y: 3 },
  { imgName: "jax", active: false, x: 3, y: 3 },
  { imgName: "kabal", active: false, x: 4, y: 3 },
  { imgName: "smoke", active: false, x: 5, y: 3 },
];

function App() {
  return (
    <div className="App">
      <CharactersList characters={charactersArray}></CharactersList>
    </div>
  );
}

export default App;
