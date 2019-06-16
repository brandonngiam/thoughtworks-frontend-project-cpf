import "../styles/Homepage.css";
import React from "react";
import UserInputForm from "./UserInputForm";
import HomepageInfo from "./HomepageInfo";

function Homepage(props) {
  return (
    <div className="start-page" data-testid="homepage">
      <div>
        <div className="user-input-container">
          <UserInputForm
            userInputHandler={props.userInputHandler}
            submitHandler={props.submitHandler}
            maxAge={props.maxAge}
            startAge={props.startAge}
            oa={props.oa}
            sa={props.sa}
            ma={props.ma}
            salary={props.salary}
            history={props.history}
            OAToSAhandler={props.OAToSAhandler}
            transferFromOAtoSA={props.transferFromOAtoSA}
            maxAnnualContributionLimitHandler={
              props.maxAnnualContributionLimitHandler
            }
            maxAnnualContributionLimit={props.maxAnnualContributionLimit}
          />
        </div>
        <div className="description">
          <h1>CPF Simulator</h1>
          <p>
            This is a tool that will simulate your CPF account balances until
            the age of 55.
          </p>
        </div>
      </div>
      <HomepageInfo />
    </div>
  );
}

export default Homepage;
