import React from "react";
import "../styles/App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initial = { startAge: 30, OA: 100, SA: 100, MA: 100 };
    this.data = [
      { age: 30, OA: 100, SA: 100, MA: 100, total: 300 },
      { age: 31, OA: 200, SA: 200, MA: 200, total: 600 },
      { age: 32, OA: 300, SA: 300, MA: 300, total: 900 },
      { age: 33, OA: 400, SA: 400, MA: 400, total: 1200 },
      { age: 34, OA: 500, SA: 500, MA: 500, total: 1500 },
      { age: 35, OA: 600, SA: 600, MA: 600, total: 1800 },
      { age: 36, OA: 700, SA: 700, MA: 700, total: 2100 },
      { age: 37, OA: 800, SA: 800, MA: 800, total: 2400 },
      { age: 38, OA: 900, SA: 900, MA: 900, total: 2700 },
      { age: 39, OA: 1000, SA: 1000, MA: 1000, total: 3000 },
      { age: 40, OA: 1100, SA: 1100, MA: 1100, total: 3300 }
    ];
  }

  render() {
    const columns = [
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Ordinary Account",
        accessor: "OA"
      },
      {
        Header: "Special Account",
        accessor: "SA"
      },
      {
        Header: "Medisave",
        accessor: "MA"
      },
      {
        Header: "Total",
        accessor: "total"
      }
    ];

    return (
      <div className="App">
        <h1>Please enter your current information</h1>
        <UserInput />
        <hr />
        <ReactTable data={this.data} columns={columns} />
      </div>
    );
  }
}

function UserInput() {
  return (
    <div className="user-input-box">
      <form>
        Age: <br />
        <input type="text" /> <br />
        Current Ordinary Account (OA) balance: <br />
        <input type="text" />
        <br />
        Current Special Account (SA) balance: <br />
        <input type="text" />
        <br />
        Current Medisave Account (MA) balance: <br />
        <input type="text" />
        <br />
      </form>
    </div>
  );
}

export default App;
