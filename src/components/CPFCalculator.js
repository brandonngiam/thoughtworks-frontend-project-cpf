import "../styles/DataVisualization.css";
import React from "react";
import "../styles/CPFCalculator.css";
import "react-table/react-table.css";
import UserInputForm from "./UserInputForm";
import DataVisualization from "./DataVisualization";

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
          <DataVisualization data={this.props.data} />
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
