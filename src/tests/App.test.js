import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import App from "../components/App";
import ReactDOM from "react-dom";

describe("the CPFCalculator", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const history = createMemoryHistory({ initialEntries: ["/"] });
    ReactDOM.render(
      <Router history={history}>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  //Check that userform rendered on the home page
  it("should display nav bar", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const navBar = getByTestId("nav-bar");
    expect(navBar).toBeInTheDocument();
  });

  //Navigates to other pages correctly
  it("should have working navigation links", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByTestId, queryByTestId, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(getByTestId("homepage")).toBeInTheDocument();
    expect(queryByTestId("results")).not.toBeInTheDocument();
    expect(queryByTestId("about")).not.toBeInTheDocument();
    expect(queryByTestId("assumptions")).not.toBeInTheDocument();
    fireEvent.click(getByText(/About/));
    expect(getByTestId("about")).toBeInTheDocument();
    expect(queryByTestId("results")).not.toBeInTheDocument();
    expect(queryByTestId("homepage")).not.toBeInTheDocument();
    expect(queryByTestId("assumptions")).not.toBeInTheDocument();
    fireEvent.click(getByText(/Results/));
    expect(getByTestId("results")).toBeInTheDocument();
    expect(queryByTestId("about")).not.toBeInTheDocument();
    expect(queryByTestId("homepage")).not.toBeInTheDocument();
    expect(queryByTestId("assumptions")).not.toBeInTheDocument();
    fireEvent.click(getByText(/Simulation Notes/));
    expect(getByTestId("assumptions")).toBeInTheDocument();
    expect(queryByTestId("about")).not.toBeInTheDocument();
    expect(queryByTestId("homepage")).not.toBeInTheDocument();
    expect(queryByTestId("results")).not.toBeInTheDocument();
  });

  //display nav bar at all pages

  // ### Pre-submission of user inputs ###
  it("initially displays a form with empty inputs", () => {
    //I have to this test here instead of UserInputForm.test.js as the form takes in props from the App component
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByLabelText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    const ageInput = getByLabelText(/age/i);
    expect(ageInput.value).toEqual("");
    const OAInput = getByLabelText(/ordinary account/i);
    expect(OAInput.value).toEqual("");
    const SAInput = getByLabelText(/special account/i);
    expect(SAInput.value).toEqual("");
    const MAInput = getByLabelText(/medisave account/i);
    expect(MAInput.value).toEqual("");
    const salaryInput = getByLabelText(/monthly income/i);
    expect(salaryInput.value).toEqual("");
  });

  //check that userform rendered on the home page
  it("should render UserInputForm", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const userForm = getByTestId("my-form");
    expect(userForm).toBeInTheDocument();
  });

  //mycpf link rendered on the home page
  it("should render myCPF link for users to change balances", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const myCPFLink = getByTestId("mycpf-link");
    expect(myCPFLink).toBeInTheDocument();
  });

  //home page info rendered
  it("should render myCPF link for users to change balances", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const homepageInfo = getByTestId("homepage-info");
    expect(homepageInfo).toBeInTheDocument();
  });

  // ### Post submission of user inputs ###
  it("should navigate to the results page when a user submits the form", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByLabelText, getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const ageInput = getByLabelText(/age/i);
    const OAInput = getByLabelText(/ordinary account/i);
    const SAInput = getByLabelText(/special account/i);
    const MAInput = getByLabelText(/medisave account/i);
    const salaryInput = getByLabelText(/monthly income/i);
    const submitButton = getByTestId("submit-button");

    //change values and submit
    fireEvent.change(ageInput, { target: { value: 1 } });
    fireEvent.change(OAInput, { target: { value: 1 } });
    fireEvent.change(SAInput, { target: { value: 1 } });
    fireEvent.change(MAInput, { target: { value: 1 } });
    fireEvent.change(salaryInput, { target: { value: 1 } });
    fireEvent.click(submitButton);
    expect(getByTestId("results")).toBeInTheDocument();
  });
});
