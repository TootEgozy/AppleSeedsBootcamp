import './App.css';

import Ex1 from './Components/Ex2.js';
import Ex2 from './Components/Ex2b.js';
import Ex3 from './Components/Ex2c.js';

import Box1 from './Components/boxes/box1';

import Quiz from './Components/Quiz/Quiz';

import Button from './Components/Button/Button';
import CardContainer from './Components/Cadrs/CardContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Ex1/>
      <hr></hr>
      <Ex2/>
      <hr></hr>
      <Ex3/>
      </header>
      <hr></hr>
      <Box1/>
      <hr></hr>
      <Quiz/>
      <hr></hr>
      <Button fontWeight={"bold"} text={"Important"} />
      <Button fontWeight={"200"} text={"Not important"} />
      <hr></hr>
      <CardContainer/>
    </div>
  );
}

export default App;
