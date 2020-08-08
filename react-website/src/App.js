import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/About/HomePage';
import Research from './components/Experience/Research';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navbar, Image, Nav, Container, Row} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

class App extends Component {
  render() {
  return (
    <div responsive="true" >
      <Navbar style={{backgroundColor: "black"}} className="nav-bar" expand="lg" bg="black" variant="dark" fixed = "top">
      <Navbar.Brand className="brand" href="/">PRERNA RAVI
      </Navbar.Brand>
      <NavbarToggle/>
      <NavbarCollapse/>
      <Nav className="navbar-options-format">
        <Nav.Link style={{color: "white"}} href="/">About</Nav.Link>
        <Nav.Link style={{color: "white"}} href="/experience">Experience</Nav.Link>
        <Nav.Link style={{color: "white"}} href="/research">Research</Nav.Link>
        <Nav.Link style={{color: "white"}} href="/research">Projects</Nav.Link>
        <Nav.Link style={{color: "white"}} href="/skills">Skills</Nav.Link>
        <Nav.Link style={{color: "white"}} href="/interests">Interests</Nav.Link>
      </Nav>
    </Navbar>
    <Router>
      <div className="App">
      <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/research" component={Research} />
            {/*<Route path="/sign-up" component={SignUp} />*/}
        </Switch>
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
