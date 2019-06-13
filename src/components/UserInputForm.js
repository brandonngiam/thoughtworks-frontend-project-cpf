import "../styles/UserInputForm.css";
import React from "react";

function UserInputForm(props) {
  return (
    <form
      className="my-form"
      data-testid="my-form"
      onSubmit={props.submitHandler}
    >
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
      </div>
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
        <label htmlFor="monthlySalary">Current Monthly Salary: </label>
        <br />
        <input
          type="number"
          min="0"
          name="monthlySalary"
          id="monthlySalary"
          placeholder="⩾ 0"
          value={props.monthlySalary}
          onChange={props.userInputHandler}
          required
        />
        <br />
        <div className="button-container">
          <button type="submit">Simulate your CPF!</button>
        </div>
      </div>
    </form>
  );
}

export default UserInputForm;
