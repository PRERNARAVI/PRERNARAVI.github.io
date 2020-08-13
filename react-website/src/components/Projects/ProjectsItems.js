import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import MSFT from "../../images/MSFT-Project.jpg";
import Journaling from "../../images/Journaling-Project.jpg";
import Library from "../../images/Library.jpeg";
import Connect from "../../images/Connect-Project.jpeg";
import Drop from "../../images/Drop.jpg";
import ND from "../../images/ND.jpg";

class ProjectsItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        }
        return (
            <Container  >
                <Row>
                <Row>
                <Col md={6}>
                    <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.65}}
                                 src={Library} alt="Card image" />
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        margin: "auto",
                                        paddingTop: "30px",
                                    }}>SCHOOL LIBRARY HUB <br></br>
                                    FOR <br></br>MICROSOFT TEAMS
                                </Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                    
                </Col>
                <Col md={6}>
                <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.65}}
                                 src={ND} alt="Card image" />
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        margin: "auto",
                                        paddingTop: "80px",
                                    }}>understaNDing <br></br>
                                    NEURODIVERISTY
                                </Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.7}}
                                 src={MSFT} alt="Card image" />
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        margin: "auto",
                                        paddingTop: "30px",
                                    }}>MICROSOFT DEEP DIVE<br></br>
                                    COMPUTER SCIENCE <br></br>WORKSHOP
                                </Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                <Col md={6}>
                <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.9}}
                                 src={Journaling} alt="Card image" />
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        margin: "auto",
                                        paddingTop: "30px",
                                    }}>DAYBOOK:<br></br>
                                    MENTAL HEALTH <br></br>JOURNALING APP
                                </Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px",marginBottom: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.8}}
                                 src={Connect} alt="Card image" />
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        margin: "auto",
                                        paddingTop: "80px",
                                    }}>CONNECT ME: <br></br>
                                    CHATTING PLATFORM
                                </Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                <Col md={6}>
                <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", marginBottom: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.6}}
                                 src={Drop} alt="Card image" />
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        margin: "auto",
                                        paddingTop: "40px",
                                    }}>DROP: <br></br>
                                    WATER FOUNTAIN <br></br> LOCATION APP
                                </Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                </Row>
                </Row>
            </Container>
            
        );
    }
}
export default ProjectsItems;