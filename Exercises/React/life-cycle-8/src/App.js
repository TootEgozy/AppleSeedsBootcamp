import './App.css';
import Color from './Components/Ex8.1/Color';
import Box1 from './Components/Ex8.2/Box1';
import Box2 from './Components/Ex8.3/Box2';

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
    </div>
  );
}

export default App;
