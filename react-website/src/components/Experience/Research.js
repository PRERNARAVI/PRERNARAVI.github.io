import React from 'react';
import {Navbar, Image, Nav, Container, Row} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import ResearchWallpaper from "../../images/research-wallpaper.jpg";
import ResearchItems from './ResearchItems';

class Research extends React.Component {

    render() {
        var background = {
            marginTop: 60,
            marginRight: 0,
            marginLeft: 0,
            backgroundSize: 'cover',
            position: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '102%',
            
        };


        return (
        <div responsive="true">
           
                <Navbar className="nav-bar" expand="lg" bg="dark" variant="dark" fixed = "top">
                    <Navbar.Brand className="brand" href="/">PRERNA RAVI:  Aspire to Inspire
                    </Navbar.Brand>
                    <NavbarToggle/>
                    <NavbarCollapse/>
                    <Nav className="navbar-options-format">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/experience">Experience</Nav.Link>
                        <Nav.Link href="/research">Research & Projects</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/interests">Interests</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            
            <Row>
                
                <Image style={background} responsive="true" className="wallpaper-format" src={ResearchWallpaper} fluid="true"/>

                <ResearchItems/>
            </Row>


            
        </div>
        );
    }
}
export default Research;
