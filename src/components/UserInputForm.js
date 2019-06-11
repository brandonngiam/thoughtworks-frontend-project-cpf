import "../styles/UserInputForm.css";
import React from "react";

function UserInputForm(props) {
  return (
    <div>
      <form onSubmit={props.submitHandler}>
        Age: <br />
        <input
          type="number"
          min="1"
          max={props.maxAge}
          name="startAge"
          onChange={props.userInputHandler}
        />
        <br />
        Current Ordinary Account (OA) balance: <br />
        <input
          type="number"
          min="0"
          name="oa"
          onChange={props.userInputHandler}
        />
        <br />
        Current Special Account (SA) balance: <br />
        <input
          type="number"
          min="0"
          name="sa"
          onChange={props.userInputHandler}
        />
        <br />
        Current Medisave Account (MA) balance: <br />
        <input
          type="number"
          min="0"
          name="ma"
          onChange={props.userInputHandler}
        />
        <br />
        Monthly salary: <br />
        <input
          type="number"
          min="0"
          name="monthlySalary"
          onChange={props.userInputHandler}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UserInputForm;
