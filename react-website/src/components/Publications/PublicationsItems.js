import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import ICERI from "../../Documents/ICERI_1716.pdf";
import ISLS from "../../Documents/Camera_Ready_ISLS.pdf";


class PublicationsItems extends React.Component{
    render () {
        return (
            <div responsive="true" style={{paddingTop: "150px", paddingBottom: "100px", paddingLeft: "50px", paddingRight: "50px", backgroundColor: "#0e172a", maxWidth: "100%", color: "#E9C46A"}}>
                <Container>
                <h2>Conference Publications and Workshops</h2>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Understanding Teacher Perspectives and Experiences after Deployment of AI Literacy Curriculum in Middle-school Classrooms
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Prerna Ravi</b>, Annalisa J. Broski, Glenda Stump, Hal Abelson, Eric Klopfer, and Cynthia Breazeal
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            International Conference of Education, Research and Innovation (ICERI) 2023 <br/>
                            <a href={ICERI} style={{color: "#89CFF0"}}>paper</a>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            An Art Teacher and AI: Creating Adaptable Curriculum for AI Literacy
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Prerna Ravi</b>, Annalisa J. Broski, Glenda Stump, Angela Daniel, Hal Abelson, Eric Klopfer, and Cynthia Breazeal
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Play Make Learn Conference (PML) 2023 <br/>
                            <a style={{color: "#89CFF0"}} href="https://docs.google.com/presentation/d/1jKlniZ-1ycB9-Vg4QCmuumsKcaus4DP_YEPgBwupnIk/edit?usp=sharing">slides</a>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Constructing Dreams using Generative AI 
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Safinah Ali, <b style={{color: "white"}}>Prerna Ravi</b>, Daniella DiPaola, Randi Williams, and Cynthia Breazeal
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Under review <br/>
                            <a style={{color: "#89CFF0"}} href="https://arxiv.org/pdf/2305.12013">paper</a>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            The L@St Eight Years: A Review of Papers and Authors at Learning @ Scale
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Alex Duncan, Ana Rusch, <b style={{color: "white"}}>Prerna Ravi</b>, and David Joyner
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Proceedings of the Tenth ACM Conference on Learning @ Scale, 2023 <br/>
                            <a style={{color: "#89CFF0"}} href="https://dl.acm.org/doi/pdf/10.1145/3573051.3596192">paper</a>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Demystifying Text-to-Image Generation for K12 Educators
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Safinah Ali, <b style={{color: "white"}}>Prerna Ravi</b>, Katherine Moore, Cynthia Breazeal, and Hal Abelson
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            In Workshops and Tutorials: International Society of Learning Sciences (ISLS) 2023 <br/>
                            <a style={{color: "#89CFF0"}} href={ISLS}>paper</a> | <a style={{color: "#89CFF0"}} href="https://mitmedialab.github.io/genai-isls">workshop website</a>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Ethical by Design: Teaching Middle-school Students to Think Ethically About AI
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Glenda Stump, <b style={{color: "white"}}>Prerna Ravi</b>, Annalisa J. Broski, Angela Daniel, Hal Abelson, Eric Klopfer, and Cynthia Breazeal
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            AI Literacy Workshop at the CHI Conference on Human Factors in Computing Systems (CHI), 2023 <br/>
                            <a style={{color: "#89CFF0"}} href="https://drive.google.com/file/d/1JwTXsxGomRe-AqC84UodEAE_sEhuzuvC/view">paper</a>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            The Pandemic Shift to Remote Learning under Resource Constraints
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Prerna Ravi</b>, Azra Ismail, and Neha Kumar
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Proceedings of the ACM on Human-Computer Interaction (CSCW), 2021 <br/>
                            <a style={{color: "#89CFF0"}} href="https://dl.acm.org/doi/pdf/10.1145/3476055">paper</a> | <a style={{color: "#89CFF0"}} href="https://docs.google.com/presentation/d/1Ok6TA6GUYc3iHO5mnHr078Y5T__zRCQD_hbIGZYElpo/edit?usp=sharing">
                                slides</a> | <a style={{color: "#89CFF0"}} href="https://youtu.be/FVMyv0ulIAc?si=ZbsCjm9Xhfd9uHGS">video</a>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Dhruva Bansal, <b style={{color: "white"}}>Prerna Ravi</b>, Matthew So, Pranay Agrawal, Ishan Chadha, Ganesh Murugappan, and Colby Duke
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI), 2021 <br/>
                            <a style={{color: "#89CFF0"}} href="https://dl.acm.org/doi/pdf/10.1145/3411763.3451523">paper</a> | <a 
                            style={{color: "#89CFF0"}} href="https://docs.google.com/presentation/d/1Lt1bJzLIjnNoctLVvcjCjD2LOd3kXpOIRHSIuVFErYg/edit?usp=sharing">slides</a> | <a 
                            style={{color: "#89CFF0"}} href="https://youtu.be/WMFZVcey8FU?si=AtsfngD6aep2uyaH">video</a> <br/>
                            <div style={{color: "#FF69B4"}}>ACM CHI Student Research Competition Winner 2021</div>
                            </div>
                        </Col>
                    </Row>
                    <br/><br/>
                    <h2>Teaching</h2>
                    <br/>
                    <div style={{color: "#E9C46A"}}>
                        I have designed and led instruction for the following courses and workshops:
                    </div>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            6.S062 / MAS.S10 Generative Artificial Intelligence in K12 Education
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Instructor</b>, Massachusetts Institute of Technology, Fall 2023 <br/>
                            Enrollment: MIT & Harvard graduate and undergraduate students 
                            </div>

                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://mit-cml.github.io/gen-ai-fall-2023.github.io/">course website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Impact and Application of Generative Artificial Intelligence within Education
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Instructor</b>, Massive Open Online Course (MOOC), 2023 
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://iedra.uned.es/courses/course-v1:UNED+ImpactGAI_001+2023/about">MOOC website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            MAS Special Topic, Introduction to Text-to-Image Generation for K-12 Educators
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Instructor</b>, Massachusetts Institute of Technology, Fall 2023 <br/>
                            Enrollment: MIT & Harvard graduate and undergraduate students 
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://image-gen.github.io/">course website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            CS 1331, Object-Oriented Programming in Java
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Head Teaching Assistant</b>, Georgia Tech, 2019-2021 <br/>
                            Enrollment: Georgia Tech undergraduate students 
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Human Centered Design
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Instructor</b>, Code.X, 2021 <br/>
                            Enrollment: Code.X Human Centered Design Year 3 Summer Program 
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Creating a Generative AI Chatbot using MIT App Inventor
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Instructor</b>, U.S Congressional App Challenge, 2023 <br/>
                            Workshop in collaboration with App Inventor Foundation
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://www.congressionalappchallenge.us/">event website</a> | <a style={{color: "#89CFF0"}} href="https://docs.google.com/presentation/d/1P2TDeudjdCONyk3QwVDcwVh4OmkYsPPPdEULYOU9pLY/edit?usp=sharing">slides
                            </a> | <a style={{color: "#89CFF0"}} href="https://www.youtube.com/watch?v=QTHEtCWsw9g">video</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Tracking Carbon Footprint using MIT App Inventor
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Instructor</b>, Monterrey Institute of Technology and Higher Education in Mexico, 2023 <br/>
                            Workshop in collaboration with App Inventor Foundation and ELENA-Climate Academy
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://www.appinventorfoundation.org/news/high-school-girls-in-mexico-track-carbon-footprint">event press</a> | <a style={{color: "#89CFF0"}} href="https://docs.google.com/presentation/d/1qfF-xt6cH1S1rb8omjrO-52mTT-7zjl9FbIDB1VuBEg/edit?usp=sharing">slides</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Supporting Entrepreneurship through Mobile App Development using MIT App Inventor
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Guest Speaker and Instructor</b>, Roxbury Latin High School, Massachusetts, 2023 <br/>
                            Workshop in collaboration with MIT App Inventor
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://docs.google.com/presentation/d/1I3cdML6lVHegtV7impfPq6ZCp5JNRNSxBLjn_ZFpD-E/edit?usp=sharing">slides</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/><br/>
                    <h2>Invited Talks and Demos</h2>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            PopSign: Mobile games to Teach Sign Language
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Allison Benz, Spencer Montan, Byron Behm,Nisha Cerame, Ikemefuna Chukwunyerenwa, Loam Shin, Jinlan Li, Tony Ellis, Thad Starner, Saad Hassan, Abraham Glasser, Max Shengelia, <b style={{color: "white"}}>Prerna Ravi</b>, Sahir Shahryar, and Colby Duke
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Imagine RIT: Rochester Institute of Technology, 2022 <br/>
                            <a style={{color: "#89CFF0"}} href="https://www.popsign.org/">game website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Intuitive Calibration and Data Collection Procedures for ASL Recognition using Azure Kinect
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Prerna Ravi</b>, and Thad Starner
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Undergraduate Research Symposium at Georgia Tech, 2019 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Pose Estimation for ASL Recognition using OpenPose and Microsoft Kinect
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            <b style={{color: "white"}}>Prerna Ravi</b>, Peter McAughan, Theo Panagiotopoulos, Dhruva Bansal, and Thad Starner
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            Georgia Tech GVU Center Research Showcase, 2019 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h2>Selected Press</h2>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Georgia Tech College of Computing News
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            CS Major Earns Adobe Research Women-In-Tech Scholarship
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://www.cc.gatech.edu/news/645429/cs-major-earns-adobe-research-women-tech-scholarship">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Adobe Research News
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Women-in-Technology Scholarship: Sparking Curiosity
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://research.adobe.com/news/adobe-research-women-in-technology-scholarship-sparking-curiosity/">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            App Inventor Foundation News
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            High School Girls in Mexico Build App to Track Carbon Footprint
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://www.appinventorfoundation.org/news/high-school-girls-in-mexico-track-carbon-footprint">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Rochester Institute of Technology (RIT) News
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Parents of deaf children can more easily learn sign language thanks to powerful tech collaboration
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://www.rit.edu/news/parents-deaf-children-can-more-easily-learn-sign-language-thanks-powerful-tech-collaboration">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Google Research at I/O 2023
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            Students x Sign Language Recognition | Google Lab Sessions
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://www.youtube.com/watch?v=WC9x3jp_nV8">video link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#E9C46A"}}>
                            Avanti Fellows Blog
                            </div>
                            <div style={{color: "#f2ebdd"}}>
                            LedBy Girls’ Leadership and Mentorship Program: The Why, What, and How
                            </div>
                            <div style={{color: "#89CFF0"}}>
                            <a style={{color: "#89CFF0"}} href="https://blog.avantifellows.org/avanti-fellows-ledby-girls-leadership-and-mentorship-program-the-why-what-and-how-part-1-ef39379824cd">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                </Container>
            </div>
            
        );
    }
}
export default PublicationsItems;