import React from "react";
import { BrowserRouter } from "react-router-dom";
import LayoutInit from "./components/LayoutInit";
import BaseRoute from "./apps/BaseRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
      
          <BaseRoute />

      </BrowserRouter>
    </div>
  );
}

export default App;
