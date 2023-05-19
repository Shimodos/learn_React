import React, { useState, useEffect } from 'react';

const State = () => {
  // const [value, setValue] = useState(0);
  const [state, setState] = useState({
    count: 0,
    isCounting: false,
  });

  // setValue((prevValue) => {
  //   return prevValue + 1;
  // });
  const handleCount = () => {
    setState({ ...state, count: state.count + 1 });
  };

  const handleStatus = () => {
    setState({ ...state, isCounting: !state.isCounting });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <button onClick={handleCount}>Click</button>
      <button onClick={handleStatus}>me too</button>
    </div>
  );
};

export default State;
