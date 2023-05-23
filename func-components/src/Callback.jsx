import React, { useState, useCallback } from 'react';
// import ReactDOM from "react-dom";

const CountButton = React.memo(({ onClick, count }) => {
  console.log('render', count);
  return <button onClick={onClick}>{count}</button>;
});

export function DualCounter() {
  const [count1, setCount1] = useState(0);
  const increment1 = useCallback(() => setCount1((c) => c + 1), []);

  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => setCount2((c) => c + 1), []);

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}

// ReactDOM.render(<DualCounter />, document.querySelector("#root"));
