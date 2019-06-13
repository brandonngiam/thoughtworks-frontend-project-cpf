import "../styles/MyPieChart.css";
import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

function MyPieChart(props) {
  const data = [
    {
      name: "Your Contribution",
      value: props.data["yourContribution"]
    },
    { name: "CPF Interest", value: props.data["interest"] },
    {
      name: "Employer Contribution",
      value: props.data["employer"]
    }
  ];

  const total = props.data.total;

  const COLORS = ["#4db8ff", "#8884d8", "#8884d8"];

  return (
    <div className="my-pie-chart" data-testid="my-pie-chart">
      <h1>
        When you turn 55, how much of your CFP actually came out of your own
        pocket?
      </h1>
      <PieChart width={400} height={250}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          outerRadius={80}
          labelLine={false}
          label={data =>
            (data.value / total).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 0
            })
          }
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip formatter={num => Math.round(num, 0).toLocaleString()} />
      </PieChart>
    </div>
  );
}

export default MyPieChart;
