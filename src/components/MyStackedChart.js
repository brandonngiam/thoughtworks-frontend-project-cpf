import "../styles/MyStackedChart.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function MyStackedChart(props) {
  const stackedChartData = props.data.map(data => {
    return {
      Age: data.age,
      Ordinary: data.OA,
      Special: data.SA,
      Medisave: data.MA
    };
  });

  return (
    <div className="my-stacked-chart" data-testid="my-stacked-chart">
      <h2>Growth</h2>
      <AreaChart
        width={400}
        height={400}
        data={stackedChartData}
        margin={{
          left: 20
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Age" />
        <YAxis tickFormatter={num => num.toLocaleString()} />
        <Tooltip formatter={num => Math.round(num, 0).toLocaleString()} />
        <Area
          type="monotone"
          dataKey="Medisave"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Special"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="Ordinary"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
}

export default MyStackedChart;
