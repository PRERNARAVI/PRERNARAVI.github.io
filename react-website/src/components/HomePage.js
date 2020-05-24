import React from 'react';
import {Navbar, Image, Nav, Container} from 'react-bootstrap';
import wallpaper from "../images/home-page-wallpaper.jpg";
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

class HomePage extends React.Component {

  render() {
    return(
        <div>
        <Navbar className="nav-bar" expand="lg" bg="dark" variant="dark" fixed = "top">
          <Navbar.Brand className="brand" href="#home">PRERNA RAVI</Navbar.Brand>
          <NavbarToggle/>
          <NavbarCollapse/>
          <Nav className="navbar-options-format">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#research">Research & Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#interests">Interests</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
            <Image className="wallpaper-format" src={wallpaper} fluid="true"/>
        </div>
    );
  }
}

export default HomePage;