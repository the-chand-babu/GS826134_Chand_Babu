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
const data = [
  {
    week: "W01",
    gmDollars: 140061.78,
    salesDollars: 239526.34,
    gmPercent: 0.58,
  },
  {
    week: "W02",
    gmDollars: 110391.21,
    salesDollars: 258634.6,
    gmPercent: 0.43,
  },
  {
    week: "W03",
    gmDollars: 101657.28,
    salesDollars: 263774.46,
    gmPercent: 0.39,
  },
  {
    week: "W04",
    gmDollars: 134341.07,
    salesDollars: 332652.41,
    gmPercent: 0.4,
  },
  {
    week: "W05",
    gmDollars: 130398.15,
    salesDollars: 275162.26,
    gmPercent: 0.47,
  },
  {
    week: "W06",
    gmDollars: 137438.96,
    salesDollars: 319884.6,
    gmPercent: 0.43,
  },
  {
    week: "W07",
    gmDollars: 116387.03,
    salesDollars: 252500.95,
    gmPercent: 0.46,
  },
  {
    week: "W08",
    gmDollars: 159070.65,
    salesDollars: 335894.42,
    gmPercent: 0.47,
  },
  {
    week: "W09",
    gmDollars: 88328.55,
    salesDollars: 174790.68,
    gmPercent: 0.51,
  },
  {
    week: "W10",
    gmDollars: 119284.46,
    salesDollars: 261782.66,
    gmPercent: 0.46,
  },
  {
    week: "W11",
    gmDollars: 130099.18,
    salesDollars: 292137.38,
    gmPercent: 0.45,
  },
  {
    week: "W12",
    gmDollars: 139360.58,
    salesDollars: 284207.55,
    gmPercent: 0.49,
  },
  {
    week: "W13",
    gmDollars: 128456.87,
    salesDollars: 294047.89,
    gmPercent: 0.44,
  },
  {
    week: "W14",
    gmDollars: 86661.91,
    salesDollars: 189073.83,
    gmPercent: 0.46,
  },
  {
    week: "W15",
    gmDollars: 151592.15,
    salesDollars: 271421.42,
    gmPercent: 0.56,
  },
  {
    week: "W16",
    gmDollars: 151686.17,
    salesDollars: 347732.0,
    gmPercent: 0.44,
  },
  {
    week: "W17",
    gmDollars: 88672.61,
    salesDollars: 206735.46,
    gmPercent: 0.43,
  },
  {
    week: "W18",
    gmDollars: 81851.01,
    salesDollars: 175256.89,
    gmPercent: 0.47,
  },
  {
    week: "W19",
    gmDollars: 117644.42,
    salesDollars: 257209.45,
    gmPercent: 0.46,
  },
  {
    week: "W20",
    gmDollars: 75460.72,
    salesDollars: 196483.55,
    gmPercent: 0.38,
  },
  {
    week: "W21",
    gmDollars: 89873.37,
    salesDollars: 232307.36,
    gmPercent: 0.39,
  },
  {
    week: "W22",
    gmDollars: 217801.24,
    salesDollars: 400567.98,
    gmPercent: 0.54,
  },
  {
    week: "W23",
    gmDollars: 80015.21,
    salesDollars: 187739.22,
    gmPercent: 0.43,
  },
  {
    week: "W24",
    gmDollars: 99365.58,
    salesDollars: 233854.94,
    gmPercent: 0.42,
  },
  {
    week: "W25",
    gmDollars: 146165.37,
    salesDollars: 338581.81,
    gmPercent: 0.43,
  },
  {
    week: "W26",
    gmDollars: 90708.15,
    salesDollars: 281071.52,
    gmPercent: 0.32,
  },
  {
    week: "W27",
    gmDollars: 180504.75,
    salesDollars: 276942.13,
    gmPercent: 0.65,
  },
  {
    week: "W28",
    gmDollars: 139442.48,
    salesDollars: 303695.38,
    gmPercent: 0.46,
  },
  {
    week: "W29",
    gmDollars: 139216.77,
    salesDollars: 314421.17,
    gmPercent: 0.44,
  },
  {
    week: "W30",
    gmDollars: 100489.04,
    salesDollars: 262484.91,
    gmPercent: 0.38,
  },
  {
    week: "W31",
    gmDollars: 152765.66,
    salesDollars: 316858.04,
    gmPercent: 0.48,
  },
  {
    week: "W32",
    gmDollars: 75704.04,
    salesDollars: 169452.56,
    gmPercent: 0.45,
  },
  {
    week: "W33",
    gmDollars: 167605.48,
    salesDollars: 340037.18,
    gmPercent: 0.49,
  },
  {
    week: "W34",
    gmDollars: 79485.96,
    salesDollars: 234269.32,
    gmPercent: 0.34,
  },
  {
    week: "W35",
    gmDollars: 119596.45,
    salesDollars: 256836.52,
    gmPercent: 0.47,
  },
  {
    week: "W36",
    gmDollars: 120675.47,
    salesDollars: 260032.26,
    gmPercent: 0.46,
  },
  {
    week: "W37",
    gmDollars: 97413.66,
    salesDollars: 257055.42,
    gmPercent: 0.38,
  },
  {
    week: "W38",
    gmDollars: 155962.01,
    salesDollars: 340058.58,
    gmPercent: 0.46,
  },
  { week: "W39", gmDollars: 37571.16, salesDollars: 161007.9, gmPercent: 0.23 },
  {
    week: "W40",
    gmDollars: 121974.94,
    salesDollars: 242047.42,
    gmPercent: 0.5,
  },
  {
    week: "W41",
    gmDollars: 128438.16,
    salesDollars: 196580.97,
    gmPercent: 0.65,
  },
  {
    week: "W42",
    gmDollars: 71208.94,
    salesDollars: 201049.32,
    gmPercent: 0.35,
  },
  {
    week: "W43",
    gmDollars: 128752.29,
    salesDollars: 293362.74,
    gmPercent: 0.44,
  },
  {
    week: "W44",
    gmDollars: 55866.91,
    salesDollars: 259462.35,
    gmPercent: 0.22,
  },
  {
    week: "W45",
    gmDollars: 134230.98,
    salesDollars: 358561.15,
    gmPercent: 0.37,
  },
  {
    week: "W46",
    gmDollars: 146587.86,
    salesDollars: 281889.16,
    gmPercent: 0.52,
  },
  {
    week: "W47",
    gmDollars: 73497.75,
    salesDollars: 209428.43,
    gmPercent: 0.35,
  },
  {
    week: "W48",
    gmDollars: 133371.47,
    salesDollars: 233990.84,
    gmPercent: 0.57,
  },
  {
    week: "W49",
    gmDollars: 73773.56,
    salesDollars: 225732.78,
    gmPercent: 0.33,
  },
  {
    week: "W50",
    gmDollars: 110037.62,
    salesDollars: 244378.2,
    gmPercent: 0.45,
  },
  {
    week: "W51",
    gmDollars: 96149.38,
    salesDollars: 266757.29,
    gmPercent: 0.36,
  },
  {
    week: "W52",
    gmDollars: 138093.51,
    salesDollars: 245570.72,
    gmPercent: 0.56,
  },
];

const BarChart = () => {
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
