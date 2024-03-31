import React, {useState} from 'react';
import {Col, Image, Row, Container, Card, Modal, Button} from 'react-bootstrap';
import {ZoomIn} from 'react-animation-wrapper';
import Marisol from "../../images/Marisol.png";
import Mentor from "../../images/Mentor.png";
import ImageGen from "../../images/ImageGen.png";
import AppInventor from "../../images/AppInventor.png";
import Aptly from "../../images/Aptly.png";
import NB from "../../images/NB.png";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DataScience1 from "../../images/DataScience1.jpeg"
import DataScience2 from "../../images/DataScience2.jpeg"


function Research() {


    return (
        <Container fluid="xxl" style={{marginTop: "50px", padding: "70px"}}>

            <p style={{color: "#E9C46A"}}>I have developed interactive learning systems, designed curriculum, and conducted ethnographic studies in the Global South in the past. I have elaborated on these under the respective tabs below:</p><br/>

             {/** *********************************MIT GenAI************** */}
            <Tabs
                defaultActiveKey="Interactive Learning Systems"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
            <Tab eventKey="Curriculum Design" title="Curriculum Design">
            <br/><br/>
            
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp; AI Image Generation Curriculum for K12 Educators | <span style={{color: "#FF69B4"}}>MIT RAISE</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: Generative AI, AI literacy, Ethics, Creativity, K12, Curriculum Design | <span style={{color: "#FF69B4"}}>Advisors: Hal Abelson, Cynthia Breazeal</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src={ImageGen} alt="" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            Text-to-image generation technologies such as Stable Diffusion, DALL-E and Midjourney have become extremely popular in recent 
                            months garnering interest from people even outside of the AI community, including educators and k12 students. These powerful 
                            tools are able to generate high quality visuals from natural language prompts and are open to access for anyone. 
                            These tools can have infinite creative potential when used by k12 learners and educators but are also accompanied by serious 
                            ethical implications. However, currently educators and their students don’t necessarily have a good understanding of how these 
                            tools work or how they can be possibly used or misused. <br/><br/>
                            
                            In this curriculum, we demystify text-to-image generative tools for 
                            k12 educators as well as learning science researchers, and work along with educators to design teaching lessons and curricula 
                            around bringing these tools to the classroom. The goal of the curriculum is for educators and k12 learning researchers to gain a 
                            clear understanding of how these generative tools work, and co-designing with them learning tools, lessons or curricula to teach k12 students about them.
                            Workshops in this curriculum typically culminate in a project-based activity drawing from constructionism and computational action to expose participants to culturally-sustaining, 
                            hands-on methods of teaching about text-to-image generative platforms, and empower learners to critically and creatively engage text-to-image platforms as tools for communication 
                            and critical engagement with media. <br/><br/>

                            This curriculum has been piloted with K12 educators and learning science researchers through the following courses and workshops:<br/> 
                            • <a href="https://mit-cml.github.io/gen-ai-fall-2023.github.io/" style={{color: "#E9C46A"}} >MIT Special Topics Course Fall 2023: Generative AI in K12 Education </a> <br/>
                            • <a href="https://iedra.uned.es/courses/course-v1:UNED+ImpactGAI_001+2023/about" style={{color: "#E9C46A"}} >MOOC on Impact and application of Generative Artificial Intelligence within Education </a> <br/>
                            • <a href="https://mitmedialab.github.io/genai-isls/" style={{color: "#E9C46A"}} >ISLS Workshop: Demystifying Text-to-image Generation for K12 Educators </a><br/>
                            • <a href="https://image-gen.github.io/" style={{color: "#E9C46A"}} >MIT IAP Seminar 2023: Introduction to Text-to-Image Generation for K12 Education </a><br/>

                            
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://mitmedialab.github.io/GenAI-Lab/curriculum" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            {/** *********************************MIT RAICA************** */}
            
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp; MIT Responsible AI for Computational Action (RAICA) Curriculum | <span style={{color: "#FF69B4"}}>MIT RAISE</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: AI literacy, Ethics, Creativity, K12, Curriculum Design | <span style={{color: "#FF69B4"}}>Advisors: Hal Abelson, Cynthia Breazeal, Eric Klopfer</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src="https://media.licdn.com/dms/image/D5622AQGpMeQPRUe6zQ/feedshare-shrink_2048_1536/0/1692371515181?e=2147483647&v=beta&t=8yg72ppvfeU7K6ZORluGf3_-JbAHyQirou3ISFQoklo" alt="" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            The Responsible AI for Computational Action curriculum consists of project-based learning modules that prepare middle-school students to 
                            be informed consumers and ethical producers of artificial intelligence (AI). At its core, the curriculum aims to be socially impactful, 
                            empowering, creative, and inclusive for students and teachers, with learning objectives that focus on increasing students’ capacity and 
                            develop their ability to use artificial intelligence, design thinking, ethical frameworks, and computational thinking to design thoughtful solutions to real problems. <br/><br/>
                            RAICA consists of five middle school modules, one module for each of the 5 Big Ideas in AI: 
                            <table>
                                <tr>
                                    <th>Big Idea</th>
                                    <th>RAICA Module</th>
                                </tr>
                                <tr>
                                    <td>Perception</td>
                                    <td>Social Robots</td>
                                </tr>
                                <tr>
                                    <td>Natural Interaction</td>
                                    <td>Real Talk with Robots</td>
                                </tr>
                                <tr>
                                    <td>Learning</td>
                                    <td>Designing for Discovery</td>
                                </tr>
                                <tr>
                                    <td>Representation & Reasoning</td>
                                    <td>Reinforcement Learning</td>
                                </tr>
                                <tr>
                                    <td>Societal Impact</td>
                                    <td>Capstone</td>
                                </tr> 
                            </table>
                            <br/>

                            The curriculum is also supplemented with extensive teacher professional development (PD) resources to support 
                            teachers (with no prior technical/AI background) in implementing and adapting the curriculum within their unique classroom contexts.
                            
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://education.mit.edu/project/raica-responsible-ai-for-computational-action/" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            
            {/** *********************************MIT Data Science************** */}
            
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp; K12 Data Science Curriculum using Micro:bit Sensors and App Inventor | <span style={{color: "#FF69B4"}}>MIT RAISE | Day of AI 2024</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: Data Science, AI literacy, Micro:bit sensors, K12, Curriculum Design, Mobile applications | <span style={{color: "#FF69B4"}}>Advisors: Hal Abelson, Cynthia Breazeal</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src={DataScience1} alt="" />
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src={DataScience2} alt="" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            Data science is emerging as a crucial 21st-century competence for students entering the workforce. 
                            It touches many areas of professional practice, from arguing from evidence for social change to building artificial intelligence models to accomplish important tasks. 
                          
                            But how do we involve middle and high school students in authentic experiences with the data science pipeline? Challenges include curricular — how to blend math and statistical concepts 
                            with computational thinking in the same lesson? Challenges include learner engagement — how to steer students toward real-world datasets they find personally meaningful? 
                            And they include logistical — how to find low-cost, accessible materials to collect data, visualize and share it, clean data, and analyze it with traditional statistical models and AI tools? 
                            
                            <br></br>
                            <br></br>
                            
                            This data science curriculum, based on students’ engineering-design process using the MIT App Inventor platform, aims to scaffold students in undertaking data collection, cleaning, visualizing, and analysis.
                            We aim to engage students and educators in possible solutions to environmental data challenges through engagement with project-based modules involving collecting live sensor data with the App Inventor data science toolkit.
                            The curriculum modules draw from constructionism and computational action to expose learners to hands-on methods that empower them to critically and creatively use data in evidence-based arguments. Students lead their own inquiry on such topics as optimizing a school garden, observing environmental change, or promoting equity in the community. 
                            Educator literacy and professional development in the area of data science are also key. 
                            
                            <br></br>
                            <br></br>

                            The data science activities can serve as rich frameworks to align to learning goals such as <a href="https://www.nextgenscience.org/" style={{color: "#E9C46A", fontSize: 15}} >NGSS</a> engineering design practices: developing models, producing data as part of an investigation, and using mathematical and computational representations of phenomena to support claims. 
                            The activities also meet more generalized contemporary learning objectives: 
                            <br></br>
                            <br></br> 
                            <ul>
                            <li><b>Data Literacy:</b> Students interpret data, recognize patterns and anomalies, and understand the significance of data cleaning for accurate analysis. </li>
                            <li><b>AI Literacy:</b> Learners see data science as a gateway into the AI-data pipeline. Understanding the nuances of data science is a foundation for navigating the capabilities of artificial intelligence. </li>
                            <li><b>Critical Thinking:</b> Students think critically when assessing what LLMs get right and where they may falter in data analysis. Encouraging them to scrutinize AI-generated responses exposes them to the nuanced nature of AI, where flawless explanations can coexist with incorrect calculations when analyzing data.</li>
                            <li><b>Problem-Solving:</b> By working on projects relevant to their communities, students tackle real-world problems, applying data science to derive meaningful solutions.</li> 
                            <li><b>Technical Skills:</b> Learners gain hands-on experience with data science tools and practices, building technical skills in a real-world context. They also learn to use LLMs (along with prompt engineering) for practical applications like data analysis.</li>
                            <li><b>Scientific Communication:</b> Students use the mobile charting function within App Inventor to convey their findings effectively, enhancing their data storytelling abilities.</li> 
                                
                            </ul>


                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="#" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            
            </Tab>
             {/** *********************************Sparki************** */}
             <Tab eventKey="Interactive Learning Systems" title="Interactive Learning Systems">
             <br/><br/>
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp; Sparki: An Interactive Learning Companion for AI Education | <span style={{color: "#FF69B4"}}>MIT Media Lab</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: Generative AI, Design Thinking, Creativity, K12, Interactive Learning Systems | <span style={{color: "#FF69B4"}}>Advisor: Cynthia Breazeal</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src="https://dam-prod2.media.mit.edu/thumb/2023/03/29/sparki-code.PNG.1400x1400.png" alt="" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            S.P.A.R.K.I. (Students' Personal Assistant for Reinforcing Knowledge and Innovation) is a GPT-powered chatbot 
                            that scaffolds children's work on AI projects. Sparki provides programming assistance, gives students feedback on their ideas, 
                            and socially mediates creative thinking. <br/><br/>
                            
                            <b>What can Sparki do?</b> <br/>
                            • Creative Companion: We position Sparki as a collaborator with students rather than a mentor or tutor. It promotes creative thinking by providing feedback on students’ work and showing interest in students’ ideas. <br/>

                            • Coding Assistant: Sparki uses GPT3 to deliver personalized tutorials and discuss example programs in the Scratch programming language. <br/>

                            • AI Design Feedback: It can discuss design goals, potential impacts, and the relevant stakeholders of AI projects – encouraging students’ critical thinking. <br/><br/>

                            <b>Design and Safety Considerations</b> <br/>
                            We took several considerations into account to ensure the well-being of the intended children users of Sparki:<br/>

                            • Avoiding overreliance. Relies on a vetted knowledge base. Warns users when answers are totally generated (and potentially inaccurate).<br/>
                            • Avoiding misuse. The functionality of GPT is limited to short discourses about programming and AI.<br/>
                            • Inclusivity for kids. GPT is very sensitive to spelling and grammar mistakes. Use spell-check tools to clean up their text.<br/>
                            • Protecting privacy. Warns users not to input personal information that may be collected by GPT.


                            
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://www.media.mit.edu/projects/sparki-ai/overview/" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>

            
            {/** *********************************MIT App Inventor************** */}
            
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp; MIT App Inventor: Mobile App Programming Environment | <span style={{color: "#FF69B4"}}>MIT CSAIL</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: Design Thinking, Interactive Learning Systems, Computational Thinking, Education Outreach | <span style={{color: "#FF69B4"}}>Advisor: Hal Abelson</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src={AppInventor} alt="" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            MIT App Inventor is an intuitive, visual programming environment that allows everyone – even children – to 
                            build fully functional apps for Android phones, iPhones, and Android/iOS tablets. Those new to MIT App 
                            Inventor can have a simple first app up and running in less than 30 minutes. The tool uses blocks-based programming to 
                            facilitate the creation of complex, high-impact apps in significantly less time than traditional programming environments. 
                            The MIT App Inventor project seeks to democratize software development by empowering all people, especially young people, 
                            to move from technology consumption to technology creation. <br/><br/>

                            With over a million unique monthly visitors from 195 countries collectively creating almost 30 million apps, MIT App Inventor changes the 
                            way the world creates apps and the way that kids learn about computing. It leverages the core principles of design thinking, computational thinking, and computational action. <br/><br/>

                            I have designed curriculum and tools for and led instruction for the following workshops associated with MIT App Inventor: <br/>
                            · Creating a Generative AI Chatbot using MIT App Inventor: U.S Congressional App Challenge 2023 <br/>
                            · Tracking Carbon Footprint using MIT App Inventor: Monterrey Institute of Technology and Higher Education in Mexico in collaboration with ELENA-Climate Academy <br/>
                            · Supporting Entrepreneurship through Mobile App Development using MIT App Inventor: Guest Speaker at the Roxbury Latin High School, Massachusetts  <br/>

                            
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://appinventor.mit.edu/" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            {/** *********************************Aptly************** */}
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp;Aptly: Generative AI Platform for Mobile App Development  | <span style={{color: "#FF69B4"}}>MIT CSAIL</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: Generative AI, Design Thinking, Interactive Learning Systems, Computational Thinking | <span style={{color: "#FF69B4"}}>Advisor: Hal Abelson</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "10px"}}
                             src={Aptly} alt="" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            MIT Aptly is a tool that uses the technology of large language models to automatically generate 
                            mobile apps from written or spoken natural language descriptions. Similar to Github’s Copilot, 
                            it is based on OpenAI’s Codex, a specially tuned version of GPT-3.  
                            Aptly lets people create programs without requiring any use of coding or knowledge of programming.  
                            For example, one can tell Aptly by speaking or typing: <br/><br/>

                            <i>Make an app with a text box, a list of six languages and a button that says “translate.” 
                            When the button is clicked, translate the text into the selected language and show the translation.</i> <br/><br/>

                            The result is a complete functioning app for Android or iPhone.  The app has a field for user input and six buttons 
                            labeled English, Spanish, French, German, Italian, Japanese.  Pressing one of the buttons translates the input to the 
                            corresponding language. Aptly’s app generation is more than just a syntactic transformation of the input text. Aptly draws 
                            upon a large body of code with which it has been trained to provide a context for its app creation. In the above example, 
                            Aptly has independently chosen the six languages, something that was not specified in the input text. <br/><br/>
                            
                            As most large language models do, Aptly’s performance depends on the input given to OpenAI’s Codex. These inputs are 
                            referred to as prompts. Aptly crafts a prompt by providing a set of example pairs (a textual description of an example app 
                            and its corresponding code) along with the description of the desired app. Such prompt engineering is referred to as few-shot 
                            prompts. In order to optimize Aptly’s performance, when selecting example pairs, we choose the ones that are semantically close 
                            to the description of the desired app.  <br/><br/>
                            Aptly poses challenges for research in computational thinking education for K-12 students.  Much of the present-day curriculum 
                            emphasizes implementing computational artifacts using text-based coding with Python or block-based coding with Scratch or 
                            App Inventor. Our research focuses on indentifying the foundations for that curriculum when tools like Aptly are common and the transition from ideas 
                            to running programs can be accomplished automatically.

                            
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://appinventor.mit.edu/blogs/hal/2022/03/21/Aptly" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            {/** *********************************NB************** */}
            
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp;NB: Social Annotation Platform for Large-scale Classroom Collaboration | <span style={{color: "#FF69B4"}}>MIT CSAIL</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: Social Computing, Collaboration, Interactive Learning Systems, Online Learning | <span style={{color: "#FF69B4"}}>Advisor: David Karger</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "5px"}}
                             src={NB} alt="" />
                        </ZoomIn>

                        </Col>

                        <Col md={9}>
                        
                            <Card.Text style={{color: "#f2ebdd", textAlign: "left", fontSize: 14, margin: '10px'}}>
                            The Nota Bene (NB) web application is an open-source social annotation tool. The tool creates an educational environment
                            that enables both synchronous and asynchronous collaborative annotation of
                            online documents. NB is used in hundreds of university courses and includes
                            more than 40,000 registered student users. The main feature of NB is the in-
                            place structure, this feature gives users the ability to directly annotate course
                            content. Course content (PDF, HTML, or video file) is uploaded to the NB
                            website by instructors.<br/><br/>
                            Serving as a discussion forum in the document margins, NB lets users ask and answer questions
                            about the reading material <i>as they are reading. </i>
                            Students annotate content by highlighting passages in the course reading
                            and adding a post by typing a text field that appears in the margins, as
                            seen in Figure 1. Classmates are encouraged to reply to other students’ posts
                            and to answer any posted questions. NB posts are organized into threads,
                            which consist of a starting post or question followed by all the replies made
                            by students and instructors.<br/><br/>

                            The in-place structure of the NB tool allows students to interact with each
                            other while they are reading the course material and provides context to the
                            discussion. This structure has been shown to be beneficial for learning 

                            
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://nb.mit.edu/about" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            
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
                            <p style={{color: "#E9C46A"}}>
                                &ensp;Using Sign Language Recognition to Develop Educational Games for Deaf Children | <span style={{color: "#FF69B4"}}>Google Research x Georgia Tech</span>
                            </p>
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: Machine Learning, Accessibility, Interactive Learning Systems | <span style={{color: "#FF69B4"}}>Advisor: Thad Starner</span>
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
                            children and deaf children born to Deaf parents. During my time at Google Research and Georgia Tech, I developed two educational games for the same:
                            <br/><br/>
                            CopyCat is a game
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
                            PopSign is an educational bubble shooter game developed by the Georgia Institute of Technology and RIT/NTID’s Center on Access Technology. The game teaches over 500 American Sign Language (ASL) signs based on the MacArthur-Bates Communicative Development Inventories, which are the first concepts used to teach a language to a child.
                            PopsignAI combines the gameplay of Popsign with sign language recognition, being developed from over 220,000 total examples of 250 signs collected by the Deaf Professional Arts Network from 47 Deaf signers for whom ASL is their first language. 
                            Find more about PopSign over <a href="https://www.popsign.org/" style={{color: "#E9C46A"}}>here</a>.
                            {/* Publications: <br/>
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
                            3) <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Peter McAughan, Theo Panagiotopoulos, Dhruva Bansal, and Thad Starner. <span style={{color: "#E9C46A"}}>Pose Estimation for ASL Recognition using OpenPose and Microsoft Kinect.</span> Georgia Tech GVU Center Research Showcase 2019 */}
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://www.researchgate.net/profile/Prerna-Ravi/publication/351426391_CopyCat_Using_Sign_Language_Recognition_to_Help_Deaf_Children_Acquire_Language_Skills/links/63113e4b1ddd4470212ad1d5/CopyCat-Using-Sign-Language-Recognition-to-Help-Deaf-Children-Acquire-Language-Skills.pdf" style={{color: "#E9C46A", fontSize: 15}} >Read More</a>
                            </Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            <br/> <br/>
            </Tab>
            <Tab eventKey="Ethnographic Studies" title="Ethnographic Studies">
            {/** TANDEM----------------------------------------------------- */}
            <br/><br/>
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
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: ICTD, Global South, Ethnography, Education, Online Learning | <span style={{color: "#FF69B4"}}>Advisor: Neha Kumar</span>
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
                            internet. <br/><br/>
                            
                            In this rapidly evolving digital landscape, we investigated how educational institutions (schools and
                            non-profit organizations) working with underserved populations in India are managing the transition to online
                            or remote learning. We conducted twenty remote interviews with students, teachers, and administrators from
                            underserved contexts across India. We found that online learning efforts in this setting relied on a resilient
                            human infrastructure comprised of students, teachers, parents, administrators, and non-profit organizations to
                            help navigate and overcome the limitations of available technical infrastructure. Our research aims to articulate
                            lessons for educational technology design in the post-COVID period, outlining areas for improvement in
                            the design of online learning platforms in resource-constrained settings, and identifying elements of online
                            learning that could be retained to strengthen the education system overall. 
                            <br/><br/>
                            {/* Publication: <a href="https://static1.squarespace.com/static/59f549a3b7411c736b42936a/t/617ea93c74f162008cf0c8d2/1635690826411/Remote+Learning.pdf3" style={{textAlign: "left", color: "#E9C46A"}}>"The Pandemic Shift to Remote Learning under Resource Constraints"</a> | <b style={{color: "#ADFF2F"}}>CSCW 2021</b><br/>
                            <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Azra Ismail, and Neha Kumar
                            
                            <br/><br/>
                            Video: <a href="https://www.youtube.com/watch?v=FVMyv0ulIAc" style={{textAlign: "left", color: "#E9C46A"}}>Featured on ACM SIGCHI YouTube Channel</a>

                            <br/><br/>
                            Recognition: <b style={{color: "#ADFF2F"}}> Winner of the 2021 Sam Nunn School of International Affairs for Global Development Paper Competition at Georgia Tech </b> */}
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
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: ICTD, Global South, Participatory Design, Ethnography, Education | <span style={{color: "#FF69B4"}}>Advisor: Betsy Disalvo</span>
                            </p>
                        </Card.Header>
                        

                      <Container fluid>

                      <Row>

                        <Col md={3}>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src={Marisol} alt="=" />
                        {/* <Card.Img style={{objectFit: "contain", padding: "20px"}}
                             src="https://dl.acm.org/cms/attachment/64dea255-2f3d-4336-b568-2ffaa06be771/chi20-202-fig1.jpg" alt="=" /> */}
                        
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
                            <br/><br/>

                            
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
                            <p style={{ color: "#89CFF0", fontSize: 14}}>
                                &ensp;Tags: ICTD, Global South, Ethnography, Education | <span style={{color: "#FF69B4"}}>Advisor: Neha Kumar</span>
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

                          {/* Press: <a href="https://blog.avantifellows.org/avanti-fellows-ledby-girls-leadership-and-mentorship-program-the-why-what-and-how-part-1-ef39379824cd" style={{textAlign: "left", color: "#E9C46A"}}>"Avanti Fellows — LedBy Girls’ Leadership and Mentorship Program: The Why, What, and How”</a>, Avanti Fellows Blog  */}
                            </Card.Text>

                            </Col>
                      </Row>
                      </Container>
                            <Card.Footer><a href="https://blog.avantifellows.org/avanti-fellows-ledby-girls-leadership-and-mentorship-program-the-why-what-and-how-part-1-ef39379824cd" style={{color: "#E9C46A", fontSize: 15}} >Read More</a></Card.Footer>

                    </div>               
                    </Card>
               
                </Col>
            </Row>
            </Tab>
            </Tabs>

          
    
            
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