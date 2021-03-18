import React from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer"

import hogs from "../porkers_data";



function App() {
  return (
    <div className="App">
      <Nav />
      <PigContainer  pigs = {hogs} />
      {/* /* // name={hogs.name} 
      // specialty={hogs.specialty} 
      // greased={hogs.greased}
      // weight={hogs.weight}
      // medal={hogs['highest medal achieved']} /> */}
    </div>
  );
}

export default App;
