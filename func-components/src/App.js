import React, { useState } from 'react';
import { Clicker } from './Clicker';
import Timer from './Timer';
import State from './State';

function App() {
  const [isTimer, setTimer] = useState(false);
  const [isClicker, setClicker] = useState(false);

  return (
    <div className="App">
      <h2>React App</h2>
      <button onClick={(e) => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker && <Clicker />}
      <h2>React Timer</h2>
      <button onClick={() => setTimer(!isTimer)}>Toggle timer</button>
      {isTimer && <Timer />}
      <State />
    </div>
  );
}

export default App;
