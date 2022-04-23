import React, { createContext } from "react";
import "./App.css";
import ComA from "./ComA";

const User = createContext();

function App() {
  const user = {
    fName: "Prasad",
    lName: "Kumar",
  };

  return (
    <div className="App">
      <User.Provider value={user}>
          <ComA />
      </User.Provider>
    </div>
  );
}

export default App;
export { User };
