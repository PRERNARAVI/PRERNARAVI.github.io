import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import MSFT from "../../images/MSFT-Project.jpg";
import Journaling from "../../images/Journaling-Project.jpg";
import Library from "../../images/Library.jpeg";
import SchoolLibrary from "../../images/SchoolLibrary.png";
import Connect from "../../images/Connect-Project.jpeg";
import Drop from "../../images/Drop.jpg";
import ND from "../../images/ND.jpg";
import NDDiversity from "../../images/NDDiversity.png";
import Popup from "reactjs-popup";
import BlackOne from "../../images/BlackOne.jpg";
import Black from "../../images/black.jpg";
import PopUpBg from "../../images/PopUpBg.jpg";
import ConnectSecond from "../../images/Connect.png";
import DropSecond from "../../images/DropSecond.png"
import DaybookScreens from "../../images/DaybookScreens.png"
import Deep from "../../images/Deep.png"
import {ZoomIn} from 'react-animation-wrapper';

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
            <Container style={{textAlign: "center"}}>
                <Row style={{marginTop: "120px", paddingBottom: "60px"}}>
                <Col >
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "20px", border: "none",
                            borderRadius: "10px", height: "40vh", width: "36vw"}}>
                        <div className="card-image" >
                            <ZoomIn>
                            <Card.Img style={{height: "40vh", opacity: 0.65}}
                                 src={Library} alt="Card image" />
                            </ZoomIn>
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        paddingTop: "50px"
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
                    
                    <Container style={{height: "70vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <h4 style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 20, color: "#E9C46A"}}>School Library Hub for Microsoft Teams</h4>
                                        <br/>
                                <Row>
                                
                                
                                <div style={{
                                    fontSize: 15,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", textAlign: "left"}}>
                                        
                                        <Image width="50%" src={SchoolLibrary} style={{float: "right", paddingLeft: "5px", paddingTop: "10px"}}/>
                                        
                                    
                                • Designed and developed a cross platform application that empowers kids, students and teachers in underserved communities with the ability to connect, read and learn virtually both online and offline as part of the Microsoft Global Hackathon 2020.<br/><br/>
                                • Built an accessible and fluid user interface using React and Node.js that gives diverse users the ability to search and filter from a free book library sourced from multiple open source platforms including Gutenberg using different criteria, download and favorite books, create collections and review recommendations from instructors with multi language support.<br/><br/>
                                • Extracted detailed information about every book using Azure Cognitive Search, built Rest APIs using Python Flask and constructed Cosmos DB (NoSQL) databases to store user preferences, saved collections and recommendations.<br/><br/>
                                • Deployed the application to Microsoft Azure using CI/CD pipelines and successfully integrated it into Microsoft Teams, to be shipped and used by over 75 million daily users.
                                </div>
                                
                                
                                </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    
                </Popup>
                     
                    
                </Col>
                <Col>
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "20px", border: "none",
                            borderRadius: "10px", height: "40vh", width: "36vw"}}>
                        <div className="card-image" >
                            <ZoomIn>
                            <Card.Img style={{height: "40vh", opacity: 0.65}}
                                 src={ND} alt="Card image" />
                            </ZoomIn>
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        padding: "80px",
                                    }}> understaNDing <br></br>
                                    NEURODIVERSITY
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
                    <Container style={{height: "67vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <h4 style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 20, color: "#E9C46A"}}>understaNDing Neurodiversity</h4>
                                        <br/>
                                <Row>

                                <div style={{
                                    fontSize: 15,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", textAlign: "left"}}>

                                    <Image width="55%" src={NDDiversity} style={{float: "right", paddingLeft: "5px", paddingTop: "10px"}}/>
                                    • Designed and built a cross platform application that aims to accelerate awareness of and engagement with Microsoft’s “neurodiverse” employees, customers and partners as part of the Microsoft Global Hackathon 2020.<br/><br/>
                                    • Developed an accessible user interface using React.js that showcases resources and engaging videos of neurodiverse individuals including those with ADHD, Autism, Dyslexia, PTSD, Depression and Anxiety.<br/><br/>
                                    • Created Rest APIs for the application using Node.js and constructed databases using MongoDB to store user data as well as resources hosted on the platform.<br/><br/>
                                    • Deployed the application to Microsoft Azure using CI/CD pipelines, thereby making the platform available to 150,000+ Microsoft employees.<br/>
                                
                                </div>
                                </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>

                </Col>
          
                <Col >
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "20px", border: "none",
                            borderRadius: "10px", height: "40vh", width: "36vw"}}>
                        <div className="card-image" >
                            <ZoomIn>
                            <Card.Img style={{height: "40vh", opacity: 0.8}}
                                 src={Connect} alt="Card image" />
                            </ZoomIn>
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
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
                    <Container style={{height: "70vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <h4 style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 20, color: "#E9C46A"}}>Connect Me: Chatting Platform</h4>
                                        <br/>
                                <Row>
                                <div style={{
                                    fontSize: 15,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", textAlign: "left"}}>

                                    <Image width="55%" src={ConnectSecond} style={{float: "right", paddingLeft: "5px", paddingTop: "10px"}}/>
                                    • Designed and built a Facebook Messenger clone that allows users to send and receive messages through an interactive web application.<br/><br/>
                                    • Created an accessible user interface using React.js that allows for log-in, sign-up and multi-user chat functionality.<br/><br/>
                                    • Developed endpoints for the above functionality in the backend using Node.js, Express.js and Web Sockets (Socket.io).<br/><br/>
                                    • Constructed databases using MongoDB to store user data, as well as encrypted chat history and contact information.<br/><br/>
                                    • Deployed the application to Heroku, thereby making it available through a publicly accessible URL.<br/>
                                </div>
                                </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                <Col >
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "20px", border: "none",
                            borderRadius: "10px", height: "40vh", width: "36vw"}}>
                        <div className="card-image" >
                            <ZoomIn>
                            <Card.Img style={{height: "40vh", opacity: 0.8}}
                                 src={Drop} alt="Card image" />
                            </ZoomIn>
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        paddingTop: "50px",
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
                    <Container style={{height: "70vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <h4 style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 20, color: "#E9C46A"}}>Drop: Water Fountain Location App</h4>
                                        <br/>
                                <Row>

                                <div style={{
                                    fontSize: 15,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", textAlign: "left"}}>
                                        <Image width="65%" src={DropSecond} style={{float: "right", paddingLeft: "5px", paddingTop: "10px"}}/>
                                • Designed a user-centered app interface- “DROP” to improve the experience of international visitors in Barcelona, Spain.<br/><br/>
                                • Conducted user research via contextual interviews, surveys with local stakeholders and constructed affinity models to identify core issues and design ideas.<br/><br/>
                                • Conducted visioning and storyboarding sessions to identify key features and functions as well as heuristic evaluations and usability tests on low and high-fidelity prototypes.<br/><br/>
                                • Incorporated several features including searching, navigating to, adding/saving, removing and rating water fountains along with provisions for crowdsourcing by users.<br/>
                                </div>
                                </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                <Col >
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "20px", border: "none",
                            borderRadius: "10px", height: "40vh", width: "36vw"}}>
                        <div className="card-image" >
                            <ZoomIn>
                            <Card.Img style={{height: "42vh", opacity: 0.9}}
                                 src={Journaling} alt="Card image" />
                            </ZoomIn>
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        paddingTop: "50px",
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
                    <Container style={{height: "70vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <h4 style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 20, color: "#E9C46A"}}>Daybook: Mental Health Journaling App</h4>
                                        <br/>
                                <Row>

                                <p style={{
                                    fontSize: 15,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", textAlign: "left"}}>

                                    <Image width="45%" src={DaybookScreens} style={{float: "right", paddingLeft: "5px", paddingTop: "10px"}}/>
                                    • Designed and built a cross-platform Intelligent, Mental Health Journaling Application-Daybook using React Native as part of a four person team on the Microsoft Azure Cloud + AI Social Good Hackathon 2020.<br/><br/>
                                    • Extracted information regarding the user’s mood and the side effects of the user’s mental health disorders using Azure Cognitive Services.<br/><br/>
                                    • Generated journaling prompts and recommended goals and action items tailored to the user, by leveraging sentiment analysis tools within Azure Cognitive Services Text Analytics and Personalizer.<br/><br/>
                                    • Constructed Azure SQL databases to store user data and created Rest APIs using C#, ASP.NET Core and Swagger UI hosted on Microsoft Azure Cloud Services.<br/><br/>
                                    • Created additional layers of security by storing authentication keys for the above Azure services using Azure Key Vault.<br/>
                                </p>
                                </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                <Col >
                <Popup
                contentStyle={{border: "solid 0px black", height: "60vh", width: "70%", padding: 0, 
                backgroundColor: "black"}}
                trigger={
                    <a role="button" style={{cursor: "pointer"}}> 
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "20px", border: "none",
                            borderRadius: "10px", height: "40vh", width: "36vw"}}>
                        <div className="card-image" >
                            <ZoomIn>
                            <Card.Img style={{height: "42vh", opacity: 0.8}}
                                 src={MSFT} alt="Card image" />
                            </ZoomIn>
                            <Card.ImgOverlay >
                                <Card.Title 
                                    style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 38,
                                        paddingTop: "50px",
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
                    <Container style={{height: "70vh", width: "100%", border: "solid 0px black", 
                    backgroundColor: "black",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + BlackOne + ")"}}>
                        <Row>
                            <Col>
                                {/* <Image width="100%" style={background} responsive="true"  src={Library} fluid="true"/> */}
                                <Container className="project-container" responsive="true">
                                <h4 style={{
                                        fontFamily: "Tahoma, Geneva, sans-serif", 
                                        fontWeight: "normal",
                                        fontSize: 20, color: "#E9C46A"}}>Microsoft Deep Dive Computer Science Workshop</h4>
                                        <br/>
                                <Row>
                                <p style={{
                                    fontSize: 15,
                                    color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", textAlign: "left"}}>
                                     <Image width="50%" src={Deep} style={{float: "right", paddingLeft: "5px", paddingTop: "10px"}}/>
                                    • Co-initiated and led a ten-week workshop series as part of the Microsoft Co-Creation Program to introduce underserved students in low-income communities to computer science foundations and the skills required for technical interviews.<br/><br/>
                                    • Created tutorials in the form of videos, presentations and documentation to go over technical topics such as arrays, linked lists, trees, and recursion as well as interpersonal skills such as working the clock, proactive communication and developing a solution using the whiteboarding technique.<br/><br/>
                                    • Designed and built a web application using React.js showcasing resources from each week of the workshop as well as assigned coding problems covering the technical topics explored that week.<br/><br/>
                                    • Deployed the application to Microsoft Azure, thereby making it available to over 3,200 Microsoft Interns with a special focus on Explorer (Freshmen and Sophomores) interns for professional training and development.<br/><br/>
                                </p>
                                </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Popup>
                </Col>
                </Row>
            </Container>
            
        );
    }
}
export default ProjectsItems;