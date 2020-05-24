import React from 'react';
import {Navbar, Image, Nav, Container} from 'react-bootstrap';
import wallpaper from "../images/home-page-wallpaper.png";
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import {TextTypeWriter} from 'react-text-effects';
import Typewriter from 'typewriter-effect';

class HomePage extends React.Component {

  render() {
    var background = {backgroundSize : 'cover'};
    var textStyle = {
      position: 'absolute', 
      top: '40%', 
      left: '25%',
      color: 'white',
      fontSize: 60,
      
    };
    var writeStyle = {
        position: 'absolute', 
        top: '50%',
        left: '30%',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 60,
        
      };
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
            <Image style={background} responsive className="wallpaper-format" src={wallpaper} fluid="true"/>
            <div className = "wallpaper-text">
            <h1 style={textStyle}>Hi! My name is Prerna, I am a </h1>
            <h1 style={writeStyle} > 
            <Typewriter
                options={{
                    strings: ['Programmer.', 'Researcher.','Teaching Assistant.','Student.'],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30
                }}
            />
            </h1>
            </div>
            
           
        </div>
    );
  }
}

export default HomePage;