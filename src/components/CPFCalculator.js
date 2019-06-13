import React from "react";
import "../styles/CPFCalculator.css";
import "react-table/react-table.css";
import UserInputForm from "./UserInputForm";
import MyBarChart from "./MyBarChart";
import MyTable from "./MyTable";
import MyStackedChart from "./MyStackedChart";
import MyPieChart from "./MyPieChart";
import MyImportantNumCard from "./MyImportantNumCard";
import HomepageInfo from "./HomepageInfo";

class CPFCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.maxAge = 55;
  }

  render() {
    return (
      <React.Fragment>
        <div
          //user input form jumps to the top once it has been inputted
          className={this.props.userInputted ? "" : "below-nav-bar-container"}
        >
          <div className="start-page">
            <div>
              {this.props.userInputted ? null : (
                <p className="mycpf-link" data-testid="mycpf-link">
                  Get your CPF balances
                  <a href="https://saml.singpass.gov.sg/spauth/login/eservloginpage?URL=%2FFIM%2Fsps%2FSingpassIDPFed%2Fsaml20%2Flogininitial%3FRequestBinding%3DHTTPArtifact%26ResponseBinding%3DHTTPArtifact%26PartnerId%3Dhttp%253A%252F%252Fweb.cpf.gov.sg%252Fadfs%252Fservices%252Ftrust%26Target%3DRPID%253Dhttps%25253a%25252f%25252fwww.cpf.gov.sg%25252feSvc%25252fWeb%25252f%2526wctx%253Drm%25253d0%252526id%25253dpassive%252526ru%25253d%2525252feSvc%2525252fWeb%2525252fPortalServices%2525252fWelcomePage%26NameIdFormat%3DEmail%26esrvcID%3DCPFeService&TAM_OP=login">
                    here
                  </a>
                </p>
              )}
              <div className="user-input-container">
                <UserInputForm
                  userInputHandler={this.props.userInputHandler}
                  submitHandler={this.props.submitHandler}
                  maxAge={this.maxAge}
                  startAge={this.props.startAge}
                  oa={this.props.oa}
                  sa={this.props.sa}
                  ma={this.props.ma}
                  monthlySalary={this.props.monthlySalary}
                />
              </div>
            </div>
            {this.props.userInputted ? null : <HomepageInfo />}
          </div>

          {this.props.userInputted ? (
            <React.Fragment>
              <div className="chart-container">
                <div className="pie-table-container">
                  <MyImportantNumCard data={this.props.data} />
                  <MyPieChart data={this.props.balanceAt55} />
                </div>
                <MyBarChart data={this.props.balanceAt55} />
                <MyStackedChart data={this.props.data} />
              </div>
              <MyTable data={this.props.data} />
            </React.Fragment>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default CPFCalculator;
