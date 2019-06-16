import React from "react";
import "../styles/Summary.css";

function Summary(props) {
  const balanceAt55 = props.data[props.data.length - 1];
  const frs = balanceAt55.frs;
  const MA = balanceAt55.bhs;
  let OA = 0;
  let SA = 0;
  let frsMetAgeStatement = "";
  let bhsMetAgeStatement = "";

  if (balanceAt55.frsMetAge === -1)
    frsMetAgeStatement = "You never achieved your Full Retirement Sum.";
  else
    frsMetAgeStatement = `You achieved your Full Retirement Sum at age ${
      balanceAt55.frsMetAge
    }.`;
  if (balanceAt55.bhsMetAge === -1)
    bhsMetAgeStatement = "You never achieved your Basic Health Sum.";
  else
    bhsMetAgeStatement = `You achieved your Basic Health Sum at age ${
      balanceAt55.bhsMetAge
    }.`;

  if (balanceAt55.SA >= frs) {
    SA = balanceAt55.SA - frs;
    OA = balanceAt55.OA;
  } else {
    const residual = frs - balanceAt55.SA;
    SA = 0;
    OA = Math.max(0, balanceAt55.OA - residual);
  }
  const RA = Math.min(balanceAt55.SA + balanceAt55.OA, frs);
  const passiveIncome =
    OA * 0.025 +
    SA * 0.04 +
    MA * 0.04 +
    RA * 0.04 +
    Math.min(Math.min(OA, 20000) + SA + MA + RA, 60000) * 0.01 +
    Math.min(balanceAt55.total, 30000) * 0.01;

  return (
    <div className="summary" data-testid="summary">
      <h5>Summary of projections</h5>
      <ul>
        <li>
          Projected Full Retirement Sum when you are 55: $
          {Math.round(balanceAt55.frs).toLocaleString()}
        </li>
        <li>
          Projected Basic Health Sum when you are 55: $
          {Math.round(balanceAt55.bhs).toLocaleString()}
        </li>
        <li>
          You have a total of ${Math.round(balanceAt55.total).toLocaleString()}{" "}
          in your CPF at age 55. These are your balances at 55 before setting
          aside your projected Full Retirement Sum ($
          {Math.round(balanceAt55.frs).toLocaleString()}) in your Retirement
          Account (RA): <br />
          <ul>
            <li>OA: ${Math.round(balanceAt55.OA).toLocaleString()}</li>
            <li>SA: ${Math.round(balanceAt55.SA).toLocaleString()}</li>
            <li>MA: ${Math.round(balanceAt55.MA).toLocaleString()}</li>
          </ul>
        </li>
        <li>
          Assuming you do not pledge any property, these are your new balances
          at 55 after setting aside your Full Retirement Sum in your RA: <br />
          <ul>
            <li>OA: ${Math.round(OA).toLocaleString()}</li>
            <li>SA: ${Math.round(SA).toLocaleString()}</li>
            <li>MA: ${Math.round(MA).toLocaleString()}</li>
            <li>RA: ${Math.round(RA).toLocaleString()}</li>
          </ul>
        </li>
        <li>
          Your CPF total balance came from these sources: <br />
          <ul>
            <li>
              Your income: $
              {Math.round(balanceAt55.yourContribution).toLocaleString()} (
              {(
                balanceAt55.yourContribution / balanceAt55.total
              ).toLocaleString(undefined, {
                style: "percent",
                minimumFractionDigits: 0
              })}
              )
            </li>
            <li>
              Your employer: $
              {Math.round(balanceAt55.employer).toLocaleString()} (
              {(balanceAt55.employer / balanceAt55.total).toLocaleString(
                undefined,
                {
                  style: "percent",
                  minimumFractionDigits: 0
                }
              )}
              )
            </li>
            <li>
              CPF interest: ${Math.round(balanceAt55.interest).toLocaleString()}{" "}
              (
              {(balanceAt55.interest / balanceAt55.total).toLocaleString(
                undefined,
                {
                  style: "percent",
                  minimumFractionDigits: 0
                }
              )}
              )
            </li>
          </ul>
        </li>
        <li>
          At 55, after setting aside your Full Retirement Sum into your RA, you
          may withdraw ${Math.round(OA + SA).toLocaleString()} (OA+SA balance)
          anytime.
        </li>
        <li>
          At 55, if you do not withdraw your CFP balances, you will earn passive
          income of $${Math.round(passiveIncome).toLocaleString()} on the first
          year.
        </li>{" "}
        <li>{frsMetAgeStatement}</li>
        <li>{bhsMetAgeStatement}</li>
      </ul>
    </div>
  );
}

export default Summary;
