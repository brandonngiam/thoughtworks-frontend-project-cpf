import "../styles/MyTable.css";
import React from "react";
import ReactTable from "react-table";

function MyTable(props) {
  //table data
  const tableNumFormat = props => Math.round(props.value).toLocaleString();
  const tableColumns = [
    {
      Header: "Age",
      accessor: "age",
      style: { textAlign: "center" },
      headerClassName: "table-header"
    },
    {
      Header: "Ordinary Account",
      accessor: "OA",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: "Special Account",
      accessor: "SA",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: "Medisave",
      accessor: "MA",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: "Total",
      accessor: "total",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: "Your Contribution",
      accessor: "yourContribution",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: "Interest Earned",
      accessor: "interest",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: "Employer contribution",
      accessor: "employer",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    }
  ];

  return (
    <div data-testid="my-table">
      <ReactTable
        data={props.data}
        columns={tableColumns}
        showPagination={false}
        pageSize={props.data === undefined ? 0 : props.data.length}
      />
    </div>
  );
}

export default MyTable;
