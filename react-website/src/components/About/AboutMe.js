import React from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap';
import profile from "../../images/profile-pic.JPG";

class AboutMe extends React.Component{
    render () {
        return (
            <Container className="about-me">
                <Col xs={5}>

                
                <Image responsive className="profile-pic-format" src={profile} fluid="true"/>
                </Col>
            </Container>
        );
    }
}
export default AboutMe;