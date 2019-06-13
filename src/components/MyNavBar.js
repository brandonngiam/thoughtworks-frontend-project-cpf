import "../styles/MyNavBar.css";
import React from "react";
import { Navbar, Nav, NavLink } from "reactstrap";

function MyNavBar() {
  return (
    <React.Fragment>
      <Navbar>
        <Nav className="mr-auto">
          <NavLink className="my-link" href="">
            Calculator
          </NavLink>
          <NavLink className="my-link" href="">
            Objectives
          </NavLink>
          <NavLink className="my-link" href="">
            Assumptions
          </NavLink>
          <NavLink className="my-link" href="">
            CPF rules
          </NavLink>
          <NavLink className="my-link" href="https://www.cpf.gov.sg/Members">
            myCPF
          </NavLink>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}

export default MyNavBar;
