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
      <Navbar collapseOnSelect='true' style={{backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", borderBottom: "1px solid #eee"}} className="nav-bar" expand="lg" variant="light" fixed = "top">
        <Container style={{maxWidth: "1250px", margin: "0 auto"}}>
          <Navbar.Brand className="brand" >
            <NavLink style={{color: "#2D3436", textDecoration: 'none', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 700, letterSpacing: 1}} exact to="/">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/64px-MIT_logo.svg.png" style={{verticalAlign: 'middle'}}/>&emsp;PRERNA RAVI
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
            <Nav className="navbar-options-format">
              <Nav.Link>
                <NavLink
                  style={{color: "#2D3436", textDecoration: 'none', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, fontSize: 18}}
                  activeStyle={{fontWeight: 700, color: "#3A1EB6", background: 'none'}}
                  exact to="/"
                >About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={{color: "#2D3436", textDecoration: 'none', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, fontSize: 18}}
                  activeStyle={{fontWeight: 700, color: "#3A1EB6", background: 'none'}}
                  exact to="/experience"
                >Experience</NavLink>
              </Nav.Link>
              {/* <Nav.Link>
                <NavLink
                  style={{color: "#2D3436", textDecoration: 'none', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, fontSize: 18}}
                  activeStyle={{fontWeight: 700, color: "#3A1EB6", borderBottom: "2.5px solid #3A1EB6", background: 'none'}}
                  exact to="/research"
                >Research</NavLink>
              </Nav.Link> */}
              <Nav.Link>
                <NavLink
                  style={{color: "#2D3436", textDecoration: 'none', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, fontSize: 18}}
                  activeStyle={{fontWeight: 700, color: "#3A1EB6", background: 'none'}}
                  exact to="/research"
                >Research</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={{color: "#2D3436", textDecoration: 'none', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, fontSize: 18}}
                  activeStyle={{fontWeight: 700, color: "#3A1EB6", background: 'none'}}
                  exact to="/awards"
                >Awards</NavLink>
              </Nav.Link>
              <Nav.Link
                style={{color: "#2D3436", textDecoration: 'none', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, fontSize: 18}}
                href={PDF}
              >CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <div style={{maxWidth: "100%", overflow: "hidden"}}>
        <ScrollToTop/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route path="/research" component={Research} /> */}
            <Route path="/experience" component={Experience} />
            <Route path="/research" component={Publications} />
            <Route path="/awards" component={Awards} />
          </Switch>
        </div>
      </Router>
      {/* Sitewide Footer */}
      <footer style={{
        width: '100%',
        background: 'white',
        borderTop: '1px solid #ececec',
        padding: '28px 0 24px 0',
        textAlign: 'center',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: 14,
        color: '#2D3436',
        fontWeight: 400,
        letterSpacing: 0.1,
        marginTop: 'auto',
        zIndex: 10
      }}>
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
          © 2025 Prerna Ravi. All rights reserved.
        </div>
      </footer>
    </div>
  );
  }
}

export default App;
