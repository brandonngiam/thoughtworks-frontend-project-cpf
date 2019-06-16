import React from "react";
import "../styles/App.css";
import CPFCalculator from "./CPFCalculator";
import AboutPage from "./AboutPage";
import AssumptionsPage from "./AssumptionsPage";
import dataGenerator from "../logic/dataGenerator";
import Homepage from "./Homepage";
import { Nav } from "reactstrap";
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxAge = 55;
    this.frsGrowth = 0.03;
    this.bhsGrowth = 0.045;
    this.state = {
      userInputted: false,
      startAge: "",
      oa: "",
      sa: "",
      ma: "",
      salary: "",
      transferFromOAtoSA: false,
      maxAnnualContributionLimit: false
    };
  }

  OAToSAhandler = checked => {
    this.setState({ transferFromOAtoSA: checked });
    if (this.state.userInputted) {
      const input = {
        startAge: Number(this.state.startAge),
        oa: Number(this.state.oa),
        sa: Number(this.state.sa),
        ma: Number(this.state.ma),
        salary: Number(this.state.salary),
        maxAge: Number(this.maxAge),
        frsGrowth: this.frsGrowth,
        bhsGrowth: this.bhsGrowth,
        transferFromOAtoSA: checked,
        maxAnnualContributionLimit: this.state.maxAnnualContributionLimit
      };

      const result = dataGenerator(input);
      this.setState({ data: result });
    }
  };

  maxAnnualContributionLimitHandler = checked => {
    this.setState({ maxAnnualContributionLimit: checked });
    if (this.state.userInputted) {
      const input = {
        startAge: Number(this.state.startAge),
        oa: Number(this.state.oa),
        sa: Number(this.state.sa),
        ma: Number(this.state.ma),
        salary: Number(this.state.salary),
        maxAge: Number(this.maxAge),
        frsGrowth: this.frsGrowth,
        bhsGrowth: this.bhsGrowth,
        transferFromOAtoSA: this.state.transferFromOAtoSA,
        maxAnnualContributionLimit: checked
      };
      const result = dataGenerator(input);
      this.setState({ data: result });
    }
  };

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
      salary: Number(this.state.salary),
      maxAge: Number(this.maxAge),
      frsGrowth: this.frsGrowth,
      bhsGrowth: this.bhsGrowth,
      transferFromOAtoSA: this.transferFromOAtoSA,
      maxAnnualContributionLimit: this.state.maxAnnualContributionLimit
    };
    const result = dataGenerator(input);
    this.setState({ data: result });
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
            <Link className="my-link" to="/assumptions">
              Simulation Notes
            </Link>
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
                salary={this.state.salary}
                OAToSAhandler={this.OAToSAhandler}
                transferFromOAtoSA={this.state.transferFromOAtoSA}
                maxAnnualContributionLimitHandler={
                  this.maxAnnualContributionLimitHandler
                }
                maxAnnualContributionLimit={
                  this.state.maxAnnualContributionLimit
                }
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
                userInputted={this.state.userInputted}
                startAge={this.state.startAge}
                oa={this.state.oa}
                sa={this.state.sa}
                ma={this.state.ma}
                salary={this.state.salary}
                OAToSAhandler={this.OAToSAhandler}
                transferFromOAtoSA={this.state.transferFromOAtoSA}
                maxAnnualContributionLimitHandler={
                  this.maxAnnualContributionLimitHandler
                }
                maxAnnualContributionLimit={
                  this.state.maxAnnualContributionLimit
                }
              />
            )}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/assumptions"
            render={() => (
              <AssumptionsPage
                frsGrowth={this.frsGrowth}
                bhsGrowth={this.bhsGrowth}
              />
            )}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
