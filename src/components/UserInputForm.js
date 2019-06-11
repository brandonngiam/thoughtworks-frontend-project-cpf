import "../styles/UserInputForm.css";
import React from "react";

function UserInputForm(props) {
  return (
    <div>
      <form className="my-form" onSubmit={props.submitHandler}>
        <label htmlFor="startAge">Age:</label> <br />
        <input
          type="number"
          min="1"
          max={props.maxAge}
          placeholder={"Between 1 to " + props.maxAge}
          name="startAge"
          id="startAge"
          onChange={props.userInputHandler}
          required
        />
        <br />
        <label htmlFor="oa">Current Ordinary Account (OA) balance:</label>
        <br />
        <input
          type="number"
          min="0"
          placeholder="⩾ 0"
          name="oa"
          id="oa"
          onChange={props.userInputHandler}
          required
        />
        <br />
        <label htmlFor="sa">Current Special Account (SA) balance:</label>
        <br />
        <input
          type="number"
          min="0"
          placeholder="⩾ 0"
          name="sa"
          id="sa"
          onChange={props.userInputHandler}
          required
        />
        <br />
        <label htmlFor="ma">Current Medisave Account (MA) balance:</label>
        <br />
        <input
          type="number"
          min="0"
          placeholder="⩾ 0"
          name="ma"
          id="sa"
          onChange={props.userInputHandler}
          required
        />
        <br />
        <label htmlFor="monthlySalary">Current Monthly salary: </label>
        <br />
        <input
          type="number"
          min="0"
          name="monthlySalary"
          id="monthlySalary"
          placeholder="⩾ 0"
          onChange={props.userInputHandler}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UserInputForm;
