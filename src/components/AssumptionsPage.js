import "../styles/AssumptionsPage.css";
import React from "react";

function AssumptionsPage(props) {
  return (
    <div className="notes" data-testid="assumptions">
      <h1>Assumptions</h1>
      <ul>
        <li>
          There are already many articles online that do a good job covering CPF
          rules. Read one{" "}
          <a
            href="https://blog.moneysmart.sg/budgeting/cpf-contributions-singapore-guide-interest-rates-minimum-sum-calculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>{" "}
        </li>
        <li>
          Approach: CPF has many rules and this simulator accounts for the
          important ones (see below) to estimate it. We will generally provide
          conservative (underestimated) values as it is safer to under estimate
          your retirement fund!
        </li>
        <li>
          CPF has an Ordinary Wage Ceiling ($6,000/month) and Additional Wage
          Ceiling ($30,000/year) for other incomes like bonuses. This simulator
          only accounts for ordinary wages as additional wages such as bonus are
          less predicatble. See this{" "}
          <a
            href="https://www.cpf.gov.sg/Members/Schemes/schemes/other-matters/cpf-contribution-for-employees"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>{" "}
          for more info.
        </li>
        <li>
          Currently, balances of your CPF earn the following{" "}
          <a
            href="https://www.cpf.gov.sg/Members/AboutUs/about-us-info/cpf-interest-rates"
            target="_blank"
            rel="noopener noreferrer"
          >
            interest rates.
          </a>{" "}
          These interest rates may change in the future but we assume that they
          remain constant throughout the simulation.
        </li>
        <li>
          CPF interests are calculated monthly and credited annually. This
          simulator calculates and credits the interest annually. This has an
          effect to slightly understimate your CPF balances as it does not
          account for interest you earn on your income during the year.
        </li>
        <li>
          CPF uses different{" "}
          <a
            href="https://www.cpf.gov.sg/Employers/EmployerGuides/employer-guides/paying-cpf-contributions/cpf-contribution-and-allocation-rates"
            target="_blank"
            rel="noopener noreferrer"
          >
            allocation rates
          </a>{" "}
          (depending your age) to allocate between your accounts. We assume
          allocation rates do not change throughout the simulation.
        </li>
        <li>
          You are allowed to use your CPF for different financial needs. For
          example, you can use your Ordinary Account to pay for housing and your
          Medisave account to pay for medical bills. We assume there is no CPF
          withdrawals throughout the simulation.
        </li>
        <li>
          The{" "}
          <a
            href="https://www.cpf.gov.sg/members/FAQ/schemes/healthcare/medisave/FAQDetails?category=healthcare&group=MediSave&ajfaqid=2189345&folderid=12917"
            target="_blank"
            rel="noopener noreferrer"
          >
            Basic Health Sum (BHS)
          </a>{" "}
          is the maximum amount you can have in your Medisave account. We
          account for this in the simulator and assumes it increases{" "}
          {props.bhsGrowth.toLocaleString(undefined, {
            style: "percent",
            minimumFractionDigits: 1
          })}{" "}
          per year. The overflow gets credited into your Ordinary and Special
          account.
        </li>
        <li>
          The{" "}
          <a
            href="https://www.cpf.gov.sg/members/FAQ/schemes/retirement/retirement-sum-scheme/FAQDetails?category=retirement&group=Retirement+Sum+Scheme&ajfaqid=2190574&folderid=18088"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Retirement Sum
          </a>{" "}
          is the amount required to be set aside to receive monthly payouts from
          the government till your death. You may not withdraw this amount at
          age 55. We assume it increases{" "}
          {props.frsGrowth.toLocaleString(undefined, {
            style: "percent",
            minimumFractionDigits: 1
          })}{" "}
          per year.
        </li>
        <li>Voluntary contribution</li>
      </ul>
    </div>
  );
}

export default AssumptionsPage;
