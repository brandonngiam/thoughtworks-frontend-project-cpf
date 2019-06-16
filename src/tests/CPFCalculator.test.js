import React from "react";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react/dist";
import CPFCalculator from "../components/CPFCalculator";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../components/App";

describe("CPF Calculator", () => {
  it("should display user input form", () => {
    const { getByTestId } = render(
      <CPFCalculator
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const userInputForm = getByTestId("my-form");
    expect(userInputForm).toBeInTheDocument();
  });

  it("should indicate to user to provide information to generate results if form is not submitted", () => {
    const { getByText } = render(
      <CPFCalculator
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const description = getByText(/you need to provide us information/i);
    expect(description).toBeInTheDocument();
  });

  it("should not have any charts or table display information if form is not submitted", () => {
    const { queryByTestId } = render(
      <CPFCalculator
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );

    expect(queryByTestId("my-keyinfo-card")).not.toBeInTheDocument();
    expect(queryByTestId("my-pie-chart")).not.toBeInTheDocument();
    expect(queryByTestId("my-bar-chart")).not.toBeInTheDocument();
    expect(queryByTestId("my-stacked-chart")).not.toBeInTheDocument();
    expect(queryByTestId("my-table")).not.toBeInTheDocument();
  });

  it("should render data visualization when user input submitted", () => {
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

    //change values
    fireEvent.change(ageInput, { target: { value: 1 } });
    fireEvent.change(OAInput, { target: { value: 1 } });
    fireEvent.change(SAInput, { target: { value: 1 } });
    fireEvent.change(MAInput, { target: { value: 1 } });
    fireEvent.change(salaryInput, { target: { value: 1 } });
    fireEvent.click(submitButton);

    expect(getByTestId("data-visualization")).toBeInTheDocument();
  });

  it("should still render data visualization and user inputs when i navigate to and back from another page", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByLabelText, getByTestId, getByText } = render(
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

    //change values
    fireEvent.change(ageInput, { target: { value: 1 } });
    fireEvent.change(OAInput, { target: { value: 2 } });
    fireEvent.change(SAInput, { target: { value: 3 } });
    fireEvent.change(MAInput, { target: { value: 4 } });
    fireEvent.change(salaryInput, { target: { value: 5 } });
    fireEvent.click(submitButton);

    expect(getByTestId("data-visualization")).toBeInTheDocument();
    fireEvent.click(getByText(/About/));
    fireEvent.click(getByText(/Results/));

    //check data visualization still there
    expect(getByTestId("data-visualization")).toBeInTheDocument();

    //check inputs unchanged
    expect(ageInput.value).toEqual("1");
    expect(OAInput.value).toEqual("2");
    expect(SAInput.value).toEqual("3");
    expect(MAInput.value).toEqual("4");
    expect(salaryInput.value).toEqual("5");
  });

  it("should render summary tab when user clicks on it", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByLabelText, getByTestId, getByText, queryByTestId } = render(
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

    //change values
    fireEvent.change(ageInput, { target: { value: 1 } });
    fireEvent.change(OAInput, { target: { value: 1 } });
    fireEvent.change(SAInput, { target: { value: 1 } });
    fireEvent.change(MAInput, { target: { value: 1 } });
    fireEvent.change(salaryInput, { target: { value: 1 } });
    fireEvent.click(submitButton);

    //summary not should not be there
    expect(queryByTestId("summary")).not.toBeInTheDocument();

    const summaryTab = getByText(/summary/i);
    //click summary tab
    fireEvent.click(summaryTab);
    expect(getByTestId("summary")).toBeInTheDocument();
  });
});
