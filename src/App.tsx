import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div id="main-container-wrapper">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
