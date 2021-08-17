import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import Library from "../../images/Library.jpeg";
import ND from "../../images/ND.jpg";
import CHI from "../../images/CHI_Logo.png";
import COC2021 from "../../images/CocAward2021.jpeg";
import COC2020 from "../../images/CocAward2020.jpeg";
import Adobe from "../../images/Adobe.jpeg";
import PURA from "../../images/PURA.png";
import { FaAward } from 'react-icons/fa';


class SkillsItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        }
        return (
            <Container >
                <Row>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;Winner - CHI Student Research Competition 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
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
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;COC Outstanding Junior (EDS Rising Senior) Award
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
                                 src={COC2021} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Given this prestigious award from the College of Computing at Georgia Tech for 
                                the academic year 2020-2021 based on exemplary GPA, Research, Teaching and 
                                Demonstration of Leadership in the realm of Computer Science.
                                </Card.Text>
                                <Card.Footer>[ April 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' />
                                    &ensp;Adobe Research Women in Technology Scholarship
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
                                 src={Adobe} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this scholarship of $10,000 USD from Adobe Research for the year 
                                2021 based on academic and research achievements from across undergraduate and 
                                gradute students in both the United States and Canada.
                                </Card.Text>
                                <Card.Footer>[ Feb 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                </Row>
                <Row style={{marginTop: "-60px"}}>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                    <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' />
                                    &ensp;President's Undergraduate Research Award 2020
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "80%", backgroundColor: "white"}}
                                 src={PURA} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded the President's Undergraduate Research Award at Georgia Tech for the year 2020 for conducting research at the Technology and Design for Empowerment on the Margins Lab (TanDEm) under Dr. Neha Kumar.
                                </Card.Text>
                                <Card.Footer>[ July 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;COC Outstanding Sophomore Award
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
                                 src={COC2020} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Given this prestigious award from the College of Computing at Georgia Tech 
                                for the academic year 2019-2020 based on exemplary GPA, Research, Teaching 
                                and Demonstration of Leadership in the realm of Computer Science.
                                </Card.Text>
                                <Card.Footer>[ April 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;Finalist - Microsoft Invent 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "21.5vh", width: "90%", backgroundColor: "white"}}
                                 src="https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Selected as one of the 3 finalists from over 4000 interns for Microsoft Invent, an entrepreneurial based competition for pitching startup ideas and outlining their market feasibility, engineering analysis, and key partners' identification.
                                </Card.Text>
                                <Card.Footer>[ May 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                </Row>




                <Row style={{marginTop: "-60px"}}>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;Georgia Tech Faces of Inclusive Excellence Honoree 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "75%", backgroundColor: "white"}}
                                 src="https://img.huffingtonpost.com/asset/58f4e3981b0000370016bdce.jpg?ops=scalefit_630_noupscale" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Received this honor for professional endeavors related to research, teaching, leadership, and public service activities at Georgia Tech that have earned special recognition (research publications, grant awards, etc.). 
                                </Card.Text>
                                <Card.Footer>[ Aug 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;Winner - International Affairs for Global Development Contest
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "90%", backgroundColor: "white"}}
                                 src={COC2021} alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Won the 2021 Nunn School of International Affairs Paper Competition for Global Development for the paper - "The Pandemic Shift to Remote Learning under Resource Constraints" by Prerna Ravi, Azra Ismail and Neha Kumar.
                                </Card.Text>
                                <Card.Footer>[ April 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' />
                                    &ensp;Grace Hopper Conference 2020 Scholarship from Apple
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "22.5vh", width: "50%"}}
                                 src="https://creativewomens.co/wp-content/uploads/2017/04/apple-logo.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this scholarship grant from Apple to attend the Grace Hopper Celebration of Women in Computing Conference held virtually in October 2020.
                                </Card.Text>
                                <Card.Footer>[ Sept 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                </Row>


                <Row style={{marginTop: "-60px"}}>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;Honorable Mention - Microsoft Global Hackathon 2020
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "20vh", width: "88%", backgroundColor: "white"}}
                                 src="https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Received this honor for professional endeavors related to research, teaching, leadership, and public service activities at Georgia Tech that have earned special recognition (research publications, grant awards, etc.). 
                                </Card.Text>
                                <Card.Footer>[ Sept 2020 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>   
                </Col>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7"}}>
                                    <FaAward size='35px' />
                                    &ensp;Rewriting the Code Fellowship 2020 - 2021
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "19vh", width: "50%", backgroundColor: "white", transform: "scale(1.2)"}}
                                 src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/oU2KTehvQ6ip_Gj8uoIefQ.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Won the 2021 Nunn School of International Affairs Paper Competition for Global Development for the paper - "The Pandemic Shift to Remote Learning under Resource Constraints" by Prerna Ravi, Azra Ismail and Neha Kumar.
                                </Card.Text>
                                <Card.Footer>[ April 2021 ]</Card.Footer>

                        </div>               
                        </Card>
                    </a>  
                </Col>
                <Col md={4}>
                    <a role="button" style={{cursor: "pointer"}}>      
                        <Card className="bg-dark text-white" 
                            style={{marginTop: "120px", border: "none",
                            borderRadius: "10px", height: "50vh"}}>
                        <div className="award-card-image" >
                            <Card.Header 
                                style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif", 
                                    fontWeight: "normal",
                                    fontSize: 17,
                                    paddingTop: "15px",
                                    paddingBottom: '0px'
                                }}> 
                                <p style={{lineHeight: "0.7", textAlign: 'center'}}>
                                    <FaAward size='35px' />
                                    &ensp;Grace Hopper Conference 2019 Scholarship from GT COC
                                </p>
                            </Card.Header>
                            <Card.Img style={{height: "19.5vh", width: "90%"}}
                                 src="http://s3-us-west-2.amazonaws.com/thecube-prod/landingPage/0befc1f8-eb95-435d-95b1-048205bd473c.png" alt="Card image" />
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded this scholarship grant from the College of Computing at Georgia Tech to attend the Grace Hopper Celebration of Women in Computing Conference held at Orlando, Florida in October 2019.
                                </Card.Text>
                                <Card.Footer>[ Sept 2019 ]</Card.Footer>

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