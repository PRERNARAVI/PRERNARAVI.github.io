import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/About/HomePage';
import Research from './components/Research/Research';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Interests from './components/Interests/Interests';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navbar, Image, Nav, Container, Row} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class App extends Component {
  render() {
  return (
    <div responsive="true" >
      <Navbar style={{backgroundColor: "black"}} className="nav-bar" expand="lg" bg="black" variant="dark" fixed = "top">
      <Navbar.Brand className="brand" > <NavLink style={{color: "#f2ebdd", textDecoration: 'none' }} exact to="/"> PRERNA RAVI </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
      <Nav className="navbar-options-format">
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#f2ebdd", textDecoration: 'none' }} exact to="/">About</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#f2ebdd", textDecoration: 'none' }} exact to="/experience">Experience</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#f2ebdd", textDecoration: 'none' }} exact to="/research">Research & Publications</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#f2ebdd", textDecoration: 'none' }} exact to="/projects">Projects</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#f2ebdd", textDecoration: 'none' }} exact to="/skills">Awards</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#f2ebdd", textDecoration: 'none' }} exact to="/interests">CV</NavLink></Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router>
      <div className="App">
      <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/research" component={Research} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/interests" component={Interests} />
      </Switch>
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
