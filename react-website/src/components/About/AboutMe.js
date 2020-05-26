import React from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap';
import profile from "../../images/profile-pic.JPG";

class AboutMe extends React.Component{
    render () {
        return (
            <Container className="about-me">
                <Row>
                <Col xs={4}>

                
                <Image responsive="true" className="profile-pic-format" src={profile} fluid="true"/>
                </Col>
                <Col xs={6}>
                <Container className="about-me-text">
                        <h1 style={{fontWeight:"500"}}>
                            <b>PRERNA RAVI</b>
                        </h1>
                    <div style={{fontWeight:"500"}}>
                        Hi! My name is Prerna Ravi and I am an undergraduate student 
                        at <a href="https://www.gatech.edu/" >Georgia Institute of Technology</a> majoring in Computer Science with 
                        concentrations in Human Computer Interaction and Artificial Intelligence. 
                        I am keen on applying theory into practice by developing tangible solutions 
                        that impact society and the global community. I also aspire to not only witness, 
                        but actively participate in the confluence of technology and society and scale it 
                        up from prototyping at a local level. 
                        
                    </div>
                </Container>
                </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutMe;