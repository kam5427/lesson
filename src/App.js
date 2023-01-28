// import logo from './logo.svg';
import './App.css';
import Character from './Character'
import {characters} from "./characters/characters";

function App() {
  return (
    <div className="App">
        <Character character={characters[0]}/>
    </div>
  );
}

export default App;
