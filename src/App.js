// import logo from './logo.svg';
import './App.css';
import Character from './Character'

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <h1>Hello</h1>
        <Character name="Batman" age="35" job="Миллардер, филантроп, борец со злом" image="https://images.hdqwalls.com/download/batman-cosplay-5k-2020-ve-320x240.jpg"/>
    </div>
  );
}

export default App;
