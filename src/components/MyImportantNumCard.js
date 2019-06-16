import "../styles/MyImportantNumCard.css";
import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function MyImportantNumCard(props) {
  return (
    <div className="my-keyinfo-card" data-testid="my-keyinfo-card">
      <Card>
        <CardBody>
          <CardTitle>
            <h1>Key numbers</h1>
          </CardTitle>
          <ul>
            <li>
              Base interest:
              <ul>
                <li>OA: 2.5%/year</li>
                <li>SA: 4%/year</li>
                <li>MA: 4%/year</li>
                <li>
                  Extra interest: 1%/year on first 60k of combined balances (up
                  to 20k in OA){" "}
                </li>
              </ul>
            </li>
            <li>
              {"Current Full Retirement Sum: " +
                Math.round(props.data[0].frs).toLocaleString()}
            </li>
            <li>
              {"Current Basic Health Sum: " +
                Math.round(props.data[0].bhs).toLocaleString()}
            </li>
            <li>
              {"Current Annual Contribution Limit: " +
                Math.round(
                  props.data[0].annualContributionLimit
                ).toLocaleString()}
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}

export default MyImportantNumCard;
