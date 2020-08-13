import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import MSFT from "../../images/MSFT-Project.png";
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
                <Col xs={6}>
                    <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh"}}
                                 src={Library} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                    
                </Col>
                <Col xs={6}>
                    <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" href="#">
                            <Card.Img style={{height: "40vh"}}
                                src={ND} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                </Row>
                <Row>
                <Col >
                    <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh"}}
                                 src={Journaling} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                <Col >
                    <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh"}}
                                 src={Connect} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                </Row>
                <Row>
                <Col >
                    <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh"}}
                                 src={Drop} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </div>
                        </Card>
                    </a>
                </Col>
                <Col >
                    <a href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh"}}
                                 src={Connect} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
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