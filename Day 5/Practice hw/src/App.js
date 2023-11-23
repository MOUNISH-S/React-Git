import React, { useState, useEffect } from 'react';

const App = () => {
  const [msg, setMsg] = useState('msg-lamNEO');

  useEffect(() => {
    console.log('Component Did MOUNT!');

    return () => {
      console.log('Component Will UNMOUNT!');
    };
  }, []); // Empty dependency array means this effect will run once when the component mounts

  useEffect(() => {
    console.log('Component Did UPDATE!');
  }, [msg]); // Run this effect whenever 'msg' changes

  const handleClick = () => {
    setMsg('Welcome to React');
  };

  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={handleClick}>Change Message</button>
    </div>
  );
};

export default App;