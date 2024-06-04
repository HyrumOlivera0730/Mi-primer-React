import LeftSide from "./components/Left Side/LeftSide";
import React from 'react';
import RightSide from "./components/Right Side/RightSide";

function App() {

  return (
    <div className="App">
      <div className="welcome-container">
          <LeftSide/>
          <RightSide/>
      </div>
    </div>
  )
}

export default App
