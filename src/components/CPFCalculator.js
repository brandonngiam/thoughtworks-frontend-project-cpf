import "../styles/DataVisualization.css";
import React from "react";
import "../styles/CPFCalculator.css";
import "react-table/react-table.css";
import UserInputForm from "./UserInputForm";
import DataVisualization from "./DataVisualization";
import Summary from "./Summary";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
            salary={this.props.salary}
            history={this.props.history}
            OAToSAhandler={this.props.OAToSAhandler}
            transferFromOAtoSA={this.props.transferFromOAtoSA}
            maxAnnualContributionLimitHandler={
              this.props.maxAnnualContributionLimitHandler
            }
            maxAnnualContributionLimit={this.props.maxAnnualContributionLimit}
          />
        </div>

        {this.props.userInputted ? (
          <Tabs>
            <TabList>
              <Tab>Data</Tab>
              <Tab>Summary</Tab>
            </TabList>

            <TabPanel>
              <DataVisualization data={this.props.data} />
            </TabPanel>
            <TabPanel>
              <Summary data={this.props.data} />
            </TabPanel>
          </Tabs>
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
