import React from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap';
import SignLanguage from "../../images/sign-language-hands.png";
import Callibration from "../../images/Callibration.png";
import CopyCatScreen from "../../images/copy-cat-screen.png";

class ResearchItems extends React.Component{
    render () {
        var fontFormat = {
            fontColor: "white"
        }
        return (
            <Container className="sign-langauge-container" responsive="true">
                <Row>
                <Col xs={4}>
                
                        
                <Image responsive="true" className="asl-pic-format" src={SignLanguage} fluid="true"/>         
                <Image responsive="true" className="callibration-pic-format" src={Callibration} fluid="true"/>
                <Image responsive="true" className="copy-cat-pic-format" src={CopyCatScreen} fluid="true"/>
                </Col>
                <Col xs={6}>
                <Container className="sign-language-text" responsive="true">
                    <div style={fontFormat} responsive="true">
                        <h1 style={{fontWeight:"500"}} responsive="true">
                            American Sign Language Recognition
                        </h1>
                        <h3 responsive="true">
                            Georgia Tech Ubiquitous Computing Lab
                        </h3>
                        <h4 responsive="true">
                            <i>January 2019 - Present</i>
                        </h4>
                        <br></br>
                        <p responsive="true">
                        I am an undergraduate researcher at the GT UBICOMP Lab
                        advised by <a href="https://www.cc.gatech.edu/home/thad/">Dr.Thad Starner</a>. Through the Center for 
                        Accessible Technology in Sign, we are developing an 
                        American Sign Language Recognition System and using 
                        it to create a game, namely <a href="https://www.cc.gatech.edu/home/thad/031_research.htm">
                        CopyCat</a>. Copycat is designed 
                        as a framework to collect gesture data for Sign Language 
                        Recognition, using a real time motion capture system and 
                        as a means for deaf children to communicate with their 
                        hearing parents, through the medium of ASL, which we consider 
                        their “native” language.
                        </p>
                        <p responsive="true">
                        CopyCat is a game developed in Unity, a cross-platform game engine 
                        using C# as its programming language. I have developed a user-friendly calibration 
                        tool as part of its tutorial modules using an RGB Depth camera.
                        Using this tool and Microsoft Kinect, we have developed a real-time
                        motion capture system (body, hands & face) for ASL signers. This framework, 
                        iteratively trained using the HTK pipeline and Hidden Markov Models (HMMs) 
                        takes us one step closer to achieving Optimal Sign Language Recognition and has the 
                        immense potential to teach young children ASL 
                        at a tender age, thereby improving the quality of their lives by facilitating 
                        good communication with their hearing parents.
                        </p>
                        <p responsive="true">
                            Presentations:  <a href="http://www.undergradresearch.gatech.edu/spring-symposium">
                             Undergraduate Research Symposium at Georgia Tech.</a>
                        </p>
                        
                    </div>
                </Container>
                </Col>
                </Row>
            </Container>
        );
    }
}
export default ResearchItems;