import "../styles/AboutPage.css";
import React from "react";

function AboutPage() {
  return (
    <div className="about" data-testid="about">
      <h1>Goals</h1>
      <ul>
        <li>
          To help users get a sense of yearly balances until the age of 55.
          <b> Why 55?</b> At this age, CPF members can withdraw their balances
          anytime after setting aside their Full Retirement Sum.
        </li>
        <li>
          To help users understand the sources of their CPF balances. CPF
          balances have three contribution sources: your own pocket (salary or
          voluntary contribution), your employer's contribution, and from the
          government in the form of interest. This tool will help users
          attribute these three sources.
        </li>
        <li>
          To help users estimate 1) how much they can withdraw at 55 2) and CPF
          interest they can earn from 55 onwards.
        </li>
        <li>
          To help users estimate when they can hit the Full Retirement Sum and
          the Basic Health Sum.
        </li>
        <li>
          To help users understand how CPF rules actually affect their balances
          in dollar terms.
        </li>
        <li>
          To help users optimize or increase their CPF balances via 1) moving
          Ordinary Account balances to the Special account 2) or via Voluntary
          contribution to hit the Annual Contribution Limit.
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;
