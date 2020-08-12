import React from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap';
import SignLanguage from "../../images/sign-language-hands.png";
import Callibration from "../../images/Callibration.png";
import CopyCatScreen from "../../images/copy-cat-screen.png";
import UBICOMP from "../../images/ubicomp.png";
import ASL from "../../images/ASL.png";
import Hands from "../../images/hands.png";
import TANDEM from "../../images/TANDEM.jpg";
import Book from "../../images/Book.png";

class ResearchItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        }
        return (
            <Container className="research-container" responsive="true">
            <Container className="sign-langauge-container" responsive="true">
                <Row>
                <Col xs={3}>    
                <Image width="80%"responsive="true" style={{marginTop: "70px", marginLeft: "140px"}} src={UBICOMP} fluid="true"/>         
                <Image width="90%" responsive="true" style={{marginTop: "30px", marginLeft: "130px"}} src={Hands} fluid="true"/>
                <Image width="80%" style={{marginTop: "30px", marginLeft: "140px"}} responsive="true"  src={ASL} fluid="true"/>
                
                
                
                </Col>
                <Col xs={7}>
                <Container className="sign-language-text" responsive="true">
                    <div style={fontFormat} responsive="true">
                        <h3 style={{fontWeight:"medium", fontFamily: "Tahoma, Geneva, sans-serif", marginTop: "0px"}} responsive="true">
                            AMERICAN SIGN LANGUAGE RECOGNITION
                        </h3>
                        <h4 style={{fontWeight:"500", fontFamily: "Tahoma, Geneva, sans-serif"}} responsive="true">
                            Georgia Tech Ubiquitous Computing (UBICOMP) Lab
                        </h4>
                        {/* <h5 responsive="true">
                            <i>January 2019 - Present</i>
                        </h5> */}
                        <br></br>
                        <div responsive="true">
                        I am an undergraduate researcher at the GT UBICOMP Lab
                        advised by <a style={{color: "#E9C46A"}} href="https://www.cc.gatech.edu/home/thad/"><u>Dr. Thad Starner</u></a>. Through the Center for 
                        Accessible Technology in Sign, I am developing an 
                        American Sign Language Recognition System and using 
                        it to create a game, namely <a style={{color: "#E9C46A"}} href="https://www.cc.gatech.edu/home/thad/031_research.htm">
                        <u>CopyCat</u></a>. Copycat is designed 
                        as a framework to collect gesture data for Sign Language 
                        Recognition, using a real time motion capture system and 
                        as a means for deaf children to communicate with their 
                        hearing parents, through the medium of ASL, which we consider 
                        their “native” language.
                        </div>
                        <br></br>
                        <div responsive="true">
                        CopyCat is a game developed in Unity, a cross-platform game engine 
                        using C# as its programming language. I have developed a user-friendly calibration 
                        tool as part of its tutorial modules using an RGB Depth camera.
                        Using this and Computer Vision tools like Microsoft Kinect and Google MediaPipe, I have developed a real-time
                        motion capture system (body, hands & face) for ASL signers. This framework, 
                        iteratively trained using the HTK pipeline and Hidden Markov Models (HMMs) 
                        takes us one step closer to achieving Optimal Sign Language Recognition and has the 
                        immense potential to teach young children ASL 
                        at a tender age, thereby improving the quality of their lives by facilitating 
                        good communication with their hearing parents.
                        </div>
                        <br></br>
                        <div responsive="true">
                            Presentations:  <a style={{color: "#E9C46A"}} href="http://www.undergradresearch.gatech.edu/spring-symposium">
                             <u>Undergraduate Research Symposium at Georgia Tech (2019)</u></a>
                        </div>
                        
                    </div>
                </Container>
                </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container className="tandem-container" responsive="true">
                <Row>
                <Col xs={7}>
                <Container className="sign-language-text" responsive="true">
                    <div style={fontFormat} responsive="true">
                    <h3 style={{fontWeight:"medium", fontFamily: "Tahoma, Geneva, sans-serif", marginTop: "0px"}} responsive="true">
                            ONLINE LEARNING IN UNDERSERVED CONTEXTS
                        </h3>
                        <h4 style={{fontWeight:"500", fontFamily: "Tahoma, Geneva, sans-serif"}} responsive="true">
                            Technology and Design for Empowerment on the Margins (TanDEM) Lab
                        </h4>
                        {/* <h5 responsive="true">
                            <i>January 2019 - Present</i>
                        </h5> */}
                        <br></br>
                        <div responsive="true">
                        I am an undergraduate researcher at the Georgia Tech TanDEM Lab
                        advised by <a style={{color: "#E9C46A"}} href="https://www.nehakumar.org/"><u>Dr. Neha Kumar</u></a>. 
                        I am contributing towards a rich and evolving body of research on the design and development of education technology for 
                        underserved settings in the Global South. With the changing digital landscape, particularly during COVID-19, I am currently investigating 
                        how educational institutions working with underprivileged populations in India are coping with the transition to online learning.
                        </div>
                        <br></br>
                        <div responsive="true">
                        As part of this project, I have undertaken a qualitative study involving remote interviews (including group calls or focus groups) and an online survey with parents, 
                        students, teachers, and administrators from or working with underserved contexts where limited, intermittent, and/or shared access to mobile 
                        or computing devices and the internet has been the norm. 
                        Using these, I am examining which online platforms and sociotechnical infrastructures 
                        are supporting this transition. These results will help me co-design technology interventions to support the sustainable, long-term adoption of online 
                        learning in a post-COVID world, alongside a return to traditional classroom teaching.
                        </div>
                        <br></br>
                        <div responsive="true">
                            Awards:  <a style={{color: "#E9C46A"}} href="http://www.undergradresearch.gatech.edu/content/presidents-undergraduate-research-awards">
                             <u>President's Undergraduate Research Award (PURA) (2020)</u></a>
                        </div>
                        
                    </div>
                </Container>
                </Col>
                <Col xs={3}>     
                <Image width="70%" roundedCircle responsive="true" style={{marginLeft: "150px", marginTop: "80px"}} src={TANDEM} fluid="true"/>         
                
                <Image responsive="true" className="callibration-pic-format" style={{marginLeft: "100px", marginTop: "20px"}} src={Book} fluid="true"/>
                {/*
                <Image responsive="true" className="copy-cat-pic-format" src={CopyCatScreen} fluid="true"/>
                */}
                </Col>
                </Row>
            </Container>
            </Container>
            
        );
    }
}
export default ResearchItems;