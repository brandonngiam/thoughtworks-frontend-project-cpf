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
                <li>OA: 2.5%</li>
                <li>SA: 4%</li>
                <li>MA: 4%</li>
              </ul>
            </li>
            <li>
              {"Full Retirement Sum: " +
                Math.round(props.data[0].frs).toLocaleString()}
            </li>
            <li>
              {"Basic Health Sum: " +
                Math.round(props.data[0].bhs).toLocaleString()}
            </li>
            <li>
              {"Annual Contribution Limit: " +
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
