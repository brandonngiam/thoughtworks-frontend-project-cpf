import React from "react";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import { render } from "@testing-library/react";
import Homepage from "../components/Homepage";

describe("the homepage", () => {
  it("should render userinput form", () => {
    const { getByTestId } = render(<Homepage />);
    const userInputForm = getByTestId("my-form");
    expect(userInputForm).toBeInTheDocument();
  });

  it("should render homepage info", () => {
    const { getByTestId } = render(<Homepage />);
    const homepageInfo = getByTestId("homepage-info");
    expect(homepageInfo).toBeInTheDocument();
  });

  it("should have a description", () => {
    const { getByText } = render(<Homepage />);
    const description = getByText(/cpf simulator/i);
    expect(description).toBeInTheDocument();
  });
});
