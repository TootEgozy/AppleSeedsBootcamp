import './App.css';
import Color from './Components/Ex8.1/Color';
import Box1 from './Components/Ex8.2/Box1';
import Box2 from './Components/Ex8.3/Box2';
import Spinner from './Components/Ex9/Spinner';
import TimedComp from './Components/Ex9/TimedComp';

function App() {
  return (
      <div>
        <p>Ex 8.1</p>
        <Color/>
        <hr></hr>
        <p>Ex 8.2</p>
        <Box1
        Color="red"
        />
        <Box1
        Color="blue"
        />
        <Box1
        Color="green"
        />
        <hr></hr>
        <p>Ex 8.3:</p>
        <Box2/>
        <hr></hr>
        <div>Ex 9.1:</div>
        <TimedComp/>
      </div>
  );
}

export default App;
