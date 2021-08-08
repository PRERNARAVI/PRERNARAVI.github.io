import React, {useState} from 'react';
import {Col, Image, Row, Container, Card, Modal, Button} from 'react-bootstrap';
import Library from "../../images/Library.jpeg";
import ND from "../../images/ND.jpg";
import CHI from "../../images/CHI_Logo.png";
import COC2021 from "../../images/CocAward2021.jpeg";
import COC2020 from "../../images/CocAward2020.jpeg";
import Adobe from "../../images/Adobe.jpeg";
import PURA from "../../images/PURA.jpeg";
import { FaAward } from 'react-icons/fa';
import {ZoomIn} from 'react-animation-wrapper';
import BlackOne from "../../images/BlackOne.jpg";
import UBICOMP from "../../images/ubicomp.png";
import ASL from "../../images/ASL.png";
import Hands from "../../images/hands.png";
import TANDEM from "../../images/TANDEM.jpg";
import Book from "../../images/Book.png";

function ASLModal(props) {
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
    }
    return (
      <Modal
        {...props}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        scrollable
        style={{marginTop: "72px", height: "90vh"}}
      >
        <Modal.Header closeButton style={{backgroundColor: "black", border: 0}}>
          <Modal.Title 
            id="contained-modal-title-vcenter" style={{color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif", fontSize: 22, textAlign: "center"}}>
            CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable style={{width: "100%", 
        backgroundColor: "black",
        backgroundSize: "100%",
        color: "#f2ebdd",
        fontSize: 17,
        marginTop: 0,
        backgroundImage: "url(" + BlackOne + ")"}}>
        <Container className="research-container" responsive="true">
        <Row>
                <Container responsive="true">
                    <br/>
                    <div style={fontFormat} responsive="true">
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
                        <br/>
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
                </Row>
        <br></br>
        </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", border: 0}}>
          <Button style={{backgroundColor: "black", border: 0, color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif"}} onClick={props.onHide}>Close Project</Button>
        </Modal.Footer>
      </Modal>
    );
  }

    function TandemModal(props) {
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
    }
    return (
      <Modal
        {...props}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        scrollable
        style={{marginTop: "72px", height: "90vh"}}
      >
        <Modal.Header closeButton style={{backgroundColor: "black", border: 0}}>
          <Modal.Title 
            id="contained-modal-title-vcenter" style={{color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif", fontSize: 22, textAlign: "center"}}>
            The COVID-19 Pandemic Shift to Remote Learning under Resource Constraints
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable style={{width: "100%", 
        backgroundColor: "black",
        backgroundSize: "100%",
        color: "#f2ebdd",
        fontSize: 17,
        marginTop: 0,
        backgroundImage: "url(" + BlackOne + ")"}}>
        <Container className="research-container" responsive="true">
        <Row>
                <Container responsive="true">
                    <br/>
                    <div style={fontFormat} responsive="true">
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
                </Row>
        <br></br>
        </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", border: 0}}>
          <Button style={{backgroundColor: "black", border: 0, color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif"}} onClick={props.onHide}>Close Project</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Research() {
    const [modalShowASL, setModalShow, modalShowTandem] = React.useState(false);

    return (
        <Container >
            <Row>
            {/** ASL ITEM*/}
            <Col md={6}>
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShow(true)}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", border: "none",
                        borderRadius: "10px", height: "80vh"}}>
                    <div className="research-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 20,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{height: "60vh"}}
                             src="https://www.verywellhealth.com/thmb/_u2YBR9a2OcAihIAcTGV8wsrmlY=/2556x1917/smart/filters:no_upscale()/gettyimages-495596293-5a2192db5b6e24001a612abe.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            GT Ubiquitous Computing (Ubicomp) Lab <br/>
                            Advisor: Dr. Thad Starner
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A"}} onClick={() => setModalShow(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>

            <ASLModal
        show={modalShowASL}
        onHide={() => setModalShow(false)}
            />
        <Col md={6}>
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShow(true)}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", border: "none",
                        borderRadius: "10px", height: "80vh"}}>
                    <div className="research-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 20,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;The COVID-19 Pandemic Shift to Remote Learning under Resource Constraints
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{height: "60vh", boxShadow: "60px 60px 100px 100px #000000;", border: 0}}
                             src="https://static.reuters.com/resources/r/?m=02&d=20200320&t=2&i=1505762610&r=LYNXMPEG2J0KV&w=800" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            GT Technology & Design for Empowerment on the Margins (TanDEm) Lab <br/>
                            Advisor: Dr. Neha Kumar
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A"}} onClick={() => setModalShow(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>

            <TandemModal
        show={modalShowTandem}
        onHide={() => setModalShow(false)}
      />
            </Row>
            <Row>
            <Col md={4}>
                <a role="button" style={{cursor: "pointer"}}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", border: "none",
                        borderRadius: "10px", height: "50vh"}}>
                    <div className="award-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 17,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "0.7"}}>
                                <FaAward size='35px' />
                                &ensp;President's Undergraduate Research Award 2020
                            </p>
                        </Card.Header>
                        <div style={{backgroundColor: 'white', width: "90%", padding: 'center'}}>
                        <Card.Img style={{height: "20vh", width: "60%", backgroundColor: "white"}}
                             src={PURA} alt="Card image" />
                        </div>
                            <Card.Text style={{fontSize: 14, margin: '10px'}}>
                            Awarded the President's Undergraduate Research Award at Georgia Tech for the year 2020 for 
                            conducting research at the Technology and Design for Empowerment on the Margins Lab (TanDEm) 
                            under Dr. Neha Kumar.
                            </Card.Text>
                            <Card.Footer>[ July 2020 ]</Card.Footer>

                    </div>               
                    </Card>
                </a>   
            </Col>
            <Col md={4}>
                <a role="button" style={{cursor: "pointer"}}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", border: "none",
                        borderRadius: "10px", height: "50vh"}}>
                    <div className="award-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 17,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "0.7"}}>
                                <FaAward size='35px' />
                                &ensp;COC Outstanding Sophomore Award
                            </p>
                        </Card.Header>
                        <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
                             src={COC2020} alt="Card image" />
                            <Card.Text style={{fontSize: 14, margin: '10px'}}>
                            Given this prestigious award from the College of Computing at Georgia Tech 
                            for the academic year 2019-2020 based on exemplary GPA, Research, Teaching 
                            and Demonstration of Leadership in the realm of Computer Science.
                            </Card.Text>
                            <Card.Footer>[ April 2020 ]</Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>
            <Col md={4}>
                <a role="button" style={{cursor: "pointer"}}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", border: "none",
                        borderRadius: "10px", height: "50vh"}}>
                    <div className="award-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 17,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "0.7"}}>
                                <FaAward size='35px' />
                                &ensp;Winner - CHI Student Research Competition 2021
                            </p>
                        </Card.Header>
                        <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
                             src={CHI} alt="Card image" />
                            <Card.Text style={{fontSize: 14, margin: '10px'}}>
                            Awarded the First Place at the ACM CHI Student Research Competition for the year 2021 for 
                            the research paper - <i>"CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire 
                            Language Skills."</i>
                            </Card.Text>
                            <Card.Footer>[ May 2021 ]</Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>
            </Row>
        </Container>
        
    );
}
class ResearchItems extends React.Component{
    render () {
        return (
        <Research />
        );
        
    }
}
export default ResearchItems;