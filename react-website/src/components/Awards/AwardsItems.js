import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import Library from "../../images/Library.jpeg";
import ND from "../../images/ND.jpg";
import CHI from "../../images/CHI_Logo.png";
import COC2021 from "../../images/CocAward2021.jpeg";
import COC2020 from "../../images/CocAward2020.jpeg";
import Adobe from "../../images/Adobe.jpeg";
import PURA from "../../images/PURA.png";
import Google from "../../images/Google.webp";
import CIS from "../../images/cis_mit.png";
import TLL from "../../images/tll.png";
import { FaAward } from 'react-icons/fa';


class SkillsItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        }
        return (
            <Container style={{textAlign: "center", paddingBottom: "100px"}}>
                <Row>
                <Col md={6} lg={4}>
                    <a role="button" href="https://tll.mit.edu/programming/grad-student-programming/kaufman-teaching-certificate-program/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp; Kaufman Teaching Certificate, MIT TLL 2024
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src={TLL} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Received this certificate from the MIT Teaching and Learning Lab (TLL) for completing workshops in 
                                evidence-based teaching techniques for designing courses, and promoting inclusive classroom practices, assessments, and feedback. 
                                </Card.Text>
                                <Card.Footer>[ November 2024 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://tools-competition.org/winner/mit-raise/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp; Winner, Learning Engineering Tools Competition 2024
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src="https://tools-competition.org/wp-content/uploads/2022/10/LE-Tools-Competition-Logo-Final-5.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded $300,000 in research funding from The Learning Agency for our Low-Barrier MIT App Inventor Mobile Data Science Toolkit that fosters higher author
                                proximity and constructionism in K12 Data Literacy pedagogy.
                                </Card.Text>
                                <Card.Footer>[ August 2024 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://aied2024.cesar.school/call-for-papers/deia-fellowships" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;AI in Education (AIED) DEIA Fellowship 2024-2025
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src="https://pbs.twimg.com/media/GNdsEcMWcAA0e0N?format=jpg&name=900x900" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this fellowship from the International Artificial Intelligence in Education Society (IAIED) for expanding my work on democratizing K12 data literacy under the mentorship of Dr. Victor Lee at the Stanford
                                Graduate School of Education.
                                </Card.Text>
                                <Card.Footer>[ August 2024 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://cis.mit.edu/fellowships-grants/cis-travel-grants" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Center for International Studies Travel Fellowship 2024
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src={CIS} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Received this travel fellowship from the MIT Center for International Studies (CIS) for presenting my research in AI and Data Literacy at the UNESCO Paris
                                Headquarters during their Digital Learning Week 2024.
                                </Card.Text>
                                <Card.Footer>[ August 2024 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://tll.mit.edu/programming/grad-student-programming/tdf/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp; MIT TLL Teaching Development Fellowship 2024-2025
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src={TLL} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this fellowship from the MIT Teaching and Learning Lab (TLL) to introduce initiatives promoting pedagogical
                                development and discussion amongst graudate students in MIT's EECS department. 
                                </Card.Text>
                                <Card.Footer>[ August 2024 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://chi2024.acm.org/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp; Special Recognition: Outstanding Reviews, CHI 2024
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsm-nFpzjSDEhJMyBIf4dWwWV9vZ82SFIQog&s" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Received this designation from the SIGCHI Conference on Human Factors in Computing Systems (CHI 2024) Program Committee for exceptionally high quality contributions to the 
                                paper reviews process.


                                </Card.Text>
                                <Card.Footer>[ January 2024 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://ipc.mit.edu/people/prerna-ravi/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;MIT Work of the Future Fellowship 2023-2024
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src="https://mms.businesswire.com/media/20201014005536/en/830206/22/Work-of-Future-Logo_CMYK-1_viewimage.jpg" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this fellowship for researching the design and implementation of generative AI tools across multiple sectors. I am one of seven recipients of this fellowship across all graduate degree programs 
                                and departments at MIT. 
                                </Card.Text>
                                <Card.Footer>[ September 2023 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://oge.mit.edu/fellowships/oge-fellowships-and-awards/oge-fellowships/#green" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Ida M. Green PhD Fellowship 2022-2023
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src="https://oge.mit.edu/fellowships/wp-content/uploads/sites/5/2022/05/OGE_fellowships_logo.svg" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this fellowship as part of financial support for year 1 of my PhD at MIT EECS. I am one of the six recipients of this OGE fellowship across all graduate degree programs 
                                and departments at MIT. 
                                </Card.Text>
                                <Card.Footer>[ August 2022 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://chi2021.acm.org/for-attendees/highlights/awards" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white award-card-image"
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image">
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Winner - CHI Student Research Competition 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src={CHI} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded the First Place at the ACM CHI Student Research Competition for the year 2021 for 
                                the research paper - <i>"CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire 
                                Language Skills."</i>
                                </Card.Text>
                                <Card.Footer>[ May 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://gtcomputingawards2021.cc.gatech.edu/u/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;COC Outstanding Junior (EDS Rising Senior) Award 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "black", objectFit: "contain"}}
                                 src={COC2021} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Given this award from the College of Computing at Georgia Tech for 
                                the academic year 2020-2021 based on exemplary GPA, research, teaching and 
                                demonstration of leadership in the realm of Computer Science.
                                </Card.Text>
                                <Card.Footer>[ April 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://research.adobe.com/scholarship/previous-scholarship-award-winners/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Adobe Research Women in Technology Scholarship
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white", objectFit: "contain"}}
                                 src={Adobe} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Won this scholarship of $10,000 USD from Adobe Research for the year 
                                2021 based on academic and research achievements from across undergraduate and 
                                gradute students in both the United States and Canada.
                                </Card.Text>
                                <Card.Footer>[ Feb 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                
                <Col md={6} lg={4}>
                    <a role="button" href="http://www.undergradresearch.gatech.edu/content/presidents-undergraduate-research-awards" style={{cursor: "pointer", textDecoration: "none"}}>      
                    <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;President's Undergraduate Research Award 2020
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "80%", backgroundColor: "white", objectFit: "contain"}}
                                 src={PURA} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded the President's Undergraduate Research Award 2020 at Georgia Tech for conducting research at the Technology and Design for Empowerment on the Margins Lab (TanDEm) under Dr. Neha Kumar.
                                </Card.Text>
                                <Card.Footer>[ July 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://www.cc.gatech.edu/annual-awards-and-honors-past-recipients" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;COC Outstanding Sophomore Award 2020
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "black", objectFit: "contain"}}
                                 src={COC2020} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Given this award from the College of Computing at Georgia Tech 
                                for the academic year 2019-2020 based on exemplary GPA, Research, Teaching 
                                and Demonstration of Leadership in the realm of Computer Science.
                                </Card.Text>
                                <Card.Footer>[ April 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://careers.microsoft.com/students/us/en/usuniversityinternship" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Finalist - Microsoft Invent 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "21.5vh", width: "90%", backgroundColor: "black", objectFit: "contain"}}
                                 src="https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Selected as one of the 3 finalists from 4000+ interns for Microsoft Invent, an entrepreneurial competition for pitching startup ideas and outlining their market feasibility, engineering analysis, and key partners' identification.
                                </Card.Text>
                                <Card.Footer>[ May 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                
                <Col md={6} lg={4}>
                    <a role="button" href="https://diversity.gatech.edu/facesofinclusiveexcellence" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Georgia Tech Faces of Inclusive Excellence Honoree 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "75%", backgroundColor: "black", objectFit: "contain"}}
                                 src="https://img.huffingtonpost.com/asset/58f4e3981b0000370016bdce.jpg?ops=scalefit_630_noupscale" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Received this honor for professional endeavors related to research, teaching, leadership, and public service activities at Georgia Tech that have earned special recognition in the form of research publications, grant awards, etc. 
                                </Card.Text>
                                <Card.Footer>[ Aug 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>

                <Col md={6} lg={4}>
                    <a role="button" href="https://research.google/outreach/csrmp/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Google Computer Science Research Mentorship Fellow 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "black", objectFit: "contain"}}
                                 src={Google} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this fellowship to be a part of the cohort for the 2021 Google Computer Science Research Mentorship Program (CSRMP) that supports and guides students through computing research pathways.
                                </Card.Text>
                                <Card.Footer>[ Sept 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>

                <Col md={6} lg={4}>
                    <a role="button" href="https://www.apple.com/careers/us/students.html" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Apple Women in Science and Engineering Fellow
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "22.5vh", width: "50%", objectFit: "contain"}}
                                 src="https://creativewomens.co/wp-content/uploads/2017/04/apple-logo.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this fellowship to be a part of the 2021 Apple's Women in Science and Engineering Mentorship (AWSEM)that guides women in computing through their professional endeavors.
                                </Card.Text>
                                <Card.Footer>[ Sept 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>

                <Col md={6} lg={4}>
                    <a role="button" href="https://intaadvising.gatech.edu/uncategorized/sam-nunn-school-of-international-affairs-paper-competition-submit-by-january-31-2021/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Winner - International Affairs for Global Development Contest
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "100%", backgroundColor: "black", transform: "scale(0.9)", objectFit: "contain"}}
                                 src="data:image/jpeg;base64,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" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Won the 2021 Sam Nunn School of International Affairs Paper Competition for the paper - <i>"The Pandemic Shift to Remote Learning under Resource Constraints"</i> by Prerna Ravi, Azra Ismail and Dr. Neha Kumar.
                                </Card.Text>
                                <Card.Footer>[ April 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://ghc.anitab.org/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Grace Hopper Conference 2020 Scholarship from Apple
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "22.5vh", width: "50%", objectFit: "contain"}}
                                 src="https://creativewomens.co/wp-content/uploads/2017/04/apple-logo.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this scholarship grant from Apple to attend the Grace Hopper Celebration of Women in Computing Conference held virtually in October 2020.
                                </Card.Text>
                                <Card.Footer>[ Sept 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://news.microsoft.com/transform/at-the-microsoft-global-hackathon-customers-break-something-to-make-something/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Honorable Mention - Microsoft Global Hackathon 2020
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "88%", backgroundColor: "black", objectFit: "contain"}}
                                 src="https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Received the Honorable Mention Award for my project "understaNDing Neurodiversity" (see projects section) from over 3,200 Microsoft interns and 180,000 full time employees at the Microsoft Global Hackathon 2020.
                                </Card.Text>
                                <Card.Footer>[ Sept 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://rewritingthecode.org/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Rewriting the Code Fellowship 2020 - 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "22.5vh", width: "45%", backgroundColor: "black", transform: "scale(1.1)", objectFit: "contain"}}
                                 src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/oU2KTehvQ6ip_Gj8uoIefQ.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this fellowship from Rewriting the Code for extraordinary achievements in academics and involvements in research, non-profit organizations, empowerment initiatives, teaching, and leadership.
                                </Card.Text>
                                <Card.Footer>[ June 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4}>
                    <a role="button" href="https://ghc.anitab.org/" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Grace Hopper Conference 2019 Scholarship
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", objectFit: "contain"}}
                                 src="http://s3-us-west-2.amazonaws.com/thecube-prod/landingPage/0befc1f8-eb95-435d-95b1-048205bd473c.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this scholarship grant by the College of Computing at Georgia Tech to represent and attend the Grace Hopper Celebration of Women in Computing Conference held at Orlando, Florida in October 2019.
                                </Card.Text>
                                <Card.Footer>[ Sept 2019 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>

                <Col md={6} lg={4}>
                    <a role="button" href="https://registrar.gatech.edu/info/faculty-honors-letters" style={{cursor: "pointer", textDecoration: "none"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px',
                                    color: "#E9C46A"
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' style={{color: 'white'}}/>
                                    &ensp;Georgia Tech Faculty Honors for 2018 - 2022
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "25vh", width: "90%", objectFit: "contain"}}
                                 src="https://d3ebobe8l15pwo.cloudfront.net/wp-content/uploads/imagesdrup/field/image/GeorgiaTech_0.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded the distinction of Faculty Honors for 2018-2022 (all semesters) for securing an academic GPA of 4.0.
                                </Card.Text>
                                <Card.Footer>[ 2018 - 2022 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>

                </Row>
            </Container>
            
        );
    }
}
export default SkillsItems;