import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import VTSCanvas from "./components/VTSCanvas";
// import Whiteboard from "./components/Whiteboard";
// import CountdownTimer from "./components/CountdownTimer";

// import { Discussion } from "./components/Discussion";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Routes />
      <VTSCanvas />
    </div>
  );
};

export default App;
