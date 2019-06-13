import "../styles/MyBarChart.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function MyBarChart(props) {
  const barChartData = props.data
    ? [
        { name: "Ordinary", SGD: props.data.OA },
        { name: "Special", SGD: props.data.SA },
        { name: "Medisave", SGD: props.data.MA },
        { name: "Total", SGD: props.data.total }
      ]
    : [];

  return (
    <div className="my-bar-chart" data-testid="my-bar-chart">
      <h2>CPF Balances at 55</h2>
      <BarChart
        title="X"
        width={400}
        height={300}
        data={barChartData}
        margin={{ left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={num => num.toLocaleString()} />
        <Tooltip formatter={num => Math.round(num, 0).toLocaleString()} />
        {/* <Legend /> */}
        <Bar dataKey="SGD" fill="#93ABD2" />
      </BarChart>
    </div>
  );
}

export default MyBarChart;
