import React from "react";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import { render } from "@testing-library/react";
import UserInputForm from "../components/UserInputForm";

describe("the user input form used to retrieve CPF details", () => {
  //Input fields only allow certain values
  //Checking the input field value also implicitly checks that the input fields exist!
  it("only allows number characters from 1-55 in the 'Age' field. Required field", () => {
    const { getByLabelText } = render(
      <UserInputForm
        maxAge={55}
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const ageInput = getByLabelText(/age/i);
    expect(ageInput).toHaveAttribute("type", "number");
    expect(ageInput).toHaveAttribute("min", "1");
    expect(ageInput).toHaveAttribute("max", "55");
    expect(ageInput).toHaveAttribute("placeholder", "Between 1 to 55");
    expect(ageInput).toHaveAttribute("required");
  });

  it("only allows number characters greater than or equal to zero in the 'Current Ordinary Account (OA) balance' field. Required field", () => {
    const { getByLabelText } = render(
      <UserInputForm
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const OAInput = getByLabelText(/ordinary account/i);
    expect(OAInput).toHaveAttribute("type", "number");
    expect(OAInput).toHaveAttribute("min", "0");
    expect(OAInput).toHaveAttribute("placeholder", "⩾ 0");
    expect(OAInput).toHaveAttribute("required");
  });

  it("only allows number characters greater than or equal to zero in the 'Current Special Account (SA) balance' field. Required field", () => {
    const { getByLabelText } = render(
      <UserInputForm
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const SAInput = getByLabelText(/special account/i);
    expect(SAInput).toHaveAttribute("type", "number");
    expect(SAInput).toHaveAttribute("min", "0");
    expect(SAInput).toHaveAttribute("placeholder", "⩾ 0");
    expect(SAInput).toHaveAttribute("required");
  });

  it("only allows number characters greater than or equal to zero in the 'Current Medisave Account (MA) balance' field. Required field", () => {
    const { getByLabelText } = render(
      <UserInputForm
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const MAInput = getByLabelText(/medisave account/i);
    expect(MAInput).toHaveAttribute("type", "number");
    expect(MAInput).toHaveAttribute("min", "0");
    expect(MAInput).toHaveAttribute("placeholder", "⩾ 0");
    expect(MAInput).toHaveAttribute("required");
  });

  it("only allows number characters greater than or equal to zero in the 'Current Monthly Income' field. Required field", () => {
    const { getByLabelText } = render(
      <UserInputForm
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const salaryInput = getByLabelText(/monthly income/i);
    expect(salaryInput).toHaveAttribute("type", "number");
    expect(salaryInput).toHaveAttribute("min", "0");
    expect(salaryInput).toHaveAttribute("placeholder", "⩾ 0");
    expect(salaryInput).toHaveAttribute("required");
  });

  it("has button to allow users to submit data to generate CPF", () => {
    const { getByText } = render(
      <UserInputForm
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const button = getByText(/simulate your cpf/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should display oa to sa toggle", () => {
    const { getByTestId } = render(
      <UserInputForm
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const OAToSAToggle = getByTestId("oa-to-sa-toggle");
    expect(OAToSAToggle).toBeInTheDocument();
  });

  it("should display max contribution limit toggle", () => {
    const { getByTestId } = render(
      <UserInputForm
        OAToSAhandler={jest.fn()}
        transferFromOAtoSA={false}
        maxAnnualContributionLimitHandler={jest.fn()}
        maxAnnualContributionLimit={false}
      />
    );
    const OAToSAToggle = getByTestId("max-contribution-toggle");
    expect(OAToSAToggle).toBeInTheDocument();
  });
});
