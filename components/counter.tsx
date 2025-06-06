'use client';
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h2>Counter Component</h2>
      <p style={{ fontSize: '20px' }}>Number: {count}</p>
      <div>
        <button onClick={increment} style={{ marginRight: '15px' }}>+</button>
        <button onClick={decrement} style={{ marginRight: '15px' }}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
