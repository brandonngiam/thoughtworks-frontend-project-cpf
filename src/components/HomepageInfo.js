import "../styles/HomepageInfo.css";
import React from "react";
import { Link } from "react-router-dom";

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
        <p className="mycpf-link" data-testid="mycpf-link">
          Get your CPF balances
          <a
            href="https://saml.singpass.gov.sg/spauth/login/eservloginpage?URL=%2FFIM%2Fsps%2FSingpassIDPFed%2Fsaml20%2Flogininitial%3FRequestBinding%3DHTTPArtifact%26ResponseBinding%3DHTTPArtifact%26PartnerId%3Dhttp%253A%252F%252Fweb.cpf.gov.sg%252Fadfs%252Fservices%252Ftrust%26Target%3DRPID%253Dhttps%25253a%25252f%25252fwww.cpf.gov.sg%25252feSvc%25252fWeb%25252f%2526wctx%253Drm%25253d0%252526id%25253dpassive%252526ru%25253d%2525252feSvc%2525252fWeb%2525252fPortalServices%2525252fWelcomePage%26NameIdFormat%3DEmail%26esrvcID%3DCPFeService&TAM_OP=login"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
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
          simulate your CPF balances till the age of 55 to aid you in retirement
          planning. Learn more{" "}
          <Link className="learn-more-link" to="/about">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default HomepageInfo;
