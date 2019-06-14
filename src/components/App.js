import React from "react";
import "../styles/App.css";
import CPFCalculator from "./CPFCalculator";
import AboutPage from "./AboutPage";
import dataGenerator from "../logic/dataGenerator";
import { Nav } from "reactstrap";
import Homepage from "./Homepage";
import { Route, Link } from "react-router-dom";

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

  submitHandler = (event, history) => {
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

    //moves from home page to calculator
    history.push("/results");
  };

  render() {
    return (
      <React.Fragment>
        <Nav className="nav-bar" data-testid="nav-bar">
          <Nav>
            <Link className="my-link" to="/">
              Home
            </Link>
            <Link className="my-link" to="/results">
              Results
            </Link>
            <Link className="my-link" to="/about">
              About
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
            render={props => (
              <Homepage
                {...props}
                userInputHandler={this.userInputHandler}
                submitHandler={this.submitHandler}
                maxAge={this.maxAge}
                startAge={this.state.startAge}
                oa={this.state.oa}
                sa={this.state.sa}
                ma={this.state.ma}
                monthlySalary={this.state.monthlySalary}
              />
            )}
          />
          <Route
            exact
            path="/results"
            render={props => (
              <CPFCalculator
                {...props}
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
          <Route exact path="/about" component={AboutPage} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
