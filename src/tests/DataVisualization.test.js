import React from "react";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import { render } from "@testing-library/react";
import DataVisualization from "../components/DataVisualization";

describe("Data Visualization", () => {
  it("should render a card, 3 charts, and one table", () => {
    const data = [
      {
        age: 20,
        OA: 0,
        SA: 0,
        MA: 0,
        total: 0,
        yourContribution: 0,
        interest: 0,
        employer: 0,
        frs: 1,
        bhs: 0,
        annualContributionLimit: 0
      }
    ];

    const { getByTestId } = render(<DataVisualization data={data} />);
    //check for pie chart
    expect(getByTestId("my-pie-chart")).toBeInTheDocument();
    // //check for card
    expect(getByTestId("my-keyinfo-card")).toBeInTheDocument();
    // //check for bar chart
    expect(getByTestId("my-bar-chart")).toBeInTheDocument();
    // //check for stacked chart
    expect(getByTestId("my-stacked-chart")).toBeInTheDocument();
    // //check for table
    expect(getByTestId("my-table")).toBeInTheDocument();
  });
});
