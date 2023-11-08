import React, { Component } from 'react';
import './App.css';
import HomePage from './components/About/HomePage';
import Research from './components/Research/Research';
import Experience from './components/Experience/Experience';
import Awards from './components/Awards/Awards';
import Publications from './components/Publications/Publications';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navbar, Image, Nav, Container, Row} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import PDF from './Documents/PRERNA_RAVI_CV.pdf'
import ScrollToTop from './ScrollToTop';
class App extends Component {

  render() {
  return (
    <div responsive="true">
      <Navbar collapseOnSelect='true' style={{backgroundColor: "black"}} className="nav-bar" expand="lg" bg="black" variant="dark" fixed = "top">
      <Navbar.Brand className="brand" > <NavLink style={{color: "#f2ebdd", textDecoration: 'none' }} exact to="/"> <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/64px-MIT_logo.svg.png"/>&emsp;PRERNA RAVI </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
      <Nav className="navbar-options-format">
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#E9C46A", textDecoration: 'none' }} exact to="/">About</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#E9C46A", textDecoration: 'none' }} exact to="/experience">Experience</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#E9C46A", textDecoration: 'none' }} exact to="/research">Research</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#E9C46A", textDecoration: 'none' }} exact to="/publications">Publications & Teaching</NavLink></Nav.Link>
        <Nav.Link><NavLink style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#E9C46A", textDecoration: 'none' }} exact to="/awards">Awards</NavLink></Nav.Link>
        <Nav.Link style={{color: "#b3b3b3", textDecoration: 'none' }} activeStyle={{fontWeight: "bold", color: "#E9C46A", textDecoration: 'none' }} href={PDF}>CV</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router>
      <div style={{maxWidth: "100%", overflow: "hidden"}}>
      <ScrollToTop/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/research" component={Research} />
          <Route path="/experience" component={Experience} />
          <Route path="/publications" component={Publications} />
          <Route path="/awards" component={Awards} />
        </Switch>
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
