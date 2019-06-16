import React from "react";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "../components/Homepage";

describe("the homepage", () => {
  it("should render userinput form", () => {
    const { getByTestId } = render(
      <Router>
        <Homepage OAToSAhandler={jest.fn()} transferFromOAtoSA={false} />
      </Router>
    );
    const userInputForm = getByTestId("my-form");
    expect(userInputForm).toBeInTheDocument();
  });

  it("should render homepage info", () => {
    const { getByTestId } = render(
      <Router>
        <Homepage OAToSAhandler={jest.fn()} transferFromOAtoSA={false} />{" "}
      </Router>
    );
    const homepageInfo = getByTestId("homepage-info");
    expect(homepageInfo).toBeInTheDocument();
  });

  it("should have a description", () => {
    const { getByText } = render(
      <Router>
        <Homepage OAToSAhandler={jest.fn()} transferFromOAtoSA={false} />{" "}
      </Router>
    );
    const description = getByText(/cpf simulator/i);
    expect(description).toBeInTheDocument();
  });
});
