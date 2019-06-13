import "../styles/HomepageInfo.css";
import React from "react";

function HomepageInfo() {
  return (
    <div className="homepage-info" data-testid="homepage-info">
      <div className="my-card">
        <h3>What is CPF?</h3>
        <p>
          The Central Provident Fund (CPF) is a comprehensive social security
          system that enables working Singapore Citizens and Permanent Residents
          to set aside funds for retirement. It also addresses healthcare, home
          ownership, family protection and asset enhancement.
        </p>
      </div>
      <div className="my-card">
        <h3>Ever tried reading about CPF rules?</h3>
        <img
          src="https://media.giphy.com/media/3ohhwphLpCpe7hF2Bq/giphy.gif"
          alt="gif"
        />
        <p>
          We know how you feel! And that is why we have built this tool to
          simulate your CPF balances till the age of 55 so that you can easily
          plan for your retirement.
        </p>
      </div>
    </div>
  );
}

export default HomepageInfo;
