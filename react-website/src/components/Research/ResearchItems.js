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

function ASLModal(props) {
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
        fontSize: 15
    }
    return (
    <div onClick={e => e.stopPropagation()}>
      <Modal
        {...props}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        scrollable
        style={{height: "auto"}}
      >
        <Modal.Header style={{backgroundColor: "black", border: 0}} closeButton>
          <Modal.Title 
            id="contained-modal-title-vcenter" style={{color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif", fontSize: 22, textAlign: "center"}}>
            CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable style={{width: "100%", 
        backgroundColor: "black",
        backgroundSize: "100%",
        color: "#f2ebdd",
        fontSize: 17,
        marginTop: 0,
        backgroundImage: "url(" + BlackOne + ")"}}>
        <Container className="research-container" responsive="true">
        <Row>
                <Container responsive="true">
                    <br/>
                    <div style={fontFormat} responsive="true">
                    
                        <div style={{color: "#E9C46A", fontSize: 18}}>Problem Space:</div>
                        <Image width="45%" src={Stats} style={{float: "right"}}/>
                        {/* <figcaption style={{fontSize: 14, color: "#E9C46A"}}>Statistics for LDS</figcaption> */}
                        <div responsive="true">
                        Over 95% of deaf children are born to hearing parents who do not know American Sign Language (ASL) or have 
                        very low levels of proficiency. Unlike hearing children of speaking parents or deaf children of signing parents, 
                        these children often lack adequate access to language at home, which is necessary for developing linguistic skills. 
                        Many of these deaf children only receive limited exposure to ASL from signing at school or existing ASL games that 
                        focus on language comprehension rather than phrase generation. If left untreated, a lack of exposure to any language, 
                        including sign language, can lead to significantly weaker working memory. These effects are especially consequential 
                        during the critical period of language development, which is between the ages of two and five. As a result, many 
                        pre-lingually deafened children can only repeat one or two signs in a row compared to four to six signs for children 
                        with deaf parents. This deficiency of short-term memory and other language skills can lead to Language Deprivation Syndrome (LDS), 
                        a condition with poor lifelong outcomes, including a 2-7x increase in mental health problems, 50% unemployment rate, higher rates of 
                        physical and sexual abuse, and a 3-30x increase in suicide rates.
                        </div>
                        <br></br>
                        <div responsive="true">
                        <div style={{color: "#E9C46A", fontSize: 18}}>Solution:</div>
                        Children who express themselves in ASL can significantly increase their short term memory, reducing the risk of LDS. Thus, 
                        through the Center for Accessible Technology in Sign, I am a part of the team developing CopyCat, an interactive and entertaining 
                        game that displays potential for helping deaf children with short term language memory acquisition. The game presents the child with 
                        a scene and prompts them to describe it to the mascot of the game using ASL. The game then uses an ASL recognizer to decide if the 
                        description is correct and, if so, allows the child to advance to the next scene. As a result, the game's effectiveness depends heavily 
                        on the accuracy with which it recognizes sentences as correct or incorrect. To test the effects of the game, previous studies purposefully 
                        tested vocabulary not in CopyCat to help differentiate general memory skill acquisition versus learning the game. They found that the 
                        game significantly increases a child's score on three crucial measures of working memory—language generation, reception, and sentence 
                        repetition. We hope that adapting CopyCat to off-the-shelf hardware will provide a valuable tool for educators to help improve children's language skills.
                        </div>
                        <br/>
                        <div style={{textAlign: "center", opacity: 1}}>
                        <Image style={{textAlign: "center"}} width="90%" src="https://dl.acm.org/cms/attachment/02a683af-8724-4576-ac65-74dcb9bc44fb/chi21extendedabstracts-170-fig3.jpg"/>
                        <figcaption style={{fontSize: 14, color: "#E9C46A"}}>Pose estimation with AlphaPose (left, sign ”above”), Azure Kinect (middle, sign ”in”), and MediaPipe (right, sign ”alligator”) showing difficult signs.</figcaption>
                        </div>
                        <br/>
                        <div responsive="true">
                        Until now, CopyCat has relied on expensive and unscalable hardware such as custom gloves, accelerometers, and kiosks to achieve sign language recognition accuracy 
                        sufficient enough to verify the children's signing. As a result of these high costs, the low resolution of previous cameras, and lack of pose estimators, CopyCat 
                        was inaccessible to most. However, with the advent of pose estimation systems such as AlphaPose, Azure Kinect, and Google MediaPipe, along with improvements in 
                        camera resolution through devices such as the Azure Kinect and Android tablets, the goal of deploying CopyCat on off-the-shelf systems has now become viable. 
                        Using Hidden Markov Models (HMMs), user independent word accuracies were 90.6%, 90.5%, and 90.4% for AlphaPose, Kinect, and MediaPipe, respectively. 
                        Transformers, a state-of-the-art model in natural language processing, performed 17.0% worse on average. Given these results, we believe our current HMM-based 
                        recognizer can be successfully adapted to verify children's signing while playing CopyCat.
                        </div>
                        <br></br>
                        {/* <div responsive="true">
                            Presentations:  <a style={{color: "#E9C46A"}} href="http://www.undergradresearch.gatech.edu/spring-symposium">
                             <u>Undergraduate Research Symposium at Georgia Tech (2019)</u></a>
                        </div> */}
                        
                    </div>
                </Container>
                </Row>
        <br></br>
        </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", border: 0}}>
          <Button style={{backgroundColor: "black", border: 0, color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif"}} onClick={props.onHide}>Close Project</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }

function TandemModal(props) {
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
    }
    return (
    <div onClick={e => e.stopPropagation()}>
      <Modal
        {...props}
        size="xl"
        keyboard
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter-two"
        scrollable
        style={{height: "auto"}}
      >
        <Modal.Header style={{backgroundColor: "black", border: 0}} closeButton>
          <Modal.Title 
            id="contained-modal-title-vcenter-two" style={{color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif", fontSize: 22, textAlign: "center"}}>
            The COVID-19 Pandemic Shift to Remote Learning under Resource Constraints
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable style={{width: "100%", 
        backgroundColor: "black",
        backgroundSize: "100%",
        color: "#f2ebdd",
        fontSize: 15,
        marginTop: 0,
        backgroundImage: "url(" + BlackOne + ")"}}>
        <Container className="research-container" responsive="true">
        <Row>
                <Container responsive="true">
                    <br/>
                    <div style={fontFormat} responsive="true">
                    <div style={{color: "#E9C46A", fontSize: 18}}>Problem Space:</div>
                        <Image width="45%" src={CSCW} style={{float: "right"}}/>
                    <div responsive="true">
                    The field of Human-Computer Interaction for Development (HCI4D) has long been interested in the design of educational technology in underserved settings. This work is
                    motivated by efforts to improve access to quality education, such as by delivering learning content that is designed to be locally relevant, providing after-school education, and enabling
                    more hands-on and technical education. Despite progress in this area, schools have been
                    slow to take up technology within and beyond the classroom due to the high initial capital and
                    time investment. However, the COVID-19 pandemic has brought traditional learning to a
                    standstill, and forced the adoption of technology and associated investments involved. This unprecedented change gives us an opportunity to examine the efforts taken by teachers, students, and non-governmental organizations (NGOs) to navigate the resource constraints that accompany adoption of information and communication technologies (ICTs) in marginalized contexts. The uncertainties due to the pandemic also serve as a catalyst for iterative and situational workarounds
                    to make sense of the newly incorporated digital infrastructure.
                        </div>
                        <br></br>
                        <div responsive="true">
                        In an effort to control the COVID-19 pandemic and practice physical distancing, governments
                        across the world closed down schools and other educational institutions. As the pandemic
                        continued, schools began to move to online modes of learning to continue delivering education.
                        Though the move to online learning was aimed at preventing loss in learning, it has also had severe consequences for those in resource-constrained contexts. Even as this transition has expanded
                        learning opportunities for many, it has worsened inequalities across class, gender, and location
                        (and associated intersections such as race or caste), across the globe. 
                        </div>
                        <br></br>

                        <div responsive="true">
                        <div style={{color: "#E9C46A", fontSize: 18}}>Solution:</div>
                        <Image width="40%" src="https://c.files.bbci.co.uk/1680C/production/_113527129_gettyimages-1217239853.jpg" style={{float: "left", paddingRight: "5px"}}/>
                        In order to address these challenges, I studied the transition to online learning by educational institutions working with underserved
                        communities in India, where these tensions have become highly visible. On 25th March, 2020, India
                        announced a nationwide 21-day lockdown to stem the spread of the pandemic. This lockdown was
                        extended till May, and then again till June, with conditional opening in regions that had contained
                        the spread. Schools remained closed when I finished collecting data. I conducted twenty remote
                        interviews with students, teachers, school administrators, and educational non-profit organizations
                        working in underserved settings primarily across the state of Maharashtra, India. I investigated
                        how these different stakeholders within the education system migrated to online learning platforms,
                        the challenges they grappled with in doing so, and the creative solutions they came up with to
                        navigate through resource constraints and reach communities on the margins.
                        </div>
                        <br/>
                        <div responsive="true">
                        My research draws on literature in three areas. First, I built on a rich body of HCI researchon the design of technology 
                        for education in resource-constrained settings. Second, I linked to prior efforts to use ICTs to respond to and make meaning 
                        during a crisis. Finally, I built on prior research that outlines the human infrastructures that help navigate challenges 
                        around digital access and literacy in resource-constrained environments like the one I studied.
                        In my research paper published at CSCW 2021, I detail my findings on the transition to online learning, the response
                        of students, teachers, and parents to the transition, challenges encountered in the process, and
                        workarounds or solutions that stakeholders arrived at. I also discuss three key takeaways
                        for future efforts. First, I highlight the massive digital transformation that the pandemic has
                        brought about across the Indian education system and a shift in attitudes towards educational
                        technology. Second, I emphasize the critical role of human infrastructures in navigating the
                        resource constraints that accompany the above transition. Third, I offer design considerations
                        for educational technology in resource-constrained settings, the long-term sustainability of these
                        efforts, and spaces for technology to strengthen the existing education ecosystem.
                        </div>
                        {/* <div responsive="true">
                            Awards:  <a style={{color: "#E9C46A"}} href="http://www.undergradresearch.gatech.edu/content/presidents-undergraduate-research-awards">
                             <u>President's Undergraduate Research Award (PURA) (2020)</u></a>
                        </div> */}
                        
                    </div>
                </Container>
                </Row>
        <br></br>
        </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", border: 0}}>
          <Button style={{backgroundColor: "black", border: 0, color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif"}} onClick={props.onHide}>Close Project</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }

  function CatModal(props) {
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
    }
    return (
    <div onClick={e => e.stopPropagation()}>
      <Modal
        {...props}
        size="xl"
        keyboard
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter-two"
        scrollable
        style={{height: "auto"}}
      >
        <Modal.Header style={{backgroundColor: "black", border: 0}} closeButton>
          <Modal.Title 
            id="contained-modal-title-vcenter-two" style={{color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif", fontSize: 22, textAlign: "center"}}>
            Co-Designing Parent-Education ICTs with Hispanic Immigrants and Education System
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable style={{width: "100%", 
        backgroundColor: "black",
        backgroundSize: "100%",
        color: "#f2ebdd",
        fontSize: 15,
        marginTop: 0,
        backgroundImage: "url(" + BlackOne + ")"}}>
        <Container className="research-container" responsive="true">
        <Row>
                <Container responsive="true">
                    <br/>
                    <div style={fontFormat} responsive="true">
                    <div style={{color: "#E9C46A", fontSize: 18}}>Problem Space:</div>
                        <Image width="35%" src="https://dl.acm.org/cms/attachment/64dea255-2f3d-4336-b568-2ffaa06be771/chi20-202-fig1.jpg" style={{float: "right", paddingLeft: "5px"}}/>
                    <div responsive="true">
                    Since 2017, over 165 million people have immigrated to high-income countries, like the United States, in search of a better future for themselves and their children. However, immigrant parents—especially those from a low-income background—usually struggle to ensure that their children harness educational opportunities for achieving such aspired future. Information and Communication Technologies (ICTs) could support these parents by facilitating access to learning-related information for enriching children’s academic experience. The field of Human-Computer Interaction (HCI) has a growing interest in how technology might support parents. Much of this work, however, has focused on parents from dominant groups (e.g., middle-class natives) and their interaction with social media and mobile technologies for non-educational purposes (e.g., finding support, protecting their children’s privacy, and others). 
                        </div>
                        <br></br>
                        <div responsive="true">
                        For many parents from non-dominant groups in the United States (e.g., ethnic minorities), engaging in ways that allow their children to achieve such success is still a challenge. 
                        Despite Latinos’ prevalent presence in the U.S., they face a historically persistent low academic achievement rate. Barriers like language and cultural differences stand in the way. Digital technologies have the potential to offer the needed support by enhancing parents’ opportunities to access relevant information. However, to do so, the design of such technologies has yet to enable parents to actively participate with regards to what they find meaningful and valuable, and broaden their access to diverse voices and perspectives. 
                        </div>
                        <br></br>

                        <div responsive="true">
                        <div style={{color: "#E9C46A", fontSize: 18}}>Solution:</div>
                        <Image width="35%" src="https://dl.acm.org/cms/attachment/5aede3e4-6dc2-4f91-9efe-1daf48caf11b/chi20-202-fig2.jpg" style={{float: "left", paddingRight: "10px"}}/>
                        To tackle these pending design challenges, we focus on the case of Spanish-speaking low-income Latino parents and identify meaningful aspects of their everyday practices that can inform the design of technologies for this group. 
                        Drawing from qualitative methods, we explore the design of ICTs for diversifying the strategies that low-income Hispanic immigrant parents use to effectively engage in their children's education, given their information needs, cultural practices and socio-economic context.
                        </div>
                        <br/>
                        <div responsive="true">
                        We conducted ethnographic studies and participatory design workshops with Latino parents as actors in a sociotechnical network, interacting with a wide range of other actors—including technology—to form and maintain information channels for better supporting their children’s education. Our goal was to illuminate ways for technology to diversify and strengthen these information channels, so that parents can access more and richer resources to shape their children’s academic life.
                       
                        We also examined the information work that bilingual parent-education liaisons perform to create connections towards assisting immigrant parents in the United States. As part of formal and informal educational institutions, liaisons operate between different social worlds—within and beyond the domain of education—to maximize immigrant parents’ engagement in their children’s academic lives. Drawing upon ethnographic fieldwork with low-income Latino immigrants and their liaisons, we explored how liaisons leverage technology, content, and people to align these worlds; bringing them closer to mutual understanding. This analysis provides a rich and unique perspective of the work that successfully engages immigrant parents with their children’s education, as well as the tensions that challenge that engagement. This understanding of the work that liaisons do with and across seams provides insights to inform design directions for technology that could facilitate and amplify their efforts. 
                        </div> 
                        
                    </div>
                </Container>
                </Row>
        <br></br>
        </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", border: 0}}>
          <Button style={{backgroundColor: "black", border: 0, color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif"}} onClick={props.onHide}>Close Project</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }

  function AvantiModal(props) {
    var fontFormat = {
        fontFamily: "Tahoma, Geneva, sans-serif",
    }
    return (
    <div onClick={e => e.stopPropagation()}>
      <Modal
        {...props}
        size="xl"
        keyboard
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter-two"
        scrollable
        style={{height: "auto"}}
      >
        <Modal.Header style={{backgroundColor: "black", border: 0}} closeButton>
          <Modal.Title 
            id="contained-modal-title-vcenter-two" style={{color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif", fontSize: 22, textAlign: "center"}}>
            Avanti Fellows - Ledby Girls' Leadership and Mentorship Program
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable style={{width: "100%", 
        backgroundColor: "black",
        backgroundSize: "100%",
        color: "#f2ebdd",
        fontSize: 15,
        marginTop: 0,
        backgroundImage: "url(" + BlackOne + ")"}}>
        <Container className="research-container" responsive="true">
        <Row>
                <Container responsive="true">
                    <br/>
                    <div style={fontFormat} responsive="true">
                    <div style={{color: "#E9C46A", fontSize: 18}}>Problem Space:</div>
                        <Image width="40%" src={Mentor} style={{float: "right", paddingLeft: "5px"}}/>
                    <div responsive="true">
                    The COVID-19 pandemic has brought about massive changes in workflows within the Indian education system. The rapidly changing digital landscape within school systems brings massive challenges within underserved and marginalized contexts, including but not limited to intermittent and shared access to computing devices and poor internet availability. Further, the pandemic has exposed the existing cracks within career coaching and mentorship programs that have been in place in India for the last few decades. In particular, gender inequalities have further been amplified since high school girls, especially in rural areas have almost no access to any career guidance based resources as they start thinking about applying to colleges and degree programs post high school. With final exams being cancelled repeatedly by the government and competitive entrance exams being postponed, the opportunities to apply to highly ranked colleges and pursue careers of their choice have also diminished significantly. 
                        </div>
                        <br></br>

                        <div responsive="true">
                        <div style={{color: "#E9C46A", fontSize: 18}}>Solution:</div>
                        <Image width="45%" src={Survey} style={{float: "left", paddingRight: "10px"}}/>
                        In response to these heightened problems, we (Avanti Fellows) partnered up with LedBy Foundation to initiate and organize a Girls Leadership and Mentorship program. For the first phase of this program,  36 students were selected from Jawahar Navodaya Vidyalaya Schools (JNVs), a system of central govt run schools for low-income students predominantly from rural areas in India. 

                        
                        We interviewed 5 students to understand their perspectives on leadership, mentorship, their daily challenges etc. Based on those conversations we outlined the following goals/outcomes that we hoped to achieve by the end of the mentorship duration: <br/>
1) Students will be able to articulate their career-related goals and the steps they would need to take to achieve their goals. <br/>
2) Students will be able to articulate at least one alternative career goal (Plan B) and the steps they will need to take to achieve that goal. <br/>
3) Students will have higher confidence with respect communicating with peers and in public spaces.<br/>
4) Students will be able to identify their stress and/or anger triggers and articulate at least one way in which they can manage their stress and/or anger. <br/>
5) Students will be able to articulate at least one way in which they can protect themselves in the online world and protect themselves in physical spaces.<br/>

                        </div> 
                        <br/>
                        <div style={{color: "#E9C46A", fontSize: 18}}>Evaluation:</div>
                        <div>
                        Following the framing of the above mentioned goals, I devised an internal evaluation and feedback strategy to evaluate the outcomes and effectiveness of the program and its underlying structure.. To achieve this, I divided our study into baseline and endline stages, spanning the length of the program. For the baseline portion of the program, I employed qualitative methods - interviews and surveys over the duration of a week to collect extensive data from students.
                        During the interviews, I asked participants questions pertaining to their career aspirations, confidence in communicating with peers and professionals, public speaking, their leadership strengths and their ability to recognize and navigate anger and stress triggers. I also sent out surveys asking the same questions in a more condensed version. Following these surveys and interviews, I coded, summarized and analyzed the responses obtained from the students and defined domains that students need support and help with. 
                        To hear firsthand from students, I also set up calls with two girls per week to receive positive and constructive feedback regarding their mentorship sessions.
                        I will be conducting the endline evaluation of this study in the next few months to compare and contrast the participants' capacities with respect to the above mentioned parameters and assess if the goals of the program were met.
                        The result of this evaluation will help inform and shape the format and structure of future mentorship programs across the country. 
                        </div>
                        
                    </div>
                </Container>
                </Row>
        <br></br>
        </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", border: 0}}>
          <Button style={{backgroundColor: "black", border: 0, color: "#E9C46A", fontFamily: "Tahoma, Geneva, sans-serif"}} onClick={props.onHide}>Close Project</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }



function Research() {
    const [modalShowASL, setModalShowASL] = React.useState(false);
    const [modalShowTandem, setModalShowTandem] = React.useState(false);
    const [modalShowCat, setModalShowCat] = React.useState(false);
    const [modalShowAvanti, setModalShowAvanti] = React.useState(false);

    return (
        <Container style={{textAlign: "center"}}>
            <Row style={{padding: "0px", width: "105%", marginTop: "120px"}}>
            {/** *********************************ASL ITEM************** */}
            <Col md={9} >
            <Row style={{padding: "0px"}}>
            <Col md={6} style={{padding: "5px", height: "75vh"}}>
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowASL(true)}>      
                    <Card className="bg-dark text-white" 
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
                                &ensp;Using Sign Language Recognition to Help Deaf Children Acquire Language Skills
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", height: "30vh", width: "25vw"}}
                             src="https://www.verywellhealth.com/thmb/_u2YBR9a2OcAihIAcTGV8wsrmlY=/2556x1917/smart/filters:no_upscale()/gettyimages-495596293-5a2192db5b6e24001a612abe.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Thad Starner <br/>
                            GT Ubicomp Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A", fontSize: 15}} onClick={() => setModalShowASL(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                    <ASLModal
                        show={modalShowASL}
                        onHide={() => setModalShowASL(false)}
                    />
                </a>  
            </Col>
            {/** *********************************TANDEM ITEM************** */}
            <Col md={6} style={{padding: "5px", height: "75vh"}}>
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowTandem(true)}>      
                    <Card className="bg-dark text-white" 
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
                                &ensp;The COVID-19 Pandemic Shift to Remote Learning under Resource Constraints
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{ boxShadow: "60px 60px 100px 100px #000000;", border: 0, objectFit: "contain", height: "30vh", width: "25vw"}}
                             src="https://static.reuters.com/resources/r/?m=02&d=20200320&t=2&i=1505762610&r=LYNXMPEG2J0KV&w=800" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Neha Kumar<br/>
                            GT TanDEm Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A", fontSize: 15}} onClick={() => setModalShowTandem(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                    <TandemModal
                        show={modalShowTandem}
                        onHide={() => setModalShowTandem(false)}
                    />
                </a>  
            </Col>
            

            {/** ROW 2 */}

             {/** *********************************CAT ITEM************** */}   
            <Col md={6} style={{padding: "5px", height: "75vh"}}>
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowCat(true)}>      
                    <Card className="bg-dark text-white" 
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
                                &ensp;Co-Designing Parent-Education ICTs with Hispanic Immigrants
                            </p>
                        </Card.Header>
                       
                        <ZoomIn >
                        <Card.Img style={{objectFit: "contain", opacity: "0.55", width: "25vw", height: "30vh"}}
                             src={Marisol} alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Betsy Disalvo <br/>
                            GT CAT Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A", fontSize: 15}} onClick={() => setModalShowCat(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                </a>  
            </Col>

            <CatModal
        show={modalShowCat}
        onHide={() => setModalShowCat(false)}
            />
        <Col md={6} style={{padding: "5px", height: "75vh"}}>
                <a role="button" style={{cursor: "pointer"}} onClick={() => setModalShowAvanti(true)}>      
                    <Card className="bg-dark text-white" 
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
                                &ensp;Avanti Fellows - Ledby Girls' Leadership and Mentorship Program
                            </p>
                        </Card.Header>
                       
                        <ZoomIn>
                        <Card.Img style={{objectFit: "contain", boxShadow: "60px 60px 100px 100px #000000;", border: 0, opacity: "0.55", height: "30vh", width: "25vw"}}
                             src="https://www.brookings.edu/wp-content/uploads/2017/09/cue_reaching-for-the-sky_001.jpg" alt="Card image" />
                        </ZoomIn>
                        
                            <Card.Text style={{fontSize: 16, margin: '10px'}}>
                            Advisor: Dr. Neha Kumar<br/>
                            GT TanDEm Lab
                            </Card.Text>
                            <Card.Footer><a href="#" style={{color: "#E9C46A", fontSize: 15}} onClick={() => setModalShowAvanti(true)}>Read More</a></Card.Footer>

                    </div>               
                    </Card>
                    <AvantiModal
                        show={modalShowAvanti}
                        onHide={() => setModalShowAvanti(false)}
                    />
                </a>  
            </Col>
            </Row>


            {/**Insert Here */}

            </Col>

            
       <Col style={{padding: "0px"}}>
            <Container style={{backgroundColor: "black", height: "auto", paddingBottom: "8px"}}>
            <br/>
            <div style={{fontSize: 20, color: "#E9C46A"}}>Publications</div>
            <br/>
            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", fontSize: 15}}><a href="https://dl.acm.org/doi/10.1145/3411763.3451523" style={{textAlign: "left", color: "#E9C46A", fontSize: 15}}>CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills</a></p>
            <p style={{color: "#f2ebdd", fontSize: 13, textAlign: "left", marginLeft: "10px"}}>Dhruva Bansal, <b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Matthew So, Pranay Agrawal, Ishan Chadha, Ganesh Murugappan, and Colby Duke (Advisor: Dr. Thad Starner)</p>
            <p style={{color: "#E9C46A", fontSize: 13, textAlign: "left", marginLeft: "10px"}}>CHI 2021</p>
            <p style={{color: "#E9C46A", fontSize: 13, textAlign: "left", marginLeft: "10px"}}><b>Winner - CHI Student Research Competition</b></p>

            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", borderTop: "2px dotted #E9C46A", fontSize: 15}}>
            <div style={{marginTop: "10px"}}>The Pandemic Shift to Remote Learning under Resource Constraints</div></p>
            <p style={{color: "#f2ebdd", fontSize: 13, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi</b>, Azra Ismail, and Neha Kumar</p>
            <p style={{color: "#E9C46A", fontSize: 13, textAlign: "left", marginLeft: "10px"}}>CSCW 2021
            </p>

            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", borderTop: "2px dotted #E9C46A", fontSize: 15}}>
            <div style={{marginTop: "10px"}}><a href="https://medium.com/avanti-fellows/avanti-fellows-ledby-girls-leadership-and-mentorship-program-the-why-what-and-how-part-1-ef39379824cd" style={{textAlign: "left", color: "#E9C46A", fontSize: 15}}>Avanti Fellows — LedBy Girls’ Leadership and Mentorship Program: The Why, What, and How</a></div></p>
            <p style={{color: "#f2ebdd", fontSize: 13, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi</b> (Advisor: Dr. Neha Kumar)</p>
            <p style={{color: "#E9C46A", fontSize: 13, textAlign: "left", marginLeft: "10px"}}>Avanti Fellows Blog and Baseline Report
            </p>

            <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", borderTop: "2px dotted #E9C46A", fontSize: 15}}>
            <div style={{marginTop: "10px"}}>Leveraging AlphaPose as a 2-D Pose Estimator for American Sign Language Recognition</div></p>
            <p style={{color: "#f2ebdd", fontSize: 13, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi</b> (Advisor: Dr. Thad Starner)</p>
            <p style={{color: "#E9C46A", fontSize: 13, textAlign: "left", marginLeft: "10px"}}>Bachelor's Thesis
            </p>
            {/* <div style={{fontSize: 20, color: "#E9C46A", borderTop: "2px dotted #E9C46A"}}><br/>Presentations</div>
            <br/> */}
            {/* <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", fontSize: 17}}>
            <div style={{marginTop: "10px"}}>CopyCat: Intuitive Calibration and Data Collection Procedures for ASL Recognition using Azure Kinect</div></p>
            <p style={{color: "#f2ebdd", fontSize: 15, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi </b>and Thad Starner</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>Undergraduate Research Symposium at Georgia Tech 2019
            </p> */}
            {/* <p style={{marginLeft: "10px", textAlign: "left", color: "#E9C46A", fontSize: 17, borderTop: "2px dotted #E9C46A"}}>
            <div style={{marginTop: "10px"}}>CopyCat: Pose Estimation for ASL Recognition using OpenPose and Microsoft Kinect</div></p>
            <p style={{color: "#f2ebdd", fontSize: 15, textAlign: "left", marginLeft: "10px"}}><b style={{color: "#E9C46A"}}>Prerna Ravi </b>, Peter McAughan, Theo Panagiotopoulos, Dhruva Bansal, and Thad Starner</p>
            <p style={{color: "#E9C46A", fontSize: 15, textAlign: "left", marginLeft: "10px"}}>Georgia Tech GVU Center Research Showcase 2019
            </p> */}
            {/* <br/>
            <div style={{fontSize: 20, color: "#E9C46A"}}>Presentations</div> */}
            </Container>
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