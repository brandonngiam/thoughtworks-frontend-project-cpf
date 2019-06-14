import React from "react";
import "../styles/CPFCalculator.css";
import "react-table/react-table.css";
import UserInputForm from "./UserInputForm";
import MyBarChart from "./MyBarChart";
import MyTable from "./MyTable";
import MyStackedChart from "./MyStackedChart";
import MyPieChart from "./MyPieChart";
import MyImportantNumCard from "./MyImportantNumCard";

class CPFCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.maxAge = 55;
  }

  render() {
    return (
      <div data-testid="results">
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
            history={this.props.history}
          />
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
        ) : (
          <div className="no-userinput-alert">
            <p>You need to provide us information to get results!</p>
          </div>
        )}
      </div>
    );
  }
}

export default CPFCalculator;
