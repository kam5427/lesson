import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './Character'
import {characters} from "./characters/characters";

function App() {
    return (
    <div className="App container">
        <div className="row row-cols-3">
            <Character className="col" character={characters[0]}/>
            <Character className="col" character={characters[1]}/>
        </div>

    </div>
  );
}

export default App;
