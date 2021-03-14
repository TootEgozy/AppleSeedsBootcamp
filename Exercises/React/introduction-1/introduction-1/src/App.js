import logo from './logo.svg';
import './App.css';

//inport my code from an external file
import Ex1 from './Compopnents/Ex1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me!
        </a>
        {/* my code */}
        <Ex1/>
        <br></br>
        <hr></hr>
      </header>
    </div>
  );
}

export default App;
