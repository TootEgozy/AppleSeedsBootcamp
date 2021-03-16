import './App.css';
import Color from './Components/Ex8.1/Color';
import Box1 from './Components/Ex8.2/Box1';

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
    </div>
  );
}

export default App;
