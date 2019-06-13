import React from "react";
import "../styles/CPFCalculator.css";
import "react-table/react-table.css";
import UserInputForm from "./UserInputForm";
import MyBarChart from "./MyBarChart";
import MyTable from "./MyTable";
import MyStackedChart from "./MyStackedChart";
import dataGenerator from "../logic/dataGenerator";
import MyPieChart from "./MyPieChart";
import MyImportantNumCard from "./MyImportantNumCard";

class CPFCalculator extends React.Component {
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
  //     oa: 0,
  //     sa: 0,
  //     ma: 0,
  //     monthlySalary: 102000 / 12
  //   });

  //   const input = {
  //     startAge: 30,
  //     oa: 0,
  //     sa: 0,
  //     ma: 0,
  //     monthlySalary: 102000 / 12,
  //     maxAge: 55
  //   };
  //   const result = dataGenerator(input);
  //   this.setState({ data: result });
  //   this.setState({ balanceAt55: result[result.length - 1] });
  // }

  render() {
    return (
      <React.Fragment>
        <div
          className={this.state.data == null ? "below-nav-bar-container" : ""}
        >
          {this.state.data == null ? (
            <a
              className="mycpf-link"
              data-testid="mycpf-link"
              href="https://saml.singpass.gov.sg/spauth/login/eservloginpage?URL=%2FFIM%2Fsps%2FSingpassIDPFed%2Fsaml20%2Flogininitial%3FRequestBinding%3DHTTPArtifact%26ResponseBinding%3DHTTPArtifact%26PartnerId%3Dhttp%253A%252F%252Fweb.cpf.gov.sg%252Fadfs%252Fservices%252Ftrust%26Target%3DRPID%253Dhttps%25253a%25252f%25252fwww.cpf.gov.sg%25252feSvc%25252fWeb%25252f%2526wctx%253Drm%25253d0%252526id%25253dpassive%252526ru%25253d%2525252feSvc%2525252fWeb%2525252fPortalServices%2525252fWelcomePage%26NameIdFormat%3DEmail%26esrvcID%3DCPFeService&TAM_OP=login"
            >
              Get your CPF balances here
            </a>
          ) : null}
          <div className="user-input-container">
            <UserInputForm
              userInputHandler={this.userInputHandler}
              submitHandler={this.submitHandler}
              maxAge={this.maxAge}
            />
          </div>

          {this.state.data === undefined ? null : (
            <React.Fragment>
              <div className="chart-container">
                <div className="pie-table-container">
                  <MyImportantNumCard data={this.state.data} />
                  <MyPieChart data={this.state.balanceAt55} />
                </div>
                <MyBarChart data={this.state.balanceAt55} />
                <MyStackedChart data={this.state.data} />
              </div>
              <MyTable data={this.state.data} />
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default CPFCalculator;
