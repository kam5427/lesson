import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './Character'
import {characters} from "./characters/characters";

function App() {
    return (
    <div className="App container">
        <div className="row row-cols-3">
            {characters.map((character) => <Character className="col" character={character} />)}
        </div>
    </div>
  );
}

export default App;
