import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import StorePage from "./Pages/StoresPage";
import SKUsPage from "./Pages/SKUsPage";
import PlanningPage from "./Pages/PlanningPage";
import ChartPage from "./Pages/ChartPage";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/store"} />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/skus" element={<SKUsPage />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route
          path="*"
          element={<div className="not-found-container">Page Not Found</div>}
        />
      </Routes>
    </>
  );
};
export default Router;
