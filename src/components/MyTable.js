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
      style: { textAlign: "center", whiteSpace: "unset" },
      headerClassName: "table-header"
    },
    {
      Header: (
        <p>
          Ordinary <br /> Account
        </p>
      ),
      accessor: "OA",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: (
        <p>
          Special <br /> Account
        </p>
      ),
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
      Header: "Total CPF",
      accessor: "total",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: (
        <p>
          Your Total <br /> Contribution
        </p>
      ),
      accessor: "yourContribution",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: (
        <p>
          Total Interest <br /> Earned
        </p>
      ),
      accessor: "interest",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: (
        <p>
          Total Employer <br /> Contribution
        </p>
      ),
      accessor: "employer",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: (
        <p>
          Projected <br /> FRS
        </p>
      ),
      accessor: "frs",
      style: { textAlign: "center" },
      Cell: tableNumFormat,
      headerClassName: "table-header"
    },
    {
      Header: (
        <p>
          Projected <br /> BHS
        </p>
      ),
      accessor: "bhs",
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
