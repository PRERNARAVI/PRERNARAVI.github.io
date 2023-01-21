import React from 'react';
import {Col, Image, Row, Container, Card, Modal, Button, Nav} from 'react-bootstrap';
import profile from "../../images/profile-pic.JPG";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import BlackOne from "../../images/BlackOne.jpg";
import Dance from "../../images/Dance.jpg";
import Art from "../../images/Art.jpg";
import Grad from "../../images/Prerna-latest.JPG"
import {ZoomIn} from 'react-animation-wrapper';
import GetAppIcon from '@material-ui/icons/GetApp';
import DescriptionIcon from '@material-ui/icons/Description';
import TwitterIcon from '@material-ui/icons/Twitter';
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
       
        <Row >
          {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}
          
          {/* <Image style={backgroundMe} responsive="true" className="wallpaper-format" src={Me} fluid="true"/> */}
          {/* <Image style={background} responsive="true"  src={BlackOne} fluid="true"/> */}
            
            <Container className="about-me">
                <Row>
                <Col md={4} style={{textAlign: "center", textAlign: "center", justifyContent: "center", alignItems: "center", paddingTop: "120px"}}> 
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}>    
                        <Image width="80%" responsive="true" src={Grad} fluid="true"/>
                    </div>
                    <br/>
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center", width: "100%"}}>
                        {/* <h5 style={{fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A", marginTop: "30px", textAlign: "center"}}>Reach out!</h5> */}
                        <p style={{textAlign: "center"}}>
                        {/* <a href="https://prernaravi.github.io/static/media/PRERNA_RAVI_CV.1baaf4e1a73bbd415b5a.pdf"><span><DescriptionIcon style={{color: "#E9C46A", fontSize: 50}}/></span></a>&nbsp;&nbsp;&nbsp;  */}
                        <a href="https://github.com/PRERNARAVI"><GitHubIcon style={{color: "#E9C46A", fontSize: 45}}/></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/prerna-ravi/"><LinkedInIcon style={{color: "#E9C46A", fontSize: 55}}/></a>&nbsp;&nbsp;&nbsp;
                        <a href="mailto: prernar@mit.edu"><EmailIcon style={{color: "#E9C46A", fontSize: 57}}/></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/PrernaRavi1"><TwitterIcon style={{color: "#E9C46A", fontSize: 55}}/></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://scholar.google.com/citations?user=UYFmxj0AAAAJ&hl=en"><img style={{backgroundColor: "#E9C46A"}} src="https://img.icons8.com/material/48/null/google-scholar--v2.png"/></a>
                        
                        </p>
                        {/* <a href="https://www.instagram.com/prerna_2k/"><InstagramIcon style={{color: "white", fontSize: 65, marginTop: "15px", marginLeft: "30px"}}/></a> */}
                        
                    
                    </div>
                </Col>
                <Col md={7}>
                <Container className="about-me-text">
                        {/* <h1 style={{fontWeight:"500", color: "#E9C46A"}}>
                            PRERNA RAVI
                        </h1> */}
                        <br></br>
                        <br></br>
                    <div style={{fontWeight:"500"}}>
                        
                    I am a first-year Computer Science PhD student at <a style={{color: "#E9C46A"}}href="https://www.csail.mit.edu/" >MIT CSAIL</a> advised by <a style={{color: "#E9C46A"}}href="https://en.wikipedia.org/wiki/Hal_Abelson">Dr. Hal Abelson</a> and <a style={{color: "#E9C46A"}}href="https://en.wikipedia.org/wiki/David_Karger"> Dr. David Karger</a>. My research focuses on designing 
                    large-scale educational tools and learning experiences catered to students of diverse cognitive and physical abilities as well as underrepresented social contexts. 
                    I also work closely with <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Cynthia_Breazeal">Dr. Cynthia Breazeal</a> from the <a style={{color: "#E9C46A"}} href="https://www.media.mit.edu/">MIT Media Lab</a>.
                    I am involved in projects surrounding K-12 AI literacy under MIT <a style={{color: "#E9C46A"}}href="https://raise.mit.edu/" >RAISE (Responsible AI for Social Empowerment and Education)</a>.
                    I am a recipient of the <a style={{color: "#E9C46A"}}href="https://oge.mit.edu/fellowships/oge-fellowships/" >Ida M. Green Memorial Fellowship</a> and the MIT Vice Chancellor’s Inclusive Excellence Fellowship. 
                    </div>
                    <br></br>
                    <div>
                    I graduated from <a style={{color: "#E9C46A"}}href="https://www.gatech.edu/" >Georgia Institute of Technology </a> in May 2022 with a Bachelor's of Science in Computer Science and concentrations in Human Computer Interaction(HCI) and Artificial Intelligence(AI). I was primarily advised by wearable computing pioneer, <a style={{color: "#E9C46A"}}href="https://en.wikipedia.org/wiki/Thad_Starner" >Dr. Thad Starner</a>. 
                    I also worked closely with <a style={{color: "#E9C46A"}}href="https://www.nehakumar.org/" >Dr. Neha Kumar</a> and <a style={{color: "#E9C46A"}}href="https://en.wikipedia.org/wiki/Betsy_DiSalvo" >Dr. Betsy Disalvo</a> on research projects at the intersection of human-centered computing and education.
                    During my time at Georgia Tech, I conducted ethnographic studies and developed AI-powered applications to enhance the quality and delivery of education for a wide spectrum of the society ranging from the differently abled to marginalized communities in developing nations. 
                    Likewise my research internship at <a style={{color: "#E9C46A"}}href="https://ai.google/research/" >Google AI</a> and three software engineering internships 
                    at <a style={{color: "#E9C46A"}}href="https://ai.google/research/" >Microsoft</a> enabled me apply these skills in an industry setting. As the Head Teaching Assistant for over 800 students at Georgia Tech, I further demonstrated my passion for teaching and learning and honed my fundamental computer science skills.  
                    To pursue this cause further, I also worked with multiple non-profit organizations both in the United States and India, my home country.
                    </div>
                    <br></br>
                    <div>
                    I grew up in the multicultural city of Muscat, Oman in the Middle East, a childhood punctuated with annual visits to my native place in Mumbai, India (which is also where parts of my prior research work were based). I have deep rooted Indian traditions and am fortunate to have been trained in classical Carnatic music and Bharatanatyam dance. I also have a keen artistic sense and a preview of my repertoire in all the fine arts is available on this website. As a woman of color from the Global South, I leverage my diverse cultural upbringing and outlook while pursuing all professional as well as personal endeavors at MIT. 
                    In particular, I am deeply grateful for the <a style={{color: "#E9C46A"}}href="https://www.iirp.edu/images/pdf/AvNtDE_EDUC_701_-_Yossos_Community_Cultural_Wealth_Model.pdf" >resistant and aspirational capital</a> that I have had access to, without which it would have been impossible for me to study in the United States.
                    </div>
                    <br/>
                </Container>
                </Col>
                </Row>
            </Container>
        </Row>



        <Row style={{textAlign: "center"}}>
            {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}
            <Col style={{alignContent: "center"}}>
            {/* <Image style={backgroundMe} responsive="true" className="wallpaper-format" src={Me} fluid="true"/> */}
            {/* <Image style={backgroundTwo} responsive="true"  src={BlackOne} fluid="true"/> */}
            
            <Container className="about-me-two">
                <Row>
                <Col sm={4}>
                <div role="button" style={{cursor: "pointer", textDecoration: "none"}} >      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "auto"}}>
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
                        <Card.Img style={{minHeight: "60vh", maxHeight: "60vh", objectFit: "contain", opacity: 0.9}}
                             src={Dance} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '20px'}}>
                            I have been blessed to have successfully completed the Arangetram at the famous Melapathur Auditorium, Guruvayoor in Kerala, India.
                            </Card.Text>
                            {/**<Card.Footer><a href="#" style={{color: "#E9C46A"}}>Read More</a></Card.Footer>*/}

                    </div>               
                    </Card>
                </div>  
                </Col>
                <Col sm={4}>
                <div role="button" style={{cursor: "pointer", textDecoration: "none"}} >    
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "auto"}}>
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
                        <Card.Img style={{minHeight: "60vh", maxHeight: "60vh", objectFit: "contain"}}
                             src="https://i.pinimg.com/originals/63/24/23/632423b9658f2f53c7c2ec382edb0805.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '20px'}}>
                            I have undergone professional training in Indian classical Carnatic music for more than 10 years and participated in numerous events in India and Oman.
                            </Card.Text>
                            

                    </div>               
                    </Card>
                </div>  
                </Col>
                <Col sm={4}>
                <div role="button" style={{cursor: "pointer", textDecoration: "none"}} >      
                    <Card className="bg-dark text-white" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "10px", height: "auto"}}>
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
                        <Card.Img style={{minHeight: "60vh", maxHeight: "60vh", opacity: "0.8", objectFit: "contain"}}
                             src={Art} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 15, margin: '20px'}}>
                            I have also received rigorous training in visual arts using various mediums for over 10 years and have received numerous accolades. 
                            </Card.Text>

                    </div>               
                    </Card>
                </div>  
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