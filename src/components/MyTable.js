import "../styles/MyTable.css";
import React from "react";
import ReactTable from "react-table";

function MyTable(props) {
  return (
    <div data-testid="my-table">
      <ReactTable
        data={props.data}
        columns={props.columns}
        showPagination={false}
        pageSize={props.data === undefined ? 0 : props.data.length}
      />
    </div>
  );
}

export default MyTable;
