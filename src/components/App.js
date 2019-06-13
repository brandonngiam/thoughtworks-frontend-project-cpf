import React from "react";
import "../styles/App.css";
import CPFCalculator from "./CPFCalculator";
import ObjectivesPage from "./ObjectivesPage";
import dataGenerator from "../logic/dataGenerator";
import { Navbar, Nav } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxAge = 55;
    this.state = {
      userInputted: false,
      startAge: "",
      oa: "",
      sa: "",
      ma: "",
      monthlySalary: ""
    };
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
    this.setState({ userInputted: true });
  };

  render() {
    const userInputValue = {};
    return (
      <React.Fragment>
        <Router>
          <Nav className="nav-bar">
            <Nav>
              <Link className="my-link" to="/">
                Home
              </Link>
              <Link className="my-link" to="/objective">
                Objectives
              </Link>
              {/* <NavLink className="my-link" href="">
              Assumptions
            </NavLink>
            <NavLink className="my-link" href="">
              CPF rules
            </NavLink>
            <NavLink className="my-link" href="https://www.cpf.gov.sg/Members">
              myCPF
            </NavLink> */}
            </Nav>
          </Nav>
          <main>
            <Route
              exact
              path="/"
              render={() => (
                <CPFCalculator
                  data={this.state.data}
                  userInputHandler={this.userInputHandler}
                  submitHandler={this.submitHandler}
                  balanceAt55={this.state.balanceAt55}
                  userInputted={this.state.userInputted}
                  startAge={this.state.startAge}
                  oa={this.state.oa}
                  sa={this.state.sa}
                  ma={this.state.ma}
                  monthlySalary={this.state.monthlySalary}
                />
              )}
            />
            <Route exact path="/objective" component={ObjectivesPage} />
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
