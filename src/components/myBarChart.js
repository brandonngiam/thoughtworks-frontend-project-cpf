import "../styles/myBarChart.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function MyBarChart(props) {
  const barChartData = props.balanceAt55
    ? [
        { name: "OA", SGD: props.balanceAt55.OA },
        { name: "SA", SGD: props.balanceAt55.SA },
        { name: "MA", SGD: props.balanceAt55.MA },
        { name: "Total", SGD: props.balanceAt55.total }
      ]
    : [];

  return (
    <BarChart
      width={500}
      height={300}
      data={barChartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="SGD" fill="#8884d8" />
    </BarChart>
  );
}

export default MyBarChart;
