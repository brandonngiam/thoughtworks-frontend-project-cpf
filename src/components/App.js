import React from "react";
import "../styles/App.css";
import "react-table/react-table.css";
import UserInputForm from "./UserInputForm";
import MyBarChart from "./myBarChart";
import MyTable from "./myTable";
import dataGenerator from "../logic/dataGenerator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxAge = 55;
    this.state = {};
  }

  userInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const input = {
      startAge: Number(this.state.startAge),
      oa: Number(this.state.oa),
      sa: Number(this.state.sa),
      ma: Number(this.state.ma),
      monthlySalary: Number(this.state.monthlySalary),
      maxAge: Number(this.maxAge)
    };
    const result = dataGenerator(input);
    this.setState({ data: result });
    this.setState({ balanceAt55: result[result.length - 1] });
  };

  //remove me
  // componentDidMount() {
  //   this.setState({
  //     startAge: 30,
  //     oa: 100,
  //     sa: 100,
  //     ma: 100,
  //     monthlySalary: 5000
  //   });

  //   const input = {
  //     startAge: 30,
  //     oa: 100,
  //     sa: 100,
  //     ma: 100,
  //     monthlySalary: 5000,
  //     maxAge: 55
  //   };
  //   const result = dataGenerator(input);
  //   this.setState({ data: result });
  //   this.setState({ balanceAt55: result[result.length - 1] });
  // }

  render() {
    const tableNumFormat = props => props.value.toLocaleString();
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
        Cell: tableNumFormat,
        headerClassName: "table-header"
      },
      {
        Header: "Special Account",
        accessor: "SA",
        Cell: tableNumFormat,
        headerClassName: "table-header"
      },
      {
        Header: "Medisave",
        accessor: "MA",
        Cell: tableNumFormat,
        headerClassName: "table-header"
      },
      {
        Header: "Total",
        accessor: "total",
        Cell: tableNumFormat,
        headerClassName: "table-header"
      }
    ];

    return (
      <React.Fragment>
        <h1 className="user-input-instruction">
          Submit your current information
        </h1>
        <UserInputForm
          userInputHandler={this.userInputHandler}
          submitHandler={this.submitHandler}
          maxAge={this.maxAge}
        />
        <hr />
        {this.state.data === undefined ? null : (
          <React.Fragment>
            <MyBarChart balanceAt55={this.state.balanceAt55} />
            <MyTable data={this.state.data} columns={tableColumns} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
