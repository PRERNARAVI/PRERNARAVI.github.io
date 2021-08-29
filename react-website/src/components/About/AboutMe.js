import React from 'react';
import {Col, Image, Row, Container, Card, Modal, Button} from 'react-bootstrap';
import profile from "../../images/profile-pic.JPG";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import BlackOne from "../../images/BlackOne.jpg";
import Dance from "../../images/Dance.jpg";
import Art from "../../images/Art.jpg";
import {ZoomIn} from 'react-animation-wrapper';
//import InstagramIcon from '@material-ui/icons/Instagram';

class AboutMe extends React.Component{
    render () {
        var background = {
            marginTop: "822px",
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 0, 
            backgroundPosition: 'center',
            width: '102%',
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
            width: '102%',
            backgroundSize: 'cover',
            opacity: 0.85,
            position: "relative",
            boxShadow: "40px 0px 40px 25px #003554"
        };
        return (
            // <div style={{backgroundColor: "#0e172a", maxWidth: "102%", marginTop: "780px"}}>
        <div>
        <Row>
          {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}
          <Col xs={0} style={{alignContent: "center"}}>
          {/* <Image style={backgroundMe} responsive="true" className="wallpaper-format" src={Me} fluid="true"/> */}
          <Image style={background} responsive="true"  src={BlackOne} fluid="true"/>
            
            <Container className="about-me">
                <Row>
                <Col xs={3} >     
                    <Image width="100%" responsive="true" className="profile-pic-format" src={profile} fluid="true"/>
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center", marginLeft: "70px", width: "100%"}}>
                    <h4 style={{fontFamily: "Tahoma, Geneva, sans-serif", color: "#f2ebdd", marginTop: "20px", textAlign: "center"}}>Contact</h4>
                    <Row>
                    <a href="https://github.com/PRERNARAVI"><GitHubIcon style={{color: "#f2ebdd", fontSize: 60, marginTop: "10px", marginLeft: "30px"}}/></a>
                    <a href="https://www.linkedin.com/in/prerna-ravi/"><LinkedInIcon style={{color: "#f2ebdd", fontSize: 65, marginTop: "10px", marginLeft: "30px"}}/></a>
                    <a href="mailto: prernaravi@gatech.edu"><EmailIcon style={{color: "#f2ebdd", fontSize: 65, marginTop: "10px", marginLeft: "30px"}}/></a>
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
                        
                        Hi! My name is Prerna Ravi and I am a rising fourth year undergraduate student at <a style={{color: "#E9C46A"}}href="https://www.gatech.edu/" ><u>Georgia Institute of Technology</u></a> majoring in Computer Science with concentrations in Human Computer Interaction and Artificial Intelligence. This program has not only enriched my academic & leadership skills, but also enabled me to push the boundaries and pursue numerous initiatives involving the confluence of technology and society-both in the United States and beyond.


                    </div>
                    <br></br>
                    <div>
                    With 'Right to Education' as one of the United Nations Millenium goals, I have taken up the cause through Research and internships ranging from local communities to large corporations and other universities with Edu-Tech as the underlying theme to enhance the quality and delivery of education for a wide spectrum of the society ranging from the physically challenged to under-served communities in developing nations. As a Teaching Assistant for over xx students, I get to first hand demonstrate "Knowledge multiplies when we share it" .  I feel humbled and at the same time amazed to see how adoption of technology accelerates the pace and scope of problem solving across the globe.  
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



            <Row>
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
                        borderRadius: "10px", height: "70vh"}}>
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
                        
                            <Card.Text style={{fontSize: 15, margin: '10px'}}>
                            I have been blessed to have successfully completed the Arangetram under Guru Kalamandalam Jyothilakshmi Jayakumar at the world famous Melapathur Auditorium, Guruvayoor in Kerala.
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
                        borderRadius: "10px", height: "70vh"}}>
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
                        <Card.Img style={{height: "50vh", width: "68%"}}
                             src="https://i.pinimg.com/originals/63/24/23/632423b9658f2f53c7c2ec382edb0805.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '10px'}}>
                            I have undergone professional training in Indian classical Carnatic music since the age of 4 under the able guidance of Guru Shanti Ram Kumar for more than 10 years and participated in numerous events and competitions in India and Oman.
                            </Card.Text>
                            

                    </div>               
                    </Card>
                </a>  
                </Col>
                <Col sm={4}>
                <a role="button" style={{cursor: "pointer", textDecoration: "none"}} href="https://www.prernaravi.com/art">      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "70vh"}}>
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
                        <Card.Img style={{height: "52vh", width: "78%", opacity: "0.8"}}
                             src={Art} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '10px'}}>
                            I have also received rigorous training in visual arts using various mediums including water, acyrlic, and oil for canvas paintings
                            and pencils (both black and colored) for sketching and shading.
                            </Card.Text>

                    </div>               
                    </Card>
                </a>  
                </Col>
                </Row>
            </Container>
            </Col>
            </Row>
            </div>
        );
    }
}
export default AboutMe;