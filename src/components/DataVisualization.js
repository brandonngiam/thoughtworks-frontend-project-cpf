import React from "react";
import MyBarChart from "./MyBarChart";
import MyTable from "./MyTable";
import MyStackedChart from "./MyStackedChart";
import MyPieChart from "./MyPieChart";
import MyImportantNumCard from "./MyImportantNumCard";

function DataVisualization(props) {
  return (
    <div className="data-visualization" data-testid="data-visualization">
      <div className="chart-container">
        <MyBarChart data={props.data} />
        <MyStackedChart data={props.data} />
        <div>
          <MyImportantNumCard data={props.data} />
          <MyPieChart data={props.data} />
        </div>
      </div>
      <MyTable data={props.data} />
    </div>
  );
}

export default DataVisualization;
