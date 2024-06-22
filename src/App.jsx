import LeftSide from "./components/Left Side/LeftSide";
import RightSide from "./components/Right Side/RightSide";
import React from 'react';
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
