'use client';
import React, { useState } from 'react';

export default function Message() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h2>message</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: '10px', marginRight: '15px' }}
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p style={{ marginTop: '150px' }}>
          Your message is: <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}
