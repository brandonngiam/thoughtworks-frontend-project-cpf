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
  componentDidMount() {
    this.setState({
      startAge: 30,
      oa: 100,
      sa: 100,
      ma: 100,
      monthlySalary: 5000
    });

    const input = {
      startAge: 30,
      oa: 100,
      sa: 100,
      ma: 100,
      monthlySalary: 5000,
      maxAge: 55
    };
    const result = dataGenerator(input);
    this.setState({ data: result });
    this.setState({ balanceAt55: result[result.length - 1] });
  }

  render() {
    const tableColumns = [
      { Header: "Age", accessor: "age" },
      { Header: "Ordinary Account", accessor: "OA" },
      { Header: "Special Account", accessor: "SA" },
      { Header: "Medisave", accessor: "MA" },
      { Header: "Total", accessor: "total" }
    ];

    return (
      <React.Fragment>
        <h1>Please enter your current information</h1>
        <UserInputForm
          userInputHandler={this.userInputHandler}
          submitHandler={this.submitHandler}
          maxAge={this.maxAge}
        />
        <hr />
        <MyBarChart balanceAt55={this.state.balanceAt55} />
        <MyTable data={this.state.data} columns={tableColumns} />
      </React.Fragment>
    );
  }
}

export default App;
