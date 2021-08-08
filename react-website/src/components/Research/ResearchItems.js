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

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Research() {
    const [modalShow, setModalShow] = React.useState(false);
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
    }

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
                            <p style={{lineHeight: "1.5"}}>
                                &ensp;CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img 
                             src="https://www.verywellhealth.com/thmb/_u2YBR9a2OcAihIAcTGV8wsrmlY=/2556x1917/smart/filters:no_upscale()/gettyimages-495596293-5a2192db5b6e24001a612abe.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Georgia Tech Ubiquitous Computing Lab <br/>
                            Advisor: Dr. Thad Starner
                            </Card.Text>
                            <Card.Footer>[ April 2021 ]</Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>

            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

            <Col md={6}>
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
                            <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                <FaAward size='35px' />
                                &ensp;Adobe Research Women in Technology Scholarship
                            </p>
                        </Card.Header>
                        <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
                             src={Adobe} alt="Card image" />
                            <Card.Text style={{fontSize: 14, margin: '10px'}}>
                            Awarded this scholarship of $10,000 USD from Adobe Research for the year 
                            2021 based on academic and research achievements from across undergraduate and 
                            gradute students in both the United States and Canada.
                            </Card.Text>
                            <Card.Footer>[ Feb 2021 ]</Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>
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