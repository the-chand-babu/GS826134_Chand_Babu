import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <BrowserRouter>
      <div id="main-container-wrapper">
        <TopNavbar />
        <div className="container-wrapper">
          <SideNavbar />
          <div className="data-container-wrapper">
            <Router />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
