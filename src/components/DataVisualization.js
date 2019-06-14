import React from "react";
import MyBarChart from "./MyBarChart";
import MyTable from "./MyTable";
import MyStackedChart from "./MyStackedChart";
import MyPieChart from "./MyPieChart";
import MyImportantNumCard from "./MyImportantNumCard";

function DataVisualization(props) {
  return (
    <React.Fragment>
      <div className="chart-container" data-testid="data-visualization">
        <div>
          <MyImportantNumCard data={props.data} />
          <MyPieChart data={props.data} />
        </div>
        <MyBarChart data={props.data} />
        <MyStackedChart data={props.data} />
      </div>
      <MyTable data={props.data} />
    </React.Fragment>
  );
}

export default DataVisualization;
