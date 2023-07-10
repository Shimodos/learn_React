import React, { useState } from 'react';

const HookSwitcher = () => {
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
      Hello World
      <button onClick={() => setColor('Gray')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize((s) => s + 2)}>+</button>
      <button onClick={() => setFontSize((s) => s - 2)}>-</button>
    </div>
  );
};

export default HookSwitcher;
