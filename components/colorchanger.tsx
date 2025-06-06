'use client';
import React, { useState } from 'react';

interface Props {
  title?: string;
  defaultColor?: string;
}

export default function ColorChanger({ title = "Pick a color", defaultColor = "" }: Props) {
  const [color, setColor] = useState(defaultColor);

  return (
    <div style={{ margin: '20px' }}>
      <h3>{title}</h3>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="">Select</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="brown">Brown</option>
        <option value="orange">Orange</option>
      </select>

      {color && (
        <div style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: color,
          border: '2px solid #333'
        }}>
        </div>
      )}
    </div>
  );
}
