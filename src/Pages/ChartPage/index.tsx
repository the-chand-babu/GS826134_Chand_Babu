import { chartData } from "../../data/chartData";
import BarChart from "../../design-system/Charts";
import "./style.css";

const ChartPage = () => {
  return (
    <div id="chart-container">
      <BarChart data={chartData} />
    </div>
  );
};

export default ChartPage;
