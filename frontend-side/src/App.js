import './App.css';
import React, { useEffect } from "react";

function App() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/");
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
