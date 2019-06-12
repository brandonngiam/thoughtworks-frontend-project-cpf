import React from "react";
import ReactDOM from "react-dom";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react/dist";
import App from "../components/App";

describe("the main App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // ### Pre-submission of user inputs ###

  //Check that user instrutions rendered
  it("should render user intructions", () => {
    const { getByText } = render(<App />);
    const userInstruction = getByText(/submit your current information/i);
    expect(userInstruction).toBeInTheDocument();
  });

  //Check that userform rendered
  it("should render UserInputForm", () => {
    const { getByTestId } = render(<App />);
    const userForm = getByTestId("my-form");
    expect(userForm).toBeInTheDocument();
  });

  // ### Post submission of user inputs ###
  it("should render a bar chart, stacked chart and table", () => {
    const { getByLabelText, getByText, getByTestId } = render(<App />);
    const ageInput = getByLabelText(/age/i);
    const OAInput = getByLabelText(/ordinary account/i);
    const SAInput = getByLabelText(/special account/i);
    const MAInput = getByLabelText(/medisave account/i);
    const salaryInput = getByLabelText(/monthly salary/i);
    const submitButton = getByText(/^submit$/i);

    //change values
    fireEvent.change(ageInput, { target: { value: 1 } });
    fireEvent.change(OAInput, { target: { value: 1 } });
    fireEvent.change(SAInput, { target: { value: 1 } });
    fireEvent.change(MAInput, { target: { value: 1 } });
    fireEvent.change(salaryInput, { target: { value: 1 } });
    fireEvent.click(submitButton);

    //check for bar chart
    expect(getByTestId("my-bar-chart")).toBeInTheDocument();
    //check for stacked chart
    expect(getByTestId("my-stacked-chart")).toBeInTheDocument();
    //check for table
    expect(getByTestId("my-table")).toBeInTheDocument();
  });
});
