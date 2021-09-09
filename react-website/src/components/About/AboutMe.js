import React from 'react';
import {Col, Image, Row, Container, Card, Modal, Button, Nav} from 'react-bootstrap';
import profile from "../../images/profile-pic.JPG";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import BlackOne from "../../images/BlackOne.jpg";
import Dance from "../../images/Dance.jpg";
import Art from "../../images/Art.jpg";
import {ZoomIn} from 'react-animation-wrapper';
import GetAppIcon from '@material-ui/icons/GetApp';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';
//import InstagramIcon from '@material-ui/icons/Instagram';

class AboutMe extends React.Component{
    render () {
        var background = {
            marginTop: "822px",
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 0, 
            backgroundPosition: 'center',
            width: '100%',
            backgroundSize: 'cover',
            opacity: 0.85,
            position: "relative",
            boxShadow: "40px 0px 40px 25px #003554"
        };

        var backgroundTwo = {
            marginTop: "0px",
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 0, 
            backgroundPosition: 'center',
            width: '100%',
            backgroundSize: 'cover',
            opacity: 0.85,
            position: "relative",
            boxShadow: "40px 0px 40px 25px #003554"
        };
        return (
            // <div style={{backgroundColor: "#0e172a", maxWidth: "102%", marginTop: "780px"}}>
        <div>
        <Col>
        <Row >
          {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}
          <Col xs={0} style={{alignContent: "center"}}>
          {/* <Image style={backgroundMe} responsive="true" className="wallpaper-format" src={Me} fluid="true"/> */}
          <Image style={background} responsive="true"  src={BlackOne} fluid="true"/>
            
            <Container className="about-me">
                <Row>
                <Col xs={3} >     
                    <Image width="100%" responsive="true" className="profile-pic-format" src={profile} fluid="true"/>
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center", marginLeft: "70px", width: "100%"}}>
                    <h4 style={{fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A", marginTop: "30px", textAlign: "center"}}>Contact</h4>
                    <Row style={{marginLeft: "-40px"}}>
                    <Nav.Link href="https://shared-assets.adobe.com/link/9d79a538-e6d8-45c1-4727-e56d26c5f1cd"><DescriptionIcon style={{color: "#E9C46A", fontSize: 50, marginTop: "10px", marginLeft: "25px"}}/></Nav.Link>
                    <a href="https://github.com/PRERNARAVI"><GitHubIcon style={{color: "#E9C46A", fontSize: 45, marginTop: "18px", marginLeft: "10px"}}/></a>
                    <a href="https://www.linkedin.com/in/prerna-ravi/"><LinkedInIcon style={{color: "#E9C46A", fontSize: 50, marginTop: "18px", marginLeft: "30px"}}/></a>
                    <a href="mailto: prernaravi@gatech.edu"><EmailIcon style={{color: "#E9C46A", fontSize: 55, marginTop: "15px", marginLeft: "30px"}}/></a>
                    
                    {/* <a href="https://www.instagram.com/prerna_2k/"><InstagramIcon style={{color: "white", fontSize: 65, marginTop: "15px", marginLeft: "30px"}}/></a> */}
                    </Row>
                    
                    </div>
                </Col>
                <Col xs={8}>
                <Container className="about-me-text">
                        <h1 style={{fontWeight:"500"}}>
                            PRERNA RAVI
                        </h1>
                        <br></br>
                    <div style={{fontWeight:"500"}}>
                        
                        Hi! My name is Prerna Ravi and I am a fourth year undergraduate student at <a style={{color: "#E9C46A"}}href="https://www.gatech.edu/" ><u>Georgia Institute of Technology</u></a> majoring in Computer Science with concentrations in Human Computer Interaction and Artificial Intelligence. This program has not only enriched my academic and leadership skills, but also enabled me to push the boundaries and pursue numerous initiatives involving the confluence of technology and society-both in the United States and beyond.


                    </div>
                    <br></br>
                    <div>
                    With <i>"Right to Education"</i> as one of the United Nations Millenium goals, I have taken up the cause through multiple research projects and internships ranging from local communities to large corporations and other universities with <span style={{color: "#E9C46A"}}>Educational Technology</span> as the underlying theme to enhance the quality and delivery of education for a wide spectrum of the society ranging from the differently abled to marginalized communities in developing nations. As a Head Teaching Assistant for over 800 students, I get to first hand demonstrate <i>"Knowledge multiplies when we share it"</i>.  I feel humbled and at the same time amazed to see how adoption of technology accelerates the pace and scope of problem solving across the globe.  
                    </div>
                    <br></br>
                    <div>
                    As an Indian by birth with a global outlook, I have deep rooted Indian traditions and am fortunate to have been trained in classical Carnatic music and Bharatanatyam dance. I also have a keen artistic sense and a preview of my repertoire in all the fine arts is available in this website.
                    </div>
                </Container>
                </Col>
                </Row>
            </Container>
            </Col>
            </Row>



            <Row style={{paddingBottom: "90px"}}>
            {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}
            <Col style={{alignContent: "center"}}>
            {/* <Image style={backgroundMe} responsive="true" className="wallpaper-format" src={Me} fluid="true"/> */}
            <Image style={backgroundTwo} responsive="true"  src={BlackOne} fluid="true"/>
            
            <Container className="about-me-two">
                <Row>
                <Col sm={4}>
                <a role="button" style={{cursor: "pointer", textDecoration: "none"}} href="https://www.prernaravi.com/dance">      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "75vh"}}>
                    <div className="interest-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 20,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;Indian Classical Dance: Bharatanatyam
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{height: "53vh", width: "70%", opacity: 0.9}}
                             src={Dance} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '20px'}}>
                            I have been blessed to have successfully completed the Arangetram at the famous Melapathur Auditorium, Guruvayoor in Kerala, India.
                            </Card.Text>
                            {/**<Card.Footer><a href="#" style={{color: "#E9C46A"}}>Read More</a></Card.Footer>*/}

                    </div>               
                    </Card>
                </a>  
                </Col>
                <Col sm={4}>
                <a role="button" style={{cursor: "pointer", textDecoration: "none"}} href="https://www.prernaravi.com/music">    
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "75vh"}}>
                    <div className="interest-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 20,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;Indian Classical Music: Carnatic
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{height: "53vh", width: "68%"}}
                             src="https://i.pinimg.com/originals/63/24/23/632423b9658f2f53c7c2ec382edb0805.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '20px'}}>
                            I have undergone professional training in Indian classical Carnatic music for more than 10 years and participated in numerous events in India and Oman.
                            </Card.Text>
                            

                    </div>               
                    </Card>
                </a>  
                </Col>
                <Col sm={4}>
                <a role="button" style={{cursor: "pointer", textDecoration: "none"}} href="https://www.prernaravi.com/art">      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "75vh"}}>
                    <div className="interest-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 20,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;Visual Arts
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{height: "53vh", width: "78%", opacity: "0.8"}}
                             src={Art} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '20px'}}>
                            I have also received rigorous training in visual arts using various mediums for over 10 years and have received numerous accolades. 
                            </Card.Text>

                    </div>               
                    </Card>
                </a>  
                </Col>
                </Row>
            </Container>
            </Col>
            </Row>
            </Col>
            </div>
        );
    }
}
export default AboutMe;