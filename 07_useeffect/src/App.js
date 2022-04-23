import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  useEffect(()=> {
    alert("clicked");
  }, [num]);

  // [] - it will be called when page refresh
  // [num] - it will be called when num state will change

  return (
    <div className="App">

      <h1>{num}</h1>
      <button onClick={() => {setNum(num + 1)}}>Click Me</button>
      
    </div>
  );
}

export default App;

