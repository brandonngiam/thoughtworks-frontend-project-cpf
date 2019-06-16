import "../styles/UserInputForm.css";
import React from "react";
import Switch from "react-switch";

function UserInputForm(props) {
  return (
    <form
      className="my-form"
      data-testid="my-form"
      onSubmit={event => {
        props.submitHandler(event, props.history);
      }}
    >
      <div>
        <div>
          <label htmlFor="startAge">Age:</label> <br />
          <input
            type="number"
            min="1"
            max={props.maxAge}
            placeholder={"Between 1 to " + props.maxAge}
            value={props.startAge}
            name="startAge"
            id="startAge"
            onChange={props.userInputHandler}
            required
          />
          <div>
            <label data-testid="oa-to-sa-toggle">
              <span>Always transfer from OA to SA</span>
              <Switch
                className="react-switch"
                onChange={props.OAToSAhandler}
                checked={props.transferFromOAtoSA}
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="oa">Current Ordinary Account (OA):</label>
          <br />
          <input
            type="number"
            min="0"
            placeholder="⩾ 0"
            value={props.oa}
            name="oa"
            id="oa"
            onChange={props.userInputHandler}
            required
          />
          <div>
            <label data-testid="max-contribution-toggle">
              <span>Max Annual Contribution Limit</span>
              <Switch
                className="react-switch"
                onChange={props.maxAnnualContributionLimitHandler}
                checked={props.maxAnnualContributionLimit}
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="sa">Current Special Account (SA):</label>
        <br />
        <input
          type="number"
          min="0"
          placeholder="⩾ 0"
          value={props.sa}
          name="sa"
          id="sa"
          onChange={props.userInputHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="ma">Current Medisave Account (MA):</label>
        <br />
        <input
          type="number"
          min="0"
          placeholder="⩾ 0"
          value={props.ma}
          name="ma"
          id="ma"
          onChange={props.userInputHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="salary">Current Monthly Income: </label>
        <br />
        <input
          type="number"
          min="0"
          name="salary"
          id="salary"
          placeholder="⩾ 0"
          value={props.salary}
          onChange={props.userInputHandler}
          required
        />
        <br />
        <div className="button-container">
          <button type="submit" data-testid="submit-button">
            Simulate your CPF!
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserInputForm;
