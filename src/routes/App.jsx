import React from "react";
import Home from "../containers/Home";
import { BrowserRouter } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/App.css";

const App = () => {
  useScrollReveal(".Home__Container");
  useScrollReveal(".AboutMe__Container");
  useScrollReveal(".Projects__container");
  useScrollReveal(".Design__container");
  return (
    <div className="Main__Container">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
};

export default App;
