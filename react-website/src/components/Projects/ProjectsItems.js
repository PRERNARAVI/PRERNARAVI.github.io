import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { AnimationWrapper } from 'react-hover-animation';
import wallpaper from "../../images/home-page-wallpaper.png";
import MSFT from "../../images/MSFT-Project.png";

class ProjectsItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        }
        return (
            <Container  >
                <Row>
                <Row>
                <Col >
                    <a className="card-image" href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "100px", border: "none",
                            borderRadius: "10px"}}>
                        <Card.Img className="card-image" src={MSFT} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </a>
                </Col>
                <Col >
                    <a className="card-image" href="#">
                        <Card className="bg-dark text-white" style={{marginTop: "100px", border: "none"}}>
                        <Card.Img className="card-image" src={wallpaper} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </a>
                </Col>
                </Row>
                <Row>
                <Col >
                    <a className="card-image" href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "30px", border: "none",
                            borderRadius: "10px"}}>
                        <Card.Img className="card-image" src={wallpaper} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </a>
                </Col>
                <Col >
                    <a className="card-image" href="#">
                        <Card className="bg-dark text-white" style={{marginTop: "30px", border: "none"}}>
                        <Card.Img className="card-image" src={wallpaper} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </a>
                </Col>
                </Row>
                <Row>
                <Col >
                    <a className="card-image" href="#">
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "30px", border: "none",
                            borderRadius: "10px"}}>
                        <Card.Img className="card-image" src={wallpaper} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </a>
                </Col>
                <Col >
                    <a className="card-image" href="#">
                        <Card className="bg-dark text-white" style={{marginTop: "30px", border: "none"}}>
                        <Card.Img className="card-image" src={wallpaper} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
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