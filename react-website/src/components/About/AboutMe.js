import React from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap';
import profile from "../../images/profile-pic.JPG";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import BlackOne from "../../images/BlackOne.jpg";
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
        return (
            // <div style={{backgroundColor: "#0e172a", maxWidth: "102%", marginTop: "780px"}}>
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
                <Col xs={7}>
                <Container className="about-me-text">
                        <h1 style={{fontWeight:"500"}}>
                            PRERNA RAVI
                        </h1>
                        <br></br>
                    <div style={{fontWeight:"500"}}>
                        Hi! My name is Prerna Ravi and I am a rising third year undergraduate student 
                        at <a style={{color: "#E9C46A"}}href="https://www.gatech.edu/" ><u>Georgia Institute of Technology</u></a> majoring in Computer Science with 
                        concentrations in Human Computer Interaction and Artificial Intelligence. 
                        I believe technology is an enabler and this program has not only enriched my academic knowledge, but has also provided opportunities to 
                        actively participate in the confluence of technology and society and 
                        scale it up from prototyping at a local level. 
                    </div>
                    <br></br>
                    <div>
                    It is this against this overarching goal, I have also taken up Research with numerous applications 
                    which offer tremendous potential to enhance quality of education for different cross-sections of the society ranging from the 
                    physically challenged to under-represented communities in developing nations. <i>"Knowledge multiplies when we share it"</i> is what I 
                    discovered after being a Teaching Assistant.  Likewise, it has been a truly fulfilling experience participating in numerous community 
                    based activities that showed how technology could help the common man.  
                    </div>
                    <br></br>
                    <div>
                    With my upbringing rooted in deep Indian traditions, I have also been fortunate to have been trained in classical Carnatic music and 
                    Bharatanatyam. I also have a keen artistic sense and a preview of my repertoire is available here. 
                    </div>
                </Container>
                </Col>
                </Row>
            </Container>
            </Col>
            </Row>
        );
    }
}
export default AboutMe;