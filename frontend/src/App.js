import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  const callBackend = () => {
    fetch('http://backend:4000/')  // 注意：容器間用服務名稱 `backend`
      .then(res => res.text())
      .then(text => setMsg(text))
      .catch(err => setMsg('Error: ' + err));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Frontend</h1>
      <button onClick={callBackend}>Call Backend</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;
