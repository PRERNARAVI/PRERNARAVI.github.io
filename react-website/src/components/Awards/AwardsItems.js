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
import Apple from "../../images/Apple-Logo.png";
import CHI_25 from "../../images/CHI_2025.jpg";
import LAS_25 from "../../images/LAS_25.jpeg";
import { FaAward } from 'react-icons/fa';


class AwardsItems extends React.Component{
    render () {
        return (
            <Container style={{paddingTop: "80px", paddingBottom: "80px", paddingLeft: "0px", paddingRight: "0px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
                <br/><br/>
                <div style={{height: "4px", width: "48px", background: "#3A1EB6", borderRadius: "2px", marginBottom: "18px"}}></div>
                <h4 style={{color: "#3A1EB6", marginBottom: "20px", textAlign: "left", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Awards and Fellowships</h4>
                <br/>
                <Row>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://learningatscale.acm.org/las2025/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Best Paper Nomination, ACM Learning at Scale 2025
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={LAS_25} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Received a Best Paper Nomination recognition for our paper on <i>"How Adding Metacognitive Requirements in Support of AI Feedback in Practice Exams Transforms Student Learning Behaviors"</i> at ACM Learning at Scale 2025 in Palermo, Italy.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ July 2025 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://programs.sigchi.org/chi/2025/awards/honorable-mentions" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Best Paper Honorable Mention, ACM CHI 2025
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={CHI_25} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Recognized with the CHI 2025 Best Paper Honorable Mention award (top 5% of submissions) for our paper on <i>"Co-designing Large Language Model Tools for Project-Based Learning with K12 Educators"</i> in Yokohama, Japan.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ April 2025 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://tll.mit.edu/programming/grad-student-programming/kaufman-teaching-certificate-program/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Kaufman Teaching Certificate, MIT TLL 2024
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={TLL} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Received this certificate from the MIT Teaching and Learning Lab (TLL) for completing workshops in 
                                evidence-based teaching techniques for designing courses, and promoting inclusive classroom practices, assessments, and feedback. 
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ November 2024 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://tools-competition.org/winner/mit-raise/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Winner, Learning Engineering Tools Competition 2024
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://tools-competition.org/wp-content/uploads/2022/10/LE-Tools-Competition-Logo-Final-5.png" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded $300,000 in research funding from The Learning Agency for our Low-Barrier MIT App Inventor Mobile Data Science Toolkit that fosters higher author
                                proximity and constructionism in K12 Data Literacy pedagogy.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ August 2024 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://aied2024.cesar.school/call-for-papers/deia-fellowships" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    AI in Education (AIED) DEIA Fellowship 2024-2025
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://pbs.twimg.com/media/GNdsEcMWcAA0e0N?format=jpg&name=900x900" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this fellowship from the International Artificial Intelligence in Education Society (IAIED) for expanding my work on democratizing K12 data literacy under the mentorship of Dr. Victor Lee at the Stanford
                                Graduate School of Education.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ August 2024 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://cis.mit.edu/fellowships-grants/cis-travel-grants" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Center for International Studies Travel Fellowship 2024
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={CIS} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Received this travel fellowship from the MIT Center for International Studies (CIS) for presenting my research in AI and Data Literacy at the UNESCO Paris
                                Headquarters during their Digital Learning Week 2024.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ August 2024 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://tll.mit.edu/programming/grad-student-programming/tdf/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    MIT TLL Teaching Development Fellowship 2024-2025
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={TLL} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this fellowship from the MIT Teaching and Learning Lab (TLL) to introduce initiatives promoting pedagogical
                                development and discussion amongst graudate students in MIT's EECS department. 
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ August 2024 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://chi2024.acm.org/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Special Recognition: Outstanding Reviews, CHI 2024
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsm-nFpzjSDEhJMyBIf4dWwWV9vZ82SFIQog&s" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Received this designation from the SIGCHI Conference on Human Factors in Computing Systems (CHI 2024) Program Committee for exceptionally high quality contributions to the 
                                paper reviews process.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ January 2024 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://ipc.mit.edu/people/prerna-ravi/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    MIT Work of the Future Fellowship 2023-2024
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://mms.businesswire.com/media/20201014005536/en/830206/22/Work-of-Future-Logo_CMYK-1_viewimage.jpg" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this fellowship for researching the design and implementation of generative AI tools across multiple sectors. I am one of seven recipients of this fellowship across all graduate degree programs 
                                and departments at MIT. 
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ September 2023 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://oge.mit.edu/fellowships/oge-fellowships-and-awards/oge-fellowships/#green" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Ida M. Green PhD Fellowship 2022-2023
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://oge.mit.edu/fellowships/wp-content/uploads/sites/5/2022/05/OGE_fellowships_logo.svg" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this fellowship as part of financial support for year 1 of my PhD at MIT EECS. I am one of the six recipients of this OGE fellowship across all graduate degree programs 
                                and departments at MIT. 
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ August 2022 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://chi2021.acm.org/for-attendees/highlights/awards" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Winner - CHI Student Research Competition 2021
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={CHI} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded the First Place at the ACM CHI Student Research Competition for the year 2021 for 
                                the research paper - <i>"CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire 
                                Language Skills."</i>
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ May 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://gtcomputingawards2021.cc.gatech.edu/u/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    COC Outstanding Junior (EDS Rising Senior) Award 2021
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={COC2021} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Given this award from the College of Computing at Georgia Tech for 
                                the academic year 2020-2021 based on exemplary GPA, research, teaching and 
                                demonstration of leadership in the realm of Computer Science.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ April 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://research.adobe.com/scholarship/previous-scholarship-award-winners/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Adobe Research Women in Technology Scholarship
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={Adobe} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Won this scholarship of $10,000 USD from Adobe Research for the year 
                                2021 based on academic and research achievements from across undergraduate and 
                                gradute students in both the United States and Canada.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ Feb 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>
                
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="http://www.undergradresearch.gatech.edu/content/presidents-undergraduate-research-awards" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                    <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    President's Undergraduate Research Award 2020
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={PURA} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded the President's Undergraduate Research Award 2020 at Georgia Tech for conducting research at the Technology and Design for Empowerment on the Margins Lab (TanDEm) under Dr. Neha Kumar.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ July 2020 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://www.cc.gatech.edu/annual-awards-and-honors-past-recipients" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    COC Outstanding Sophomore Award 2020
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={COC2020} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Given this award from the College of Computing at Georgia Tech 
                                for the academic year 2019-2020 based on exemplary GPA, Research, Teaching 
                                and Demonstration of Leadership in the realm of Computer Science.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ April 2020 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://careers.microsoft.com/students/us/en/usuniversityinternship" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Finalist - Microsoft Invent 2021
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwE2rLE1KRPPXp8C_JrGbQOuMcChtuvJ78PVvucfBcfpCbNxMYLzoiqi-1PxcxAxa74o0&usqp=CAU" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Selected as one of the 3 finalists from 4000+ interns for Microsoft Invent, an entrepreneurial competition for pitching startup ideas and outlining their market feasibility, engineering analysis, and key partners' identification.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ May 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>
                
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://diversity.gatech.edu/facesofinclusiveexcellence" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Georgia Tech Faces of Inclusive Excellence Honoree 2021
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://img.huffingtonpost.com/asset/58f4e3981b0000370016bdce.jpg?ops=scalefit_630_noupscale" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Received this honor for professional endeavors related to research, teaching, leadership, and public service activities at Georgia Tech that have earned special recognition in the form of research publications, grant awards, etc. 
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ Aug 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://research.google/outreach/csrmp/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Google Computer Science Research Mentorship Fellow 2021
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={Google} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this fellowship to be a part of the cohort for the 2021 Google Computer Science Research Mentorship Program (CSRMP) that supports and guides students through computing research pathways.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ Sept 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://www.apple.com/careers/us/students.html" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Apple Women in Science and Engineering Fellow
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={Apple} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this fellowship to be a part of the 2021 Apple's Women in Science and Engineering Mentorship (AWSEM)that guides women in computing through their professional endeavors.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ Sept 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://intaadvising.gatech.edu/uncategorized/sam-nunn-school-of-international-affairs-paper-competition-submit-by-january-31-2021/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Winner - International Affairs for Global Development Contest
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}} src="https://cdn.nwe.io/files/x/5a/90/42d7abb8ab711d7388e771d26492.jpg" alt="Card image" />

                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Won the 2021 Sam Nunn School of International Affairs Paper Competition for the paper - <i>"The Pandemic Shift to Remote Learning under Resource Constraints"</i> by Prerna Ravi, Azra Ismail and Dr. Neha Kumar.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ April 2021 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://ghc.anitab.org/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Grace Hopper Conference 2020 Scholarship from Apple
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src={Apple} alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this scholarship grant from Apple to attend the Grace Hopper Celebration of Women in Computing Conference held virtually in October 2020.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ Sept 2020 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://news.microsoft.com/transform/at-the-microsoft-global-hackathon-customers-break-something-to-make-something/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Honorable Mention - Microsoft Global Hackathon 2020
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwE2rLE1KRPPXp8C_JrGbQOuMcChtuvJ78PVvucfBcfpCbNxMYLzoiqi-1PxcxAxa74o0&usqp=CAU" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Received the Honorable Mention Award for my project "understaNDing Neurodiversity" (see projects section) from over 3,200 Microsoft interns and 180,000 full time employees at the Microsoft Global Hackathon 2020.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ Sept 2020 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://rewritingthecode.org/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Rewriting the Code Fellowship 2020 - 2021
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://onereq.com/wp-content/uploads/2020/07/rtc-profile-logo.png" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this fellowship from Rewriting the Code for extraordinary achievements in academics and involvements in research, non-profit organizations, empowerment initiatives, teaching, and leadership.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ June 2020 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://ghc.anitab.org/" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Grace Hopper Conference 2019 Scholarship
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://cdn-images-1.medium.com/v2/resize:fit:1024/0*4aTCK71l1oTU9Jcq" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded this scholarship grant by the College of Computing at Georgia Tech to represent and attend the Grace Hopper Celebration of Women in Computing Conference held at Orlando, Florida in October 2019.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ Sept 2019 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <a role="button" href="https://registrar.gatech.edu/info/faculty-honors-letters" style={{cursor: "pointer", textDecoration: "none", color: 'inherit'}}>      
                        <Card className="h-100" style={{border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)'}}>
                        <div className="p-4 d-flex flex-column">
                            <Card.Header 
                                style={{
                                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                    fontWeight: "600",
                                    fontSize: 17,
                                    color: "#3A1EB6",
                                    backgroundColor: 'transparent',
                                    borderBottom: 'none',
                                    padding: '0 0 16px 0'
                                }}> 
                                <p style={{lineHeight: 1.3}}>
                                    <FaAward size='24px' style={{color: '#3A1EB6', verticalAlign: 'text-top', marginRight: '8px'}}/>
                                    Georgia Tech Faculty Honors for 2018 - 2022
                                </p>
                            </Card.Header>
                            <div className="text-center my-3">
                            <Card.Img style={{height: "120px", width: "auto", maxWidth: '80%', objectFit: "contain"}}
                                 src="https://logos-world.net/wp-content/uploads/2021/09/Georgia-Tech-Old-Logo.png" alt="Card image" />
                            </div>
                                <Card.Text className="flex-grow-1" style={{fontSize: 14, color: '#2D3436'}}>
                                Awarded the distinction of Faculty Honors for 2018-2022 (all semesters) for securing an academic GPA of 4.0.
                                </Card.Text>
                                <Card.Footer style={{backgroundColor: 'transparent', borderTop: 'none', textAlign: 'right', fontSize: '13px', color: '#6c757d', padding: '16px 0 0 0'}}>
                                [ 2018 - 2022 ]
                                </Card.Footer>
                        </div>               
                        </Card>
                    </a>  
                </Col>

                </Row>
            </Container>
            
        );
    }
}
export default AwardsItems;