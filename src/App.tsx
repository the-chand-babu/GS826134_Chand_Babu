import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
