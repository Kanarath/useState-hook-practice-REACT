import React from "react";

function App() {
  setInterval(getTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [timeSet, actualTime] = React.useState(time);
  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    actualTime(newTime);
  }

  return (
    <div className="container">
      <h1>{timeSet}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
