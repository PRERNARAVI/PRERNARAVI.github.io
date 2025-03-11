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
            opacity: 0.75,
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
                        <Image width="75%" responsive="true" src={Grad} fluid="true"/>
                    </div>
                    <br/>
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center", width: "100%"}}>
                        {/* <h5 style={{fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A", marginTop: "30px", textAlign: "center"}}>Reach out!</h5> */}
                        <p style={{textAlign: "center"}}>
                        {/* <a href="https://prernaravi.github.io/static/media/PRERNA_RAVI_CV.1baaf4e1a73bbd415b5a.pdf"><span><DescriptionIcon style={{color: "#E9C46A", fontSize: 50}}/></span></a>&nbsp;&nbsp;&nbsp;  */}
                        <a href="https://scholar.google.com/citations?user=UYFmxj0AAAAJ&hl=en"><img style={{backgroundColor: "#E9C46A"}} src="https://img.icons8.com/material/48/null/google-scholar--v2.png"/></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/prerna-ravi/"><LinkedInIcon style={{color: "#E9C46A", fontSize: 55}}/></a>&nbsp;&nbsp;&nbsp;
                        <a href="mailto: prernar@mit.edu"><EmailIcon style={{color: "#E9C46A", fontSize: 57}}/></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/PrernaRavi1"><TwitterIcon style={{color: "#E9C46A", fontSize: 55}}/></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/PRERNARAVI"><GitHubIcon style={{color: "#E9C46A", fontSize: 45}}/></a>
                        
                        </p>
                        <p style={{color: "#89CFF0"}}><b>Areas of Interest:</b> <br/>Human-Computer Interaction (HCI), Artificial Intelligence (AI), <br/>K12 CS & AI literacy, Co-creativity, Group Collaboration</p>
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
                        
                    I am a PhD student at <a style={{color: "#E9C46A"}}href="https://www.csail.mit.edu/" >MIT CSAIL</a> advised by <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Hal_Abelson">Dr. Hal Abelson</a> and <a style={{color: "#E9C46A"}}href="https://people.csail.mit.edu/karger/"> Dr. David Karger</a>. 
                    I also collaborate with <a style={{color: "#E9C46A"}} href="https://www.media.mit.edu/people/cynthiab/overview/">Dr. Cynthia Breazeal</a> (MIT Media Lab) and <a style={{color: "#E9C46A"}} href="https://education.mit.edu/person/eric_klopfer/">Dr. Eric Klopfer </a>(MIT STEP). I graduated from MIT in 2024 with an S.M. in Computer Science <a style={{color: "#E9C46A"}} href="https://drive.google.com/file/d/1FrZY_4D6MsFn5sUuMdrHGapudsVFi62J/view?usp=sharing">[thesis link]</a>.
                    <br/><br/>
                    
                    My research focuses on designing AI powered educational systems and curricula that foster <span style={{color: "#89CFF0"}}>collaboration, equity</span> and <span style={{color: "#89CFF0"}}>creativity. </span> I develop
                    inclusive tools that empower diverse educational stakeholders to engage, learn, and create with AI and data science.        
                    I engage in ethnographic fieldwork, participatory design, system development, and evaluation. My work has been published in <span style={{color: "#89CFF0"}}><b>HCI + AI + Education</b></span> venues, including CHI, CSCW, IDC, AAAI, ISLS, & SIGCSE. I am currently an MIT Teaching Development Fellow. I have previously worked at Microsoft and Google Research in both research and software engineering roles.
                    You can find my CV [Rev. March 2025] on this website. 
                    <br/> <br/>
                    These days, I am building multimodal LLM agents to foster and measure equitable group collaboration and productivity, distributed creativity, and learning outcomes. I am also developing new taxonomies for automatically identifying semantic threads within in-person conversations and critically examining discourse dynamics in collaborative contexts. If you work in the AI for education, group collaboration, or creativity spaces, please reach out to me at <a style={{color: "#E9C46A"}} href="mailto: prernar@mit.edu">prernar-at-mit-dot-edu</a> :)<br/><br/>
                    </div>
                    <div>
                    
                    I received my B.S. in Computer Science (2022) from <a style={{color: "#E9C46A"}}href="https://www.gatech.edu/" >Georgia Tech</a>, where I was advised by <a style={{color: "#E9C46A"}}href="https://en.wikipedia.org/wiki/Thad_Starner" >Dr. Thad Starner</a>. Under his supervision, I built sign language recognition models and integrated those into educational games for deaf kids.
                    I also collaborated with <a style={{color: "#E9C46A"}}href="https://www.nehakumar.org/" >Dr. Neha Kumar</a> and <a style={{color: "#E9C46A"}}href="https://en.wikipedia.org/wiki/Betsy_DiSalvo" >Dr. Betsy Disalvo </a> 
                    on investigating the use of Information and Communication Technologies (ICTs) in underresourced settings in the Global South.
                    {/* Likewise my research internships at <a style={{color: "#E9C46A"}}href="https://ai.google/research/" >Google AI</a> and <a style={{color: "#E9C46A"}}href="https://www.microsoft.com/en-us/accessibility" >Microsoft Accessibility</a> as well as three software engineering internships 
                    at Microsoft enabled me apply these skills in an industry setting.   */}
                    {/* I also worked with multiple non-profit organizations both in the United States and India, my home country. */}
                    </div>
                    <br/>
                    <div>
                        News + Updates: 
                        <ul>
                        <li> 03/2025 – Our paper <a style={{color: "#E9C46A"}}href="https://drive.google.com/file/d/1zxLS8FV6vObb67xYlQWDgR3XhCPy6Y3y/view?usp=sharing">ABCDE: An Action-Oriented Framework for Collaborative Activities</a> was accepted to CSCL 2025! This is my first project in collaboration with MIT STEP :)</li>
                        <li> 02/2025 – Excited to be attending AAAI 2025 this month! Stop by the EAAI symposium to hear about our paper on Assessments for Supporting AI Literacy Teaching.</li>     
                        <li> 02/2025 – Our proposal to the Journal of Educational Data Mining (jEDM) on Leveraging LLMs to Identify and Analyze Conversation Threads in Collaborative Learning has been accepted!</li>    
                        <li> 02/2025 – I have been selected to serve on the Organizing Committee (as the Global co-chair) for CHI 2026 in Barcelona!</li>
                        {/* <li> 02/2025 – I am serving as a Senior Reviewer on the Program Committee of ISLS 2025!</li> */}
                        <li> 01/2025 – Our paper on <a style={{color: "#E9C46A"}}href="https://arxiv.org/abs/2502.09799">Co-designing Large Language Model Tools for Project-Based Learning with K12 Educators</a> has been accepted to CHI 2025!</li> 
                        {/* <li> 01/2025 – I will be serving as an Associate Chair for CHI 2025's Late Breaking Work track this year.</li>  */}
                        {/* <li> 01/2025 – I received my Graduate Teaching Certificate from MIT'S Teaching and Learning Lab.</li>  */}
                        {/* <li> 12/2024 – I presented our paper on <a style={{color: "#E9C46A"}} href="https://drive.google.com/file/d/1NJUi66PJgB4T7SEn_irGUKWr8AOQoyCN/view?usp=sharing">Constructionist Approaches to K12 Data Science Education </a> at ACM SIGCSE's Virtual Conference 2024.</li>  */}
                        {/* <li> 10/2024 – I served as the Diversity and Inclusion co-chair for <a style={{color: "#E9C46A"}} href="https://uist.acm.org/2024/organizers/">the UIST 2024 Organizing Committee!</a></li>  */}
                        {/* <li> 9/2024 – I gave a talk on our K12 Data Literacy work at the UNESCO Paris Headquarters during their <a style={{color: "#E9C46A"}} href="https://www.unesco.org/en/weeks/digital-learning">Digital Learning Week!</a> You can find the recording <a style={{color: "#E9C46A"}} href="https://t.co/Y0CDfSm6gZ">here.</a></li>    */}
                        {/* <li> 9/2024 – I received my S.M. from MIT EECS! You can find my Masters' thesis on <a style={{color: "#E9C46A"}} href="https://drive.google.com/file/d/1FrZY_4D6MsFn5sUuMdrHGapudsVFi62J/view?usp=sharing">LLM Tools for Project-based Learning</a> here.</li>    */}
                        {/* <li> 7/2024 - We are winners of the <a style={{color: "#E9C46A"}} href="https://tools-competition.org/">Learning Engineering Tools Competition</a> for 2024-25! We have been awarded $300,000 in research funding to advance our efforts in democratizing data literacy! </li> */}
                        {/* <li> 7/2024 – I was selected as the Teaching Development Fellow for EECS from MIT's Teaching and Learning Lab for 2024-2025! </li> */}
                        {/* <li> 6/2024 – I was awarded the Artificial Intelligence in Education (AIED) <a style={{color: "#E9C46A"}} href="https://aied2024.cesar.school/call-for-papers/deia-fellowships">DEIA Fellowship</a> for 2024-2025!</li> */}
                        {/* <li> 4/2024 – My work as an MIT Work of the Future Fellow was featured on <a style={{color: "#E9C46A"}} href="https://news.mit.edu/2024/mit-launches-working-group-generative-ai-and-work-of-the-future-0328">MIT News!</a></li> */}
                        {/* <li> 2/2024 – I am currently leading a study on augmenting Project-Based Learning (PBL) assessments in K12 with generative AI tools. If you are an educator interested in PBL, sign-up <a style={{color: "#E9C46A"}} href="https://forms.gle/4ML2t6qWJoTy6B2T7">here.</a></li> */}
                        </ul>
                    </div>
                    
                    
                    {/* <div>
                    I grew up in the multicultural city of Muscat, Oman in the Middle East, a childhood punctuated with annual visits to my native place in Mumbai, India (which is also where parts of my prior research work were based). I have deep rooted Indian traditions and am fortunate to have been trained in classical Carnatic music and Bharatanatyam dance. I also have a keen artistic sense and a preview of my repertoire in all the fine arts is available on this website. As a woman of color from the Global South, I leverage my diverse cultural upbringing and outlook while pursuing all professional as well as personal endeavors at MIT. 
                    In particular, I am deeply grateful for the <a style={{color: "#E9C46A"}}href="https://www.iirp.edu/images/pdf/AvNtDE_EDUC_701_-_Yossos_Community_Cultural_Wealth_Model.pdf" >resistant and aspirational capital</a> that I have had access to, without which it would have been impossible for me to study in the United States.
                    </div> */}
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
                <Row className='about-me-text-two'> 
                <div style={{padding: "20px"}}>
                    I grew up in the multicultural city of Muscat, Oman in the Middle East, a childhood punctuated with annual visits to my native place in Mumbai, India (which is also where parts of my prior research work were based). I have deep rooted Indian traditions and am fortunate to have been trained in classical Carnatic music and Bharatanatyam dance. I also have a keen artistic sense and a preview of my repertoire in all the fine arts is available on this website. As a woman of color from the Global South, I leverage my diverse cultural upbringing and outlook while pursuing all professional as well as personal endeavors at MIT. 
                    In particular, I am deeply grateful for the <a style={{color: "#E9C46A"}}href="https://www.iirp.edu/images/pdf/AvNtDE_EDUC_701_-_Yossos_Community_Cultural_Wealth_Model.pdf" >resistant and aspirational capital</a> that I have had access to, without which it would have been impossible for me to study in the United States.
                    </div>
                </Row>
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