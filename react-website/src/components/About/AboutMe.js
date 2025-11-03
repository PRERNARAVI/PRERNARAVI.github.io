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
            opacity: 0.75,
            position: "relative",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        };

        var backgroundTwo = {
            marginTop: "0px",
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 0, 
            backgroundPosition: 'center',
            width: '100%',
            backgroundSize: 'cover',
            opacity: 0.75,
            position: "relative",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        };
        return (
            // <div style={{backgroundColor: "#0e172a", maxWidth: "102%", marginTop: "780px"}}>
        <div>
       
        <Row>
            <Container className="about-me">
                <Row className="justify-content-center">
                <Col md={3} style={{textAlign: "center", justifyContent: "center", alignItems: "center", paddingTop: "60px"}}> 
                    <div>    
                        <Image width="85%" responsive="true" src={Grad} fluid="true" style={{ borderRadius: "50%" }}/>
                    </div>
                    <br/>
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center", width: "100%"}}>
                        <p style={{textAlign: "center"}}>
                            <a href="https://scholar.google.com/citations?user=UYFmxj0AAAAJ&hl=en"><img src={require('../../images/google-scholar.svg').default} alt="Google Scholar" style={{width: 36, height: 36, verticalAlign: 'middle'}}/></a>&nbsp;&nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/prerna-ravi/" style={{verticalAlign: 'middle', marginRight: '10px'}}><LinkedInIcon style={{color: "#1E88E5", fontSize: 44, verticalAlign: 'middle'}}/></a>
                            <a href="mailto: prernar@mit.edu" style={{verticalAlign: 'middle', marginRight: '10px'}}><EmailIcon style={{color: "#1E88E5", fontSize: 44, verticalAlign: 'middle'}}/></a>
                            <a href="https://twitter.com/PrernaRavi1" style={{verticalAlign: 'middle', marginRight: '10px'}}><TwitterIcon style={{color: "#1E88E5", fontSize: 44, verticalAlign: 'middle'}}/></a>
                            <a href="https://github.com/PRERNARAVI" style={{verticalAlign: 'middle'}}><GitHubIcon style={{color: "#1E88E5", fontSize: 36, verticalAlign: 'middle'}}/></a>
                        </p>
                        <p style={{color: "#3A1EB6", fontWeight: 600, fontSize: "15px", marginBottom: "0px"}}>
                            Areas of Interest:
                        </p>
                        <p style={{color: "#2D3436", fontSize: "15px", marginTop: "0"}}>
                            🤖 Human-AI Interaction,<br/>
                            {/* 🤝 Co-creativity,<br/> */}
                            👥 🤝 Group Collaboration,<br/>
                            🤖 📖 AI Literacy
                        </p>
                    </div>
                </Col>
                <Col md={6} >
                <Container className="about-me-text">
                        <div style={{fontWeight:"400"}}>
                        I am a PhD student at <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://www.csail.mit.edu/" >MIT CSAIL</a> advised by <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://en.wikipedia.org/wiki/Hal_Abelson">Dr. Hal Abelson</a>. 
                        I also collaborate with <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://miba.dev/">Dr. Michiel Bakker</a> (MIT Sloan), <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://www.media.mit.edu/people/cynthiab/overview/">Dr. Cynthia Breazeal</a> (MIT Media Lab), <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://education.mit.edu/person/eric_klopfer/">Dr. Eric Klopfer </a>(MIT CMSW), and <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://people.csail.mit.edu/karger/"> Dr. David Karger</a> (MIT CSAIL). I graduated from MIT in 2024 with an S.M. in Computer Science <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://drive.google.com/file/d/1FrZY_4D6MsFn5sUuMdrHGapudsVFi62J/view?usp=sharing">[thesis link]</a>.
                        <br/><br/>

                        My research explores how AI systems can augment <span style={{color: "#3A1EB6"}}><b>group collaboration</b></span> and <span style={{color: "#3A1EB6"}}><b>deliberation</b></span> across diverse settings. 
                        I design frameworks and interventions that support <span style={{color: "#3A1EB6"}}><b>equitable team participation</b></span>, foster <span style={{color: "#3A1EB6"}}><b>group trust</b></span> and <span style={{color: "#3A1EB6"}}><b>social connection</b></span>, and facilitate <span style={{color: "#3A1EB6"}}><b>consensus-building</b></span>. 
                        My work informs applications in education, creative practice, and collective decision-making.
                        I also develop critical AI literacy resources that empower stakeholders to engage in responsible and ethical AI practices.
                        You can find my CV [Rev. Oct 2025] on this website. If you are interested in collaborating or learning more, please reach out at <a style={{color: "#1E88E5", fontWeight: "600"}} href="mailto: prernar@mit.edu">prernar-at-mit-dot-edu</a> :)
                        <br/><br/>

                        Situated at the intersection of <b>Human-Computer Interaction (HCI)</b> and <b>Artificial Intelligence (AI)</b>, my work employs mixed methods experiments—combining computational, qualitative, and quantitative approaches—and spans participatory design, system development, and empirical evaluation.
                        I have published my research in <span style={{color: "#3A1EB6"}}><b>HCI + AI + Education</b></span> venues, including CHI, CSCW, AAAI, IDC, and CSCL. I was previously an MIT Teaching Development Fellow. I have worked at <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2023%2023'%3e%3cpath%20fill='%23f3f3f3'%20d='M0%200h23v23H0z'/%3e%3cpath%20fill='%23f35325'%20d='M1%201h10v10H1z'/%3e%3cpath%20fill='%2381bc06'%20d='M12%201h10v10H12z'/%3e%3cpath%20fill='%2305a6f0'%20d='M1%2012h10v10H1z'/%3e%3cpath%20fill='%23ffba08'%20d='M12%2012h10v10H12z'/%3e%3c/svg%3e" width="13" height="13"></img> Microsoft and <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/24px-Google_%22G%22_logo.svg.png" width="13" height="13"></img> Google Research in both research and software engineering roles.
                        <br/><br/>
                    </div>
                    <div>
                        I received my B.S. in Computer Science (2022) from <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://www.gatech.edu/" >Georgia Tech</a>, where I was advised by <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://en.wikipedia.org/wiki/Thad_Starner" >Dr. Thad Starner</a>. Under his supervision, I built sign language recognition models and integrated those into educational games for deaf kids.
                        I also collaborated with <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://www.nehakumar.org/" >Dr. Neha Kumar</a> and <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://en.wikipedia.org/wiki/Betsy_DiSalvo" >Dr. Betsy Disalvo </a> 
                        on investigating the use of Information and Communication Technologies (ICTs) in underresourced settings in the Global South.
                    </div>
                </Container>
                </Col>
                </Row>
            </Container>
        </Row>

        <Row>
            <Container className="news-updates-panel">
                <div style={{height: "4px", width: "48px", background: "#3A1EB6", borderRadius: "2px", marginBottom: "18px"}}></div>
                <h4 style={{color: "#3A1EB6", marginBottom: "20px", textAlign: "left"}}>News + Updates</h4>
                <div className="news-list">
                    <div className="news-item">
                        <span className="news-date">Oct 2025</span>
                        <span className="news-text">Pre-print of our paper on <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://arxiv.org/abs/2510.22844">Leveraging LLMs to Identify Conversation Threads in Collaborative Learning</a> is available on arXiv.</span>
                        <span className="news-emoji" title="Update">📄</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">Oct 2025</span>
                        <span className="news-text">I was awarded two Special Recognitions for Outstanding Reviews for CHI 2026!</span>
                        <span className="news-emoji" title="Update">🏆</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">Sept 2025</span>
                        <span className="news-text">We were invited to speak on <a style={{color: "#1E88E5", fontWeight: "600"}} href="">Co-design to Support Responsible Implementation of AI Tools in Education</a> at UNESCO's Digital Learning Week (Sept 2 - 5) in Paris!</span>
                        <span className="news-emoji" title="Update">🇺🇳</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">July 2025</span>
                        <span className="news-text">Our paper <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://dl.acm.org/doi/abs/10.1145/3698205.3729542">How Adding Metacognitive Requirements in Support of AI Feedback in Practice Exams Transforms Student Learning Behaviors</a> received a Best Paper Nomination at L@S 2025!</span>
                        <span className="news-emoji" title="Paper">🏆</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">June 2025</span>
                        <span className="news-text">I was invited to give a talk at Stanford HCI on <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://docs.google.com/presentation/d/1xPig0EfXeFiKIWTBn3ewNnOhUh21Yld80oAai_FNqTA/edit?usp=sharing">Designing AI Tools for Project-Based and Collaborative Learning Environments</a>.</span>
                        <span className="news-emoji" title="Update">🎙️</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">June 2025</span>
                        <span className="news-text">I am spending the summer working on AI-supported scalable deliberation and consensus-building with <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://miba.dev/"> Michiel Bakker</a>!</span>
                        <span className="news-emoji" title="Update">🤝</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">June 2025</span>
                        <span className="news-text">I have joined the <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://xrds.acm.org/">ACM XRDS Student Magazine</a> as a Feature Editor.</span>
                        <span className="news-emoji" title="Update">📝</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">Mar 2025</span>
                        <span className="news-text">Our CHI 2025 paper on <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://dl.acm.org/doi/abs/10.1145/3706598.3713971">Co-designing Large Language Model Tools for Project-Based Learning with K12 Educators</a> won a Best Paper Honorable Mention (top 5% of submissions)!</span>
                        <span className="news-emoji" title="Award">🏆</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">Mar 2025</span>
                        <span className="news-text">Our paper <a style={{color: "#1E88E5", fontWeight: "600"}} href="https://dl.acm.org/doi/10.1145/3713043.3727057">"How can we learn and use AI at the same time?": Participatory Design of GenAI with High School Students</a> has been accepted to IDC 2025!</span>
                        <span className="news-emoji" title="Paper">📄</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">Mar 2025</span>
                        <span className="news-text">Our paper <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://education.mit.edu/wp-content/uploads/2024/10/2025-ABCDE-MIT_STEPTEA.pdf">ABCDE: An Action-Oriented Framework for Collaborative Activities</a> was accepted to CSCL 2025!</span>
                        <span className="news-emoji" title="Paper">📄</span>
                    </div>
                    <div className="news-item">
                        <span className="news-date">Feb 2025</span>
                        <span className="news-text">Our proposal to the Journal of Educational Data Mining (jEDM) on <a style={{color: "#1E88E5", fontWeight: "600"}} href="">Leveraging LLMs to Identify and Analyze Conversation Threads in Collaborative Learning</a> has been accepted!</span>
                        <span className="news-emoji" title="Paper">📄</span>
                    </div>
                </div>
            </Container>
        </Row>

        <Row style={{textAlign: "center"}}>
            <Col style={{alignContent: "center"}}>
            <Container className="about-me-interests-panel">
            <div style={{height: "4px", width: "48px", background: "#3A1EB6", borderRadius: "2px", marginBottom: "18px"}}></div>
            <h4 style={{color: "#3A1EB6", marginBottom: "20px", textAlign: "left"}}>Background</h4>
                <Row className='about-me-text-two'> 
                <div style={{padding: "12px"}}>
                    I grew up in the multicultural city of Muscat, Oman, a childhood punctuated with annual visits to my native place in Mumbai, India (which is also where parts of my prior research work were based). 
                    I have formal training in Indian classical Carnatic music and Bharatanatyam dance, and maintain a strong artistic interest in oil and acrylic painting.
                    {/* In particular, I am deeply grateful for the <a style={{color: "#1E88E5", fontWeight: "600"}}href="https://www.iirp.edu/images/pdf/AvNtDE_EDUC_701_-_Yossos_Community_Cultural_Wealth_Model.pdf" >resistant and aspirational capital</a> that I have had access to, without which it would have been impossible for me to study in the United States. */}
                </div>
                </Row>
                <Row>
                <Col sm={4}>
                <div role="button" style={{cursor: "pointer", textDecoration: "none"}} >      
                    <Card className="bg-white text-dark" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "8px", height: "auto"}}>
                    <div className="interest-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                fontWeight: "500",
                                fontSize: 18,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#3A1EB6"}}>
                                &ensp;Indian Classical Dance: Bharatanatyam
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{minHeight: "40vh", maxHeight: "40vh", objectFit: "contain"}}
                             src={Dance} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 13, margin: '16px', color: "#2D3436"}}>
                            I have been blessed to have successfully completed the Arangetram at the Melapathur Auditorium, Guruvayoor in Kerala, India.
                            </Card.Text>

                    </div>               
                    </Card>
                </div>  
                </Col>
                <Col sm={4}>
                <div role="button" style={{cursor: "pointer", textDecoration: "none"}} >    
                    <Card className="bg-white text-dark" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "8px", height: "auto"}}>
                    <div className="interest-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                fontWeight: "500",
                                fontSize: 18,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#3A1EB6"}}>
                                &ensp;Indian Classical Music: Carnatic
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{minHeight: "40vh", maxHeight: "40vh", objectFit: "contain"}}
                             src="https://i.pinimg.com/originals/63/24/23/632423b9658f2f53c7c2ec382edb0805.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 13, margin: '16px', color: "#2D3436"}}>
                            I have undergone professional training in Indian classical Carnatic music for more than 10 years and participated in numerous events in India and Oman.
                            </Card.Text>
                            

                    </div>               
                    </Card>
                </div>  
                </Col>
                <Col sm={4}>
                <div role="button" style={{cursor: "pointer", textDecoration: "none"}} >      
                    <Card className="bg-white text-dark" 
                        style={{marginTop: "20px", marginLeft: "0px", border: "none",
                        borderRadius: "8px", height: "auto"}}>
                    <div className="interest-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                fontWeight: "500",
                                fontSize: 18,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#3A1EB6"}}>
                                &ensp;Visual Arts
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{minHeight: "40vh", maxHeight: "40vh", objectFit: "contain"}}
                             src={Art} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 13, margin: '16px', color: "#2D3436"}}>
                            I have also received rigorous training in visual arts since I was 5 years old and continue to explore and experiment with multiple mediums. 
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