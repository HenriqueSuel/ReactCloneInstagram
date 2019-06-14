import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Headers from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes />;
    </BrowserRouter>
  );
}

export default App;
