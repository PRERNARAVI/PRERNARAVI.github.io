import React, {useState} from 'react';
import {Col, Image, Row, Container, Card, Modal, Button} from 'react-bootstrap';
import Library from "../../images/Library.jpeg";
import ND from "../../images/ND.jpg";
import CHI from "../../images/CHI_Logo.png";
import COC2021 from "../../images/CocAward2021.jpeg";
import COC2020 from "../../images/CocAward2020.jpeg";
import Adobe from "../../images/Adobe.jpeg";
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
    <div onClick={e => e.stopPropagation()}>
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
      </div>
    );
  }

function TandemModal(props) {
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
    }
    return (
    <div onClick={e => e.stopPropagation()}>
      <Modal
        {...props}
        size="xl"
        keyboard
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter-two"
        scrollable
        style={{marginTop: "72px", height: "90vh"}}
      >
        <Modal.Header closeButton style={{backgroundColor: "black", border: 0}}>
          <Modal.Title 
            id="contained-modal-title-vcenter-two" style={{color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif", fontSize: 22, textAlign: "center"}}>
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
      </div>
    );
  }


function Research() {
    const [modalShowASL, setModalShowASL] = React.useState(false);
    const [modalShowTandem, setModalShowTandem] = React.useState(false);

    return (
        <Container style={{marginLeft: "60px"}}>
            <Row style={{marginRight: "0px"}}>
            {/** *********************************ASL ITEM************** */}
            <Col md={9.5} style={{backgroundColor: "red"}}>
            <Row>
            <Col >
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowASL(true)}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "70vh", width: "30vw"}}>
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
                        <Card.Img style={{height: "40vh"}}
                             src="https://www.verywellhealth.com/thmb/_u2YBR9a2OcAihIAcTGV8wsrmlY=/2556x1917/smart/filters:no_upscale()/gettyimages-495596293-5a2192db5b6e24001a612abe.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Thad Starner <br/>
                            GT Ubiquitous Computing (Ubicomp) Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A"}} onClick={() => setModalShowASL(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                    <ASLModal
                        show={modalShowASL}
                        onHide={() => setModalShowASL(false)}
                    />
                </a>  
            </Col>
            {/** *********************************TANDEM ITEM************** */}
            <Col >
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowTandem(true)}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", border: "none",
                        borderRadius: "10px", height: "70vh", width: "30vw"}}>
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
                        <Card.Img style={{height: "41vh", boxShadow: "60px 60px 100px 100px #000000;", border: 0}}
                             src="https://static.reuters.com/resources/r/?m=02&d=20200320&t=2&i=1505762610&r=LYNXMPEG2J0KV&w=800" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Neha Kumar<br/>
                            GT Technology & Design for Empowerment on the Margins (TanDEm) Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A"}} onClick={() => setModalShowTandem(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                    <TandemModal
                        show={modalShowTandem}
                        onHide={() => setModalShowTandem(false)}
                    />
                </a>  
            </Col>
            </Row>

            {/** ROW 2 */}

            <Row style={{marginTop: "-60px", paddingBottom: "50px"}} >

             {/** *********************************CAT ITEM************** */}   
            <Col >
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowASL(true)}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "70vh", width: "30vw"}}>
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
                                &ensp;Co-Designing Parent-Education ICTs with Hispanic Immigrants and Education System
                            </p>
                        </Card.Header>
                       
                        <ZoomIn >
                        <Card.Img style={{height: "45vh", opacity: "0.55"}}
                             src="http://marisolvillacres.website/images/research/familia.png" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Betsy Disalvo <br/>
                            GT Culture and Technology (CAT) Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A"}} onClick={() => setModalShowASL(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>

            <ASLModal
        show={modalShowASL}
        onHide={() => setModalShowASL(false)}
            />
        <Col >
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowTandem(true)}>      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "120px", border: "none",
                        borderRadius: "10px", height: "70vh", width: "30vw"}}>
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
                                &ensp;Avanti Fellows - Ledby Girls' Leadership and Mentorship Program
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{height: "42vh", boxShadow: "60px 60px 100px 100px #000000;", border: 0, opacity: "0.55"}}
                             src="https://www.brookings.edu/wp-content/uploads/2017/09/cue_reaching-for-the-sky_001.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Neha Kumar<br/>
                            GT Technology & Design for Empowerment on the Margins (TanDEm) Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A"}} onClick={() => setModalShowTandem(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                    <TandemModal
                        show={modalShowTandem}
                        onHide={() => setModalShowTandem(false)}
                    />
                </a>  
            </Col>
            </Row>


            {/**Insert Here */}

            </Col>

            
       <Col md='auto' style={{marginTop: "100px", marginLeft: "40px", flex: "0.5"}}>
            <Container style={{backgroundColor: "black", marginTop: "20px", height: "149vh", width: "250%"}}>
            <br/>
            <div style={{fontSize: 22, color: "#E9C46A"}}>Publications</div>
            <br/>
            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", fontSize: 17}}>CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills</p>
            <p style={{color: "#f2ebdd", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>Dhruva Bansal, <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Matthew So, Pranay Agrawal, Ishan Chadha, Ganesh Murugappan, and Colby Duke (Advisor: Dr. Thad Starner)</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>CHI 2021</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}><b>Winner - CHI Student Research Competition</b></p>

            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", borderTop: "2px dotted #E9C46A", fontSize: 17}}>
            <div style={{marginTop: "10px"}}>The Pandemic Shift to Remote Learning under Resource Constraints</div></p>
            <p style={{color: "#f2ebdd", fontSize: 15, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Azra Ismail, and Neha Kumar</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>CSCW 2021
            </p>

            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", borderTop: "2px dotted #E9C46A", fontSize: 17}}>
            <div style={{marginTop: "10px"}}>Leveraging AlphaPose as a 2-D Pose Estimator for American Sign Language Recognition</div></p>
            <p style={{color: "#f2ebdd", fontSize: 15, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi</b> (Advisor: Dr. Thad Starner)</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>Bachelor's Thesis
            </p>
            <div style={{fontSize: 20, color: "#E9C46A", borderTop: "2px dotted #E9C46A"}}><br/>Presentations</div>
            <br/>
            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", fontSize: 17}}>
            <div style={{marginTop: "10px"}}>CopyCat: Intuitive Calibration and Data Collection Procedures for ASL Recognition using Azure Kinect</div></p>
            <p style={{color: "#f2ebdd", fontSize: 15, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi </b>and Thad Starner</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>Undergraduate Research Symposium at Georgia Tech 2019
            </p>
            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", fontSize: 17, borderTop: "2px dotted #E9C46A"}}>
            <div style={{marginTop: "10px"}}>CopyCat: Pose Estimation for ASL Recognition using OpenPose and Microsoft Kinect</div></p>
            <p style={{color: "#f2ebdd", fontSize: 15, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi </b>, Peter McAughan, Theo Panagiotopoulos, Dhruva Bansal, and Thad Starner</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>Georgia Tech GVU Center Research Showcase 2019
            </p>
            {/* <br/>
            <div style={{fontSize: 20, color: "#E9C46A"}}>Presentations</div> */}
            </Container>
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