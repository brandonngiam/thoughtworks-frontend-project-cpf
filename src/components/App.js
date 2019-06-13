import React from "react";
import "../styles/App.css";
import CPFCalculator from "./CPFCalculator";
import ObjectivesPage from "./ObjectivesPage";
import { Navbar, Nav, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar>
            <Nav>
              <Link className="my-link" to="/">
                Home
              </Link>
              <Link className="my-link" to="/objective">
                Objectives
              </Link>
              {/* <NavLink className="my-link" href="">
              Assumptions
            </NavLink>
            <NavLink className="my-link" href="">
              CPF rules
            </NavLink>
            <NavLink className="my-link" href="https://www.cpf.gov.sg/Members">
              myCPF
            </NavLink> */}
            </Nav>
          </Navbar>
          <main>
            <Route exact path="/" component={CPFCalculator} />>
            <Route exact path="/objective" component={ObjectivesPage} />>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
