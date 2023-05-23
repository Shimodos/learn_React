import React from 'react';
// import { Clicker } from './Clicker';
// import Timer from './Timer';
// import State from './State';
// import Effect from './Effect';
// import { Context } from './Context';
// import { Books } from './components/Books';
import { DualCounter } from './Callback';

function App() {
  // const [isTimer, setTimer] = useState(false);
  // const [isClicker, setClicker] = useState(false);

  // return (
  //   <div className="App">
  //     <h2>React App</h2>
  //     <button onClick={(e) => setClicker(!isClicker)}>Toggle Clicker</button>
  //     {isClicker && <Clicker />}
  //     <h2>React Timer</h2>
  //     <button onClick={() => setTimer(!isTimer)}>Toggle timer</button>
  //     {isTimer && <Timer />}
  //     <State />
  //     {/* <Effect /> */}
  //   </div>
  // );
  return (
    // <Context>
    //   <Books />
    // </Context>
    <DualCounter />
  );
}

export default App;
