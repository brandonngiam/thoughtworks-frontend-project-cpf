import React from "react";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import { render } from "@testing-library/react";
import HomepageInfo from "../components/HomepageInfo";
import { BrowserRouter as Router } from "react-router-dom";

describe("the homepage info", () => {
  it("should have a description of CPF", () => {
    const { getByText } = render(
      <Router>
        <HomepageInfo />
      </Router>
    );
    const whatIsCPF = getByText(/what is cpf/i);
    expect(whatIsCPF).toBeInTheDocument();
  });

  it("should have a description of the rational for the tool", () => {
    const { getByText } = render(
      <Router>
        <HomepageInfo />
      </Router>
    );
    const whatIsCPF = getByText(/what is cpf/i);
    expect(whatIsCPF).toBeInTheDocument();
  });

  it("should provide a link to myCPF", () => {
    const { getByTestId } = render(
      <Router>
        <HomepageInfo />
      </Router>
    );
    const myCPF = getByTestId("mycpf-link");
    const textContainingLink = myCPF.innerHTML;
    expect(textContainingLink).toContain("https://saml.singpass.gov.sg");
  });
});
