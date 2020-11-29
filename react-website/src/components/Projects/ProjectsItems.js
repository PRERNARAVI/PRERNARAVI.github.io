import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import MSFT from "../../images/MSFT-Project.jpg";
import Journaling from "../../images/Journaling-Project.jpg";
import Library from "../../images/Library.jpeg";
import Connect from "../../images/Connect-Project.jpeg";
import Drop from "../../images/Drop.jpg";
import ND from "../../images/ND.jpg";
import Popup from "reactjs-popup";
import BlackOne from "../../images/BlackOne.jpg";
import Black from "../../images/black.jpg";
import PopUpBg from "../../images/PopUpBg.jpg";

class ProjectsItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        };
        var background = {
            backgroundPosition: "cover",
            width: '100%',
            height: "100%",
        };
        return (
            <Container  >
                <Row>
                <Row>
                <Col md={6}>
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}>      
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
                    </a>} modal closeOnDocumentClick>
                    
                    <Container style={{height: "60vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <p style={{
                                    fontSize: 18,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", position: "center"}}>
                                • Designed and developed a cross platform application that empowers kids, students and teachers in underserved communities with the ability to connect, read and learn virtually both online and offline as part of the Microsoft Global Hackathon 2020.
                                • Built an accessible and fluid user interface using React and Node.js that gives diverse users the ability to search and filter from a free book library sourced from multiple open source platforms including Gutenberg using different criteria, download and favorite books, create collections and review recommendations from instructors with multi language support.
                                • Extracted detailed information about every book using Azure Cognitive Search, built Rest APIs using Python Flask and constructed Cosmos DB (NoSQL) databases to store user preferences, saved collections and recommendations.
                                • Deployed the application to Microsoft Azure using CI/CD pipelines and successfully integrated it into Microsoft Teams, to be shipped and used by over 75 million daily users.
                                </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    
                </Popup>
                     
                    
                </Col>
                <Col md={6}>
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
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
                    </a>} modal closeOnDocumentClick>
                    <Container style={{height: "60vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <p style={{
                                    fontSize: 18,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", position: "center"}}>
                                • Designed and developed a cross platform application that empowers kids, students and teachers in underserved communities with the ability to connect, read and learn virtually both online and offline as part of the Microsoft Global Hackathon 2020.
                                • Built an accessible and fluid user interface using React and Node.js that gives diverse users the ability to search and filter from a free book library sourced from multiple open source platforms including Gutenberg using different criteria, download and favorite books, create collections and review recommendations from instructors with multi language support.
                                • Extracted detailed information about every book using Azure Cognitive Search, built Rest APIs using Python Flask and constructed Cosmos DB (NoSQL) databases to store user preferences, saved collections and recommendations.
                                • Deployed the application to Microsoft Azure using CI/CD pipelines and successfully integrated it into Microsoft Teams, to be shipped and used by over 75 million daily users.
                                </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>

                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}>  
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.8}}
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
                    </a>} modal closeOnDocumentClick>
                    <Container style={{height: "60vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <p style={{
                                    fontSize: 18,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", position: "center"}}>
                                • Designed and developed a cross platform application that empowers kids, students and teachers in underserved communities with the ability to connect, read and learn virtually both online and offline as part of the Microsoft Global Hackathon 2020.
                                • Built an accessible and fluid user interface using React and Node.js that gives diverse users the ability to search and filter from a free book library sourced from multiple open source platforms including Gutenberg using different criteria, download and favorite books, create collections and review recommendations from instructors with multi language support.
                                • Extracted detailed information about every book using Azure Cognitive Search, built Rest APIs using Python Flask and constructed Cosmos DB (NoSQL) databases to store user preferences, saved collections and recommendations.
                                • Deployed the application to Microsoft Azure using CI/CD pipelines and successfully integrated it into Microsoft Teams, to be shipped and used by over 75 million daily users.
                                </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                <Col md={6}>
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
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
                    </a>} modal closeOnDocumentClick>
                    <Container style={{height: "60vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <p style={{
                                    fontSize: 18,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", position: "center"}}>
                                • Designed and developed a cross platform application that empowers kids, students and teachers in underserved communities with the ability to connect, read and learn virtually both online and offline as part of the Microsoft Global Hackathon 2020.
                                • Built an accessible and fluid user interface using React and Node.js that gives diverse users the ability to search and filter from a free book library sourced from multiple open source platforms including Gutenberg using different criteria, download and favorite books, create collections and review recommendations from instructors with multi language support.
                                • Extracted detailed information about every book using Azure Cognitive Search, built Rest APIs using Python Flask and constructed Cosmos DB (NoSQL) databases to store user preferences, saved collections and recommendations.
                                • Deployed the application to Microsoft Azure using CI/CD pipelines and successfully integrated it into Microsoft Teams, to be shipped and used by over 75 million daily users.
                                </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
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
                    </a>} modal closeOnDocumentClick>
                    <Container style={{height: "60vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <p style={{
                                    fontSize: 18,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", position: "center"}}>
                                • Designed and developed a cross platform application that empowers kids, students and teachers in underserved communities with the ability to connect, read and learn virtually both online and offline as part of the Microsoft Global Hackathon 2020.
                                • Built an accessible and fluid user interface using React and Node.js that gives diverse users the ability to search and filter from a free book library sourced from multiple open source platforms including Gutenberg using different criteria, download and favorite books, create collections and review recommendations from instructors with multi language support.
                                • Extracted detailed information about every book using Azure Cognitive Search, built Rest APIs using Python Flask and constructed Cosmos DB (NoSQL) databases to store user preferences, saved collections and recommendations.
                                • Deployed the application to Microsoft Azure using CI/CD pipelines and successfully integrated it into Microsoft Teams, to be shipped and used by over 75 million daily users.
                                </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                <Col md={6}>
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "40px", marginBottom: "40px", border: "none",
                            borderRadius: "10px", height: "40vh"}}>
                        <div className="card-image" >
                            <Card.Img style={{height: "40vh", opacity: 0.8}}
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
                    </a>} modal closeOnDocumentClick>
                    <Container style={{height: "60vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <p style={{
                                    fontSize: 18,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", position: "center"}}>
                                • Designed and developed a cross platform application that empowers kids, students and teachers in underserved communities with the ability to connect, read and learn virtually both online and offline as part of the Microsoft Global Hackathon 2020.
                                • Built an accessible and fluid user interface using React and Node.js that gives diverse users the ability to search and filter from a free book library sourced from multiple open source platforms including Gutenberg using different criteria, download and favorite books, create collections and review recommendations from instructors with multi language support.
                                • Extracted detailed information about every book using Azure Cognitive Search, built Rest APIs using Python Flask and constructed Cosmos DB (NoSQL) databases to store user preferences, saved collections and recommendations.
                                • Deployed the application to Microsoft Azure using CI/CD pipelines and successfully integrated it into Microsoft Teams, to be shipped and used by over 75 million daily users.
                                </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                </Row>
                </Row>
            </Container>
            
        );
    }
}
export default ProjectsItems;