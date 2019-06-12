import "../styles/MyNavBar.css";
import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";

function MyNavBar() {
  return (
    <React.Fragment>
      <Navbar>
        <NavbarBrand href="">Home</NavbarBrand>
        <Nav className="mr-auto">
          <NavLink className="my-link" href="">
            Objectives
          </NavLink>
          <NavLink className="my-link" href="">
            Assumptions
          </NavLink>
          <NavLink className="my-link" href="">
            CPF rules
          </NavLink>
          <NavLink className="my-link" href="">
            myCPF
          </NavLink>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}

export default MyNavBar;
