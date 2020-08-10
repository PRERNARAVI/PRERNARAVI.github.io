import React from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap';
import TANDEM from "../../images/TANDEM.jpg";
import Book from "../../images/Book.png";
import Microsoft from "../../images/Microsoft.png";
import AzureInsights from "../../images/AzureInsights.png";
import PowerBI from "../../images/PowerBI.jpg";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class ExperienceItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        }
        return (
            <Container className="research-container" responsive="true">
            <Container className="microsoft-container" responsive="true">
                <Row>
                <Col xs={2}>    
                <Image responsive="true" style={{marginTop: "60px", marginLeft: "120px"}} src={Microsoft} fluid="true"/>  
                <div style={{color: "#f2ebdd", fontFamily: "Tahoma, Geneva, sans-serif", marginLeft: "120px", marginTop: "20px", width: "100%", fontSize: 18}}>
                    Redmond, Washington, United States
                </div>  
                <Row >    
                <Col >
                <Image width="100%" responsive="true" style={{marginTop: "30px", marginLeft: "90px"}} src={AzureInsights} fluid="true"/>
                </Col>
                <Col >
                <Image width="100%" style={{marginTop: "50px", marginLeft: "70px"}} responsive="true"  src={PowerBI} fluid="true"/> 
                </Col>
                </Row> 
                
                
                </Col>
                <Col xs={8}>
                <Container className="sign-language-text" responsive="true">
                    <div style={fontFormat} responsive="true">
                        <h3 style={{fontWeight:"medium", fontFamily: "Tahoma, Geneva, sans-serif", marginTop: "0px"}} responsive="true">
                            MICROSOFT
                        </h3>
                        <h4 style={{fontWeight:"500", fontFamily: "Tahoma, Geneva, sans-serif"}} responsive="true">
                            Sofware Engineer Intern, <i> May 2020 - July 2020 </i>
                        </h4>
                        <br></br>
                        <div responsive="true">
                        I consider myself extremely fortunate to have gotten the splendid opportunity to intern as a Software Engineer at a 
                        prestigious company like <a style={{color: "#E9C46A"}} href="https://www.microsoft.com/en-us/"><u>Microsoft</u></a> under
                        its <a style={{color: "#E9C46A"}} href="https://www.microsoft.com/en-us/itshowcase/working-in-cseo-the-heartbeat-of-microsoft"><u>Core Services Engineering and Operations (CSEO)</u></a> Organization. This internship introduced me to the nuances of 
                        Agile Software Development in the corporate world. Not only did this give me an incredible opportunity to hone by technical skills,
                        building meaningful interactions with full time employees, interns as well as leaders like <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Satya_Nadella"><u>Satya Nadella</u></a>, <a style={{color: "#E9C46A"}} 
                        href="https://en.wikipedia.org/wiki/Kurt_DelBene"><u> Kurt DelBene</u></a> and <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Phil_Spencer_(business_executive)"><u>Phil Spencer</u></a> helped me polish my communication,
                        presentation and leadership abilities and ingrained values of empathy, diligence and responsibility.                      
                        </div>
                        <br></br>
                        <div responsive="true">
                        As an intern within the Professional Services team, I designed and implemented a centralized telemetry service to monitor an all-inclusive web platform used by 
                        internal consultants to track their projects and finances. I developed a new telemetry system using <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Angular_(web_framework)"><u>Angular</u></a> and <a style={{color: "#E9C46A"}}
                         href="https://en.wikipedia.org/wiki/TypeScript"><u>TypeScript</u></a> that logs all UI events, page views, 
                        API requests and errors to <a style={{color: "#E9C46A"}} href="https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"><u>Azure Application Insights</u></a>. Using the real time user data that this 
                        </div>
                        {/* <div responsive="true">
                            Presentations:  <a style={{color: "#E9C46A"}} href="http://www.undergradresearch.gatech.edu/spring-symposium">
                             <u>Undergraduate Research Symposium at Georgia Tech (2019)</u></a>
                        </div> */}
                        
                    </div>
                </Container>
                </Col>
                <Container style={{marginLeft: "100px", marginTop: "2px", fontFamily: "Tahoma, Geneva, sans-serif",
                textAlign: "left", fontWeight: "800px", fontSize: "large", color: "#f2ebdd", width: "100%"}} responsive="true">
                <div responsive="true">
                system produced, I built dashboards using <a style={{color: "#E9C46A"}} href="https://docs.microsoft.com/en-us/azure/data-explorer/kusto/concepts/"><u>Kusto Query Language, Azure 
                        Data Explorer</u></a> and <a style={{color: "#E9C46A"}} href="https://powerbi.microsoft.com/en-us/"><u>Microsoft Power BI</u></a> to analyze user behavior and track key trends, feature usage and pain points across multiple pages and environments of the 
                        application.
                        This system thus helps assist debugging and product improvement, directly impacting the experience of over 5000 users of the application. It also drives every future business 
                        and engineering decision around feature investment, development and enhancement.
                </div>
                <br></br>
                        <div responsive="true">
                        My experience at Microsoft was embellished further with three additional projects across two hackathons as well as a Co-Creation project that lives very close to my heart.
                        Explore my <NavLink style={{color: "#E9C46A", textDecoration: 'none' }} exact to="/projects"><u>Projects</u></NavLink> page to learn more about them!
                        </div>
                </Container>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container className="ta-container" responsive="true">
                <Row>
                <Col xs={7}>
                <Container className="sign-language-text" responsive="true">
                    <div style={fontFormat} responsive="true">
                    <h3 style={{fontWeight:"medium", fontFamily: "Tahoma, Geneva, sans-serif", marginTop: "0px"}} responsive="true">
                            ONLINE LEARNING IN UNDERSERVED CONTEXTS
                        </h3>
                        <h4 style={{fontWeight:"500", fontFamily: "Tahoma, Geneva, sans-serif"}} responsive="true">
                            Technology and Design for Empowerment on the Margins (TanDEM) Lab
                        </h4>
                        {/* <h5 responsive="true">
                            <i>January 2019 - Present</i>
                        </h5> */}
                        <br></br>
                        <div responsive="true">
                        I am an undergraduate researcher at the Georgia Tech TanDEM Lab
                        advised by <a style={{color: "#E9C46A"}} href="https://www.nehakumar.org/"><u>Dr. Neha Kumar</u></a>. 
                        I am contributing towards a rich and evolving body of research on the design and development of education technology for 
                        underserved settings in the Global South. With the changing digital landscape, particularly during COVID-19, I am currently investigating 
                        how educational institutions working with underprivileged populations in India are coping with the transition to online learning.
                        </div>
                        <br></br>
                        <div responsive="true">
                        As part of this project, I have undertaken a qualitative study involving remote interviews (including group calls or focus groups) and an online survey with parents, 
                        students, teachers, and administrators from or working with underserved contexts where limited, intermittent, and/or shared access to mobile 
                        or computing devices and the internet has been the norm. 
                        Using these, I am examining which online platforms and sociotechnical infrastructures 
                        are supporting this transition. These results will help me co-design technology interventions to support the sustainable, long-term adoption of online 
                        learning in a post-COVID world, alongside a return to traditional classroom teaching.
                        </div>
                        <br></br>
                        <div responsive="true">
                            Awards:  <a style={{color: "#E9C46A"}} href="http://www.undergradresearch.gatech.edu/content/presidents-undergraduate-research-awards">
                             <u>President's Undergraduate Research Award (PURA) (2020)</u></a>
                        </div>
                        
                    </div>
                </Container>
                </Col>
                <Col xs={3}>     
                <Image width="70%" roundedCircle responsive="true" style={{marginLeft: "150px", marginTop: "80px"}} src={TANDEM} fluid="true"/>         
                
                <Image responsive="true" className="callibration-pic-format" style={{marginLeft: "100px", marginTop: "20px"}} src={Book} fluid="true"/>
                {/*
                <Image responsive="true" className="copy-cat-pic-format" src={CopyCatScreen} fluid="true"/>
                */}
                </Col>
                </Row>
            </Container>
            </Container>
            
        );
    }
}
export default ExperienceItems;