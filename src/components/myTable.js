import "../styles/myTable.css";
import React from "react";
import ReactTable from "react-table";

function MyTable(props) {
  return <ReactTable data={props.data} columns={props.columns} />;
}

export default MyTable;
