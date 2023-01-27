import React from "react";
import Home from "../containers/Home";
import { BrowserRouter } from "react-router-dom";

import "../styles/App.css";

const App = () => {
  return (
    <div className="Main__Container">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
};

export default App;
