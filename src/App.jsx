import "./App.css";

import React, { useState } from "react";
import ContractList from "./components/ContractList";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <ContractList />
    </div>
  );
}

export default App;
