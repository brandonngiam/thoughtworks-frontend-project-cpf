import "../styles/Homepage.css";
import React from "react";
import UserInputForm from "./UserInputForm";
import HomepageInfo from "./HomepageInfo";

function Homepage(props) {
  return (
    <div className="start-page" data-testid="homepage">
      <div className="description">
        <h1>CPF Simulator</h1>
        <p>
          This is a tool that will simulate your CPF account balances until the
          age of 55.
        </p>
      </div>
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
            monthlySalary={props.monthlySalary}
            history={props.history}
          />
        </div>
      </div>
      <HomepageInfo />
    </div>
  );
}

export default Homepage;