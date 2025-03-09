import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./style.css";

// Dummy data

const BarChart = ({ data }: any) => {
  return (
    <div className="chart-container">
      <p className="chart-heading">Gross Margin</p>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid
            horizontal
            stroke="#f5f5f5"
            vertical={false}
            strokeWidth={0.2}
          />
          <XAxis dataKey="week" />
          <YAxis
            yAxisId="left"
            axisLine={false} // Remove left axis line
            tickLine={false} // Remove left tick lines
            tickFormatter={(value: any) => `$${value.toLocaleString()}`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false} // Remove right axis line
            tickLine={false} // Remove right tick lines
            tickFormatter={(value: any) => `${(value * 100).toFixed(0)}%`}
          />
          <Tooltip
            formatter={(value: any, name: any) =>
              name === "GM Dollars"
                ? `$${value.toLocaleString()}`
                : `${(value * 100).toFixed(1)}%`
            }
          />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="gmDollars"
            name="GM Dollars"
            fill="#8884d8"
            barSize={15}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="gmPercent"
            name="GM %"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
