import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/About/HomePage';
import Research from './components/Experience/Research';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navbar, Image, Nav, Container, Row} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class App extends Component {
  render() {
  return (
    <div responsive="true" >
      <Navbar style={{backgroundColor: "black"}} className="nav-bar" expand="lg" bg="black" variant="dark" fixed = "top">
      <Navbar.Brand className="brand" > <NavLink style={{color: "white", textDecoration: 'none' }} exact to="/"> PRERNA RAVI </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
      <Nav className="navbar-options-format">
        <Nav.Link><NavLink style={{color: "#C0C0C0", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "white", textDecoration: 'none' }} exact to="/">About</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#C0C0C0", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "white", textDecoration: 'none' }} exact to="/experience">Experience</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#C0C0C0", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "white", textDecoration: 'none' }} exact to="/research">Research</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#C0C0C0", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "white", textDecoration: 'none' }} exact to="/projects">Projects</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#C0C0C0", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "white", textDecoration: 'none' }} exact to="/skills">Skills</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#C0C0C0", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "white", textDecoration: 'none' }} exact to="/interests">Interests</NavLink></Nav.Link>
      </Nav>
      </Navbar.Collapse>
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
