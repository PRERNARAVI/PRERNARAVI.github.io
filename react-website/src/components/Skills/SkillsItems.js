import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import Library from "../../images/Library.jpeg";
import ND from "../../images/ND.jpg";
import CHI from "../../images/CHI_Logo.png";
import COC2021 from "../../images/CocAward2021.jpeg";
import COC2020 from "../../images/CocAward2020.jpeg";
import Adobe from "../../images/Adobe.jpeg";
import PURA from "../../images/PURA.jpeg";
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
                                    &ensp;President's Undergraduate Research Award 2020
                                </p>
                            </Card.Header>
                            <div style={{backgroundColor: 'white', width: "90%", padding: 'center'}}>
                            <Card.Img style={{height: "20vh", width: "60%", backgroundColor: "white"}}
                                 src={PURA} alt="Card image" />
                            </div>
                                <Card.Text style={{fontSize: 14, margin: '10px'}}>
                                Awarded the President's Undergraduate Research Award at Georgia Tech for the year 2020 for 
                                conducting research at the Technology and Design for Empowerment on the Margins Lab (TanDEm) 
                                under Dr. Neha Kumar.
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
                </Row>
            </Container>
            
        );
    }
}
export default SkillsItems;