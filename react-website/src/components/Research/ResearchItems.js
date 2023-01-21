import React, {useState} from 'react';
import {Col, Image, Row, Container, Card, Modal, Button} from 'react-bootstrap';
import Library from "../../images/Library.jpeg";
import ND from "../../images/ND.jpg";
import CHI from "../../images/CHI_Logo.png";
import COC2021 from "../../images/CocAward2021.jpeg";
import COC2020 from "../../images/CocAward2020.jpeg";
import Adobe from "../../images/Adobe.jpeg";
import { FaAward } from 'react-icons/fa';
import {ZoomIn} from 'react-animation-wrapper';
import BlackOne from "../../images/BlackOne.jpg";
import UBICOMP from "../../images/ubicomp.png";
import ASL from "../../images/ASL.png";
import Hands from "../../images/hands.png";
import TANDEM from "../../images/TANDEM.jpg";
import Book from "../../images/Book.png";
import Stats from "../../images/CopyCat_Stats.png";
import CSCW from "../../images/CSCW.png";
import Marisol from "../../images/Marisol.png";
import Mentor from "../../images/Mentor.png";
import Survey from "../../images/Survey.png";


function Research() {


    return (
        <Container fluid="xxl" style={{marginTop: "50px", padding: "70px"}}>
            
            {/** *********************************ASL ITEM************** */}
            
            <Row >
               <Col>
                  
                    <Card className="text-center" 
                        style={{ border: "none",
                        borderRadius: "10px"}}>
                    <div className="research-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 18,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;Using Sign Language Recognition to Develop Educational Games for Deaf Children | <span style={{color: "#FF69B4"}}>Google Research x Georgia Tech</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src="https://3.bp.blogspot.com/-CWTYSEEB3mA/XmfimK9wP1I/AAAAAAAAC0E/wIvHQktx8IEbeB_vbtIEZt3VFNayIFzRACLcBGAsYHQ/s1600/hand_trimmed.gif" alt="Pose estimation for gesture recognition" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            Deaf children born to hearing parents lack continuous access to
                            language, leading to weaker working memory compared to hearing
                            children and deaf children born to Deaf parents. CopyCat is a game
                            where children communicate with the computer via American Sign
                            Language (ASL), and it has been shown to improve language skills
                            and working memory. Previously, CopyCat depended on unscalable
                            hardware such as custom gloves for sign verification, but modern
                            4K cameras and pose estimators present new opportunities. Before
                            re-creating the CopyCat game for deaf children using off-the-shelf
                            hardware, we evaluate whether current ASL recognition is sufficient. Using Hidden Markov Models (HMMs), user independent
                            word accuracies were 90.6%, 90.5%, and 90.4% for AlphaPose, Kinect,
                            and MediaPipe, respectively. Transformers, a state-of-the-art model
                            in natural language processing, performed 17.0% worse on average.
                            Given these results, we believe our current HMM-based recognizer
                            can be successfully adapted to verify children’s signing while playing CopyCat.
                            <br/><br/>
                            Publications: <br/>
                            1) <a href="https://dl.acm.org/doi/10.1145/3411763.3451523" style={{textAlign: "left", color: "#E9C46A"}}>"CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills"</a> | <b style={{color: "#ADFF2F"}}>CHI 2021</b><br/>
            Dhruva Bansal, <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Matthew So, Pranay Agrawal, Ishan Chadha, Ganesh Murugappan, and Colby Duke <br/>
            <b style={{color: "#ADFF2F"}}>Winner - ACM CHI Student Research Competition 2021</b> <br/>
                            2) <a href="https://dl.acm.org/doi/10.1145/3411763.3451523" style={{textAlign: "left", color: "#E9C46A"}}>"Leveraging American Sign Language Recognition in Educational Games for Deaf Children"</a> | <b style={{color: "#ADFF2F"}}>Bachelor's Thesis 2022 - Georgia Tech</b><br/>
                            Prerna Ravi | Advisor: Dr. Thad Starner
                            
                            <br/><br/>
                            Press: <a href="https://www.rit.edu/news/parents-deaf-children-can-more-easily-learn-sign-language-thanks-powerful-tech-collaboration" style={{textAlign: "left", color: "#E9C46A"}}>"Parents of deaf children can more easily learn sign language thanks to powerful tech collaboration"</a>, RIT News
                            
                            <br/><br/>
                            Invited Talks and Demos: <br/>
                            1) Allison Benz, Spencer Montan, Byron Behm,Nisha Cerame, Ikemefuna Chukwunyerenwa, Loam Shin, Jinlan Li, Tony Ellis, Thad Starner, Saad Hassan, Abraham Glasser, Max Shengelia, <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Sahir Shahryar, Colby Duke. <span style={{color: "#E9C46A"}}>PopSign: Mobile games to Teach Sign Language.</span> Imagine RIT 2022. Rochester, NY <br/>
                            2) <b style={{color: "#E9C46A"}}>Prerna Ravi</b> and Thad Starner. <span style={{color: "#E9C46A"}}>Intuitive Calibration and Data Collection Procedures for ASL Recognition using Azure Kinect.</span> Undergraduate Research Symposium at Georgia Tech 2019 <br/>
                            3) <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Peter McAughan, Theo Panagiotopoulos, Dhruva Bansal, and Thad Starner. <span style={{color: "#E9C46A"}}>Pose Estimation for ASL Recognition using OpenPose and Microsoft Kinect.</span> Georgia Tech GVU Center Research Showcase 2019
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://www.researchgate.net/profile/Prerna-Ravi/publication/351426391_CopyCat_Using_Sign_Language_Recognition_to_Help_Deaf_Children_Acquire_Language_Skills/links/63113e4b1ddd4470212ad1d5/CopyCat-Using-Sign-Language-Recognition-to-Help-Deaf-Children-Acquire-Language-Skills.pdf" style={{color: "#E9C46A", fontSize: 15}} >Read More</a></Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            {/** TANDEM----------------------------------------------------- */}
            <Row >
               <Col>
                  
                    <Card className="text-center" 
                        style={{ border: "none",
                        borderRadius: "10px"}}>
                    <div className="research-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 18,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;The COVID-19 Pandemic Shift to Remote Learning under Resource Constraints | <span style={{color: "#FF69B4"}}>Georgia Tech x MakerGhat</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src="https://static.reuters.com/resources/r/?m=02&d=20200320&t=2&i=1505762610&r=LYNXMPEG2J0KV&w=800" alt="=Remote Learning during COVID-19" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            The COVID-19 pandemic has forced the transition of workflows across sectors to digital platforms. In education
                            settings, stakeholders previously reluctant to integrate computing technology in the classroom now find
                            themselves with little choice but to embrace it. This move to the digital brings additional challenges in
                            underserved contexts with limited, intermittent, and shared access to mobile or computing devices and the
                            internet. In this rapidly evolving digital landscape, we investigated how educational institutions (schools and
                            non-profit organizations) working with underserved populations in India are managing the transition to online
                            or remote learning. We conducted twenty remote interviews with students, teachers, and administrators from
                            underserved contexts across India. We found that online learning efforts in this setting relied on a resilient
                            human infrastructure comprised of students, teachers, parents, administrators, and non-profit organizations to
                            help navigate and overcome the limitations of available technical infrastructure. Our research aims to articulate
                            lessons for educational technology design in the post-COVID period, outlining areas for improvement in
                            the design of online learning platforms in resource-constrained settings, and identifying elements of online
                            learning that could be retained to strengthen the education system overall.
                            <br/><br/>
                            Publication: <a href="https://static1.squarespace.com/static/59f549a3b7411c736b42936a/t/617ea93c74f162008cf0c8d2/1635690826411/Remote+Learning.pdf3" style={{textAlign: "left", color: "#E9C46A"}}>"The Pandemic Shift to Remote Learning under Resource Constraints"</a> | <b style={{color: "#ADFF2F"}}>CSCW 2021</b><br/>
                            <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Azra Ismail, and Neha Kumar
                            
                            <br/><br/>
                            Video: <a href="https://www.youtube.com/watch?v=FVMyv0ulIAc" style={{textAlign: "left", color: "#E9C46A"}}>Featured on ACM SIGCHI YouTube Channel</a>

                            <br/><br/>
                            Recognition: <b style={{color: "#ADFF2F"}}> Winner of the 2021 Sam Nunn School of International Affairs for Global Development Paper Competition at Georgia Tech </b>
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://static1.squarespace.com/static/59f549a3b7411c736b42936a/t/617ea93c74f162008cf0c8d2/1635690826411/Remote+Learning.pdf3" style={{color: "#E9C46A", fontSize: 15}} >Read More</a></Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>

            <br/><br/>
            
            {/** CAT----------------------------------------------------- */}

            <Row >
               <Col>
                  
                    <Card className="text-center" 
                        style={{ border: "none",
                        borderRadius: "10px"}}>
                    <div className="research-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 18,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;Co-Designing Parent-Education Information and Communication Technologies (ICTs) with Hispanic Immigrants | <span style={{color: "#FF69B4"}}>Georgia Tech </span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src={Marisol} alt="=" />
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src="https://dl.acm.org/cms/attachment/64dea255-2f3d-4336-b568-2ffaa06be771/chi20-202-fig1.jpg" alt="=" />
                        
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            Since 2017, over 165 million people have immigrated to high-income countries, like the United States, in search of a better future for themselves and their children. However, immigrant parents—especially those from a low-income background—usually struggle to ensure that their children harness educational opportunities for achieving such aspired future. Information and Communication Technologies (ICTs) could support these parents by facilitating 
                            access to learning-related information for enriching children’s academic experience. The field of Human-Computer Interaction (HCI) has a growing interest in how technology might support parents. Much of this work, however, has focused on parents from dominant groups (e.g., middle-class natives) and their interaction with social media and mobile technologies for non-educational purposes (e.g., finding support, protecting their children’s privacy, and others).
                            <br/><br/>
                            For many parents from non-dominant groups in the United States (e.g., ethnic minorities), engaging in ways that allow their children to achieve such success is still a challenge. Despite Latinos’ prevalent presence in the U.S., they face a historically persistent low academic achievement rate. Barriers like language and cultural differences stand in the way. Digital technologies have the potential to offer the needed support by enhancing parents’ 
                            opportunities to access relevant information. However, to do so, the design of such technologies has yet to enable parents to actively participate with regards to what they find meaningful and valuable, and broaden their access to diverse voices and perspectives.
                            <br/><br/>
                            To tackle these pending design challenges, we focus on the case of Spanish-speaking low-income Latino parents and identify meaningful aspects of their everyday practices that can inform the design of technologies for this group. Drawing from qualitative methods, we explore the design of ICTs for diversifying the strategies that low-income Hispanic immigrant parents use to effectively engage in their children's education, given their information needs, 
                            cultural practices and socio-economic context.
                            <br/> <br/>
                            We conducted ethnographic studies and participatory design workshops with Latino parents as actors in a sociotechnical network, interacting with a wide range of other actors—including technology—to form and maintain information channels for better supporting their children’s education. Our goal was to illuminate ways for technology to diversify and strengthen these information channels, so that parents can access more and richer resources to shape their children’s 
                            academic life. We also examined the information work that bilingual parent-education liaisons perform to create connections towards assisting immigrant parents in the United States. As part of formal and informal educational institutions, liaisons operate between different social worlds—within and beyond the domain of education—to maximize immigrant parents’ engagement in their children’s academic lives. Drawing upon ethnographic fieldwork with low-income 
                            Latino immigrants and their liaisons, we explored how liaisons leverage technology, content, and people to align these worlds; bringing them closer to mutual understanding. This analysis provides a rich and unique perspective of the work that successfully engages immigrant parents with their children’s education, as well as the tensions that challenge that engagement. This understanding of the work that liaisons do with and across seams provides insights to inform design directions for technology that could facilitate and amplify their efforts.

                            
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            {/* <Card.Footer><a href="https://static1.squarespace.com/static/59f549a3b7411c736b42936a/t/617ea93c74f162008cf0c8d2/1635690826411/Remote+Learning.pdf3" style={{color: "#E9C46A", fontSize: 15}} onClick={() => setModalShowASL(true)}>Read More</a></Card.Footer> */}

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/><br/>

            {/** Avanti----------------------------------------------------- */}


            <Row >
               <Col>
                    <Card className="text-center" 
                        style={{ border: "none",
                        borderRadius: "10px"}}>
                    <div className="research-card-image" >
                        <Card.Header 
                            style={{
                                fontFamily: "Tahoma, Geneva, sans-serif", 
                                fontWeight: "normal",
                                fontSize: 18,
                                paddingTop: "15px",
                                paddingBottom: '0px'
                            }}> 
                            <p style={{lineHeight: "1.5", color: "#E9C46A"}}>
                                &ensp;Bridging Gender Inequalities in STEM Degree Programs | <span style={{color: "#FF69B4"}}>Georgia Tech x Avanti Fellows x Ledby Foundation</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src="https://www.brookings.edu/wp-content/uploads/2017/09/cue_reaching-for-the-sky_001.jpg" alt="=" />
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src={Mentor} alt="=" />
                        
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            The COVID-19 pandemic has brought about massive changes in workflows within the Indian education system. 
                            The rapidly changing digital landscape within school systems brings massive challenges within underserved and marginalized contexts, 
                            including but not limited to intermittent and shared access to computing devices and poor internet availability. Further, the pandemic 
                            has exposed the existing cracks within career coaching and mentorship programs that have been in place in India for the last few decades. 
                            In particular, gender inequalities have further been amplified since high school girls, especially in rural areas have almost no access to any career 
                            guidance based resources as they start thinking about applying to colleges and degree programs post high school. With final exams being cancelled repeatedly 
                            by the government and competitive entrance exams being postponed, the opportunities to apply to highly ranked colleges and pursue careers of their choice have also diminished significantly.
                            <br/><br/>
                            In response to these heightened problems, we (Avanti Fellows) partnered up with LedBy Foundation to initiate and organize a Girls Leadership and Mentorship program. For the first phase of this program, 36 students were selected from Jawahar Navodaya Vidyalaya Schools (JNVs), a system of central govt run schools for low-income students predominantly from rural areas in India. We interviewed 5 students to understand their perspectives on leadership, mentorship, their daily challenges etc. Based on those conversations we outlined the following goals/outcomes that we hoped to achieve by the end of the mentorship duration:<br/><br/>
                          1) Students will be able to articulate their career-related goals and the steps they would need to take to achieve their goals. <br/>
                          2) Students will be able to articulate at least one alternative career goal (Plan B) and the steps they will need to take to achieve that goal. <br/>
                          3) Students will have higher confidence with respect communicating with peers and in public spaces. <br/>
                          4) Students will be able to identify their stress and/or anger triggers and articulate at least one way in which they can manage their stress and/or anger. <br/>
                          5) Students will be able to articulate at least one way in which they can protect themselves in the online world and protect themselves in physical spaces. <br/>
                          <br/>
                          Following the framing of the above mentioned goals, I devised an internal evaluation and feedback strategy to evaluate the outcomes and effectiveness of the program and its underlying structure.
                          Learn more about this below! <br/><br/>

                          Press: <a href="https://blog.avantifellows.org/avanti-fellows-ledby-girls-leadership-and-mentorship-program-the-why-what-and-how-part-1-ef39379824cd" style={{textAlign: "left", color: "#E9C46A"}}>"Avanti Fellows — LedBy Girls’ Leadership and Mentorship Program: The Why, What, and How”</a>, Avanti Fellows Blog 
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://blog.avantifellows.org/avanti-fellows-ledby-girls-leadership-and-mentorship-program-the-why-what-and-how-part-1-ef39379824cd" style={{color: "#E9C46A", fontSize: 15}} >Read More</a></Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
          
    
            
        </Container>
        
    );
}
class ResearchItems extends React.Component{
    render () {
        return (
        <Research />
        );
        
    }
}
export default ResearchItems;