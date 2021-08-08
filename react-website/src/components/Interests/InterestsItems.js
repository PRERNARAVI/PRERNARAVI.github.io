import React from "react"
import { Chrono } from "react-chrono";
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import Microsoft from "../../images/Microsoft.png";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { FadeIn, Pulse } from "react-animation-wrapper";
  
class InterestsItems extends React.Component{
    render() {  
        const items = [
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A"}}>May 2021 - July 2021<br/>Redmond, Washington, USA</div>,
                cardTitle: <h4 style={{textAlign: "center"}}>Software Engineer Intern at Microsoft</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "Tahoma, Geneva, sans-serif"}}> • Software Engineer Intern for the Employee Experience Team within Microsoft’s Cloud and Artificial Intelligence (C+AI) organization.<br/>
                • Designed and built an end-to end modern, intelligent solution for the Microsoft Office 365 Enterprise Records Management System used for storing over 6 million regulatory, legal, and business-critical electronic records spanning 100 countries managed in three regions (US, EMEA and Asia) for over 160,000 employees.<br/>
                • Constructed a pipeline to create file plans and retention policies that automatically labels, stores, retains, retrieves and disposes records stored across the entire Office 365 ecosystem (SharePoint, OneDrive, Teams, Outlook Exchange) using an in-place approach that allows users to manage their content from within existing repositories.<br/>
                • Built a microservice for transactional systems using Azure Functions and data connectors that leverages C# (.NET Core) Rest APIs, Azure Portal and Visual Studio resources to facilitate automatic and iterative migration of records from every external Microsoft System (Azure Cosmos DB, SQL, File/Data Storage Blobs, etc.) into the Office 365 infrastructure, after which the records get stored and retained in-place.<br/>
                • Implemented and trained machine learning models to automatically classify records stored across all Office 365 locations into different categories and extract critical and sensitive metadata information from them by leveraging Azure Machine Learning resources and SharePoint Syntex.<br/>
                • Established a workflow for creating queries to search specific records across all locations based on rules generated within the Office 365 Compliance Center.<br/>
                • Defined authorization and authentication rules for granting independent permissions and access to different user groups (admins, compliance teams, records owners and engineering teams) for the systems described above.</div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    url: "https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg"
                    },
                    
                }
                
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A"}}>January 2019 - Present<br/>Atlanta, Georgia, USA</div>,
                cardTitle: <h4 style={{textAlign: "center", color: "#E9C46A"}}>Head Teaching Assistant for the College of Computing at Georgia Tech</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div responsive="true">
                I am the Head Teaching Assistant for Object Oriented Programming in Java - an introductory  
                course that every Computer Science major and minor is required to take at Georgia Tech. As part of this role, 
                I have had the priviledge of working with professors like <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/John_Stasko"><u>John Stasko</u></a> and 
                Susan Watson-Phillips. 
                
                <br/>
    
                <i>"The Best Way to Learn is to Teach."</i> Guiding students and empowering them to grow
                into good programmers is irrefutably one of the most rewarding experiences I have had till date. Not only do I believe that
                teaching is the best way to give back to the community, it has also strengthened my knowledge in the area of 
                fundamental <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Object Oriented Programming</u></a> and the  
                core <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Java</u></a> language. As a member of the team of teaching assistants 
                for one of the largest Computer Science courses on campus, consisting of over 800 students every semester, I assist 
                the professors by preparing course materials for lectures and online tutorials to supplement the material being taught.
                Additionally, I conduct recitations and office hours to help students develop strong coding and debugging skills. I also
                build grading frameworks for programming assignments and exams that assess the students' understanding of the concepts covered 
                in the course. These daily responsibilities have ingrained in me the values of empathy, diginity, leadership, effective listening 
                and communication essential for an all rounded development.

                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    //url: <Image responsive="true" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKa33kbFK2lr0RsHcx_hJ0fatx71EVwrp_Hawdsm5wnNlHc5I7pLdq88y00HbHaAw9E&usqp=CAU"/>
                    url: "https://www.commonapp.org/static/5a6e71808ec8146b86066ba9a111c84d/georgia-institute-technology_578.jpg"
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A"}}>May 2020 - July 2020<br/>Redmond, Washington, USA</div>,
                cardTitle: <h4 style={{textAlign: "center", color: "#E9C46A"}}>Software Engineer Intern at Microsoft</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: 
                <div responsive="true">
                        I consider myself extremely fortunate to have gotten the splendid opportunity to intern as a Software Engineer at a 
                        prestigious company like <a style={{color: "#E9C46A"}} href="https://www.microsoft.com/en-us/"><u>Microsoft</u></a> under
                        its <a style={{color: "#E9C46A"}} href="https://www.microsoft.com/en-us/itshowcase/working-in-cseo-the-heartbeat-of-microsoft"><u>Core Services Engineering and Operations (CSEO)</u></a> Organization. This internship introduced me to the nuances of 
                        Agile Software Development in the corporate world and gave me an incredible opportunity to hone my technical skills.
                        Building meaningful interactions with full time employees, interns as well as leaders like <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Satya_Nadella"><u>Satya Nadella</u></a>, <a style={{color: "#E9C46A"}} 
                        href="https://en.wikipedia.org/wiki/Kurt_DelBene"><u> Kurt DelBene</u></a> and <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Phil_Spencer_(business_executive)"><u>Phil Spencer</u></a> helped me polish my communication,
                        presentation and leadership abilities and ingrained values of empathy, diligence and responsibility.                      
                        
                        <br></br>
                        
                        As an intern within the Professional Services team, I designed and implemented a centralized telemetry service to monitor an all-inclusive web platform used by 
                        internal consultants to track their projects and finances. I developed a new telemetry system using <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Angular_(web_framework)"><u>Angular</u></a> and <a style={{color: "#E9C46A"}}
                         href="https://en.wikipedia.org/wiki/TypeScript"><u>TypeScript</u></a> that logs all UI events, page views, 
                        API requests and errors to <a style={{color: "#E9C46A"}} href="https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"><u>Azure Application Insights</u></a>. Using the real time user data that this 
                        system produced, I built dashboards using <a style={{color: "#E9C46A"}} href="https://docs.microsoft.com/en-us/azure/data-explorer/kusto/concepts/"><u>Kusto Query Language, Azure 
                        Data Explorer</u></a> and <a style={{color: "#E9C46A"}} href="https://powerbi.microsoft.com/en-us/"><u>Microsoft Power BI</u></a> to analyze user behavior and track key trends, feature usage and pain points across multiple pages and environments of the 
                        application.
                        This system thus helps assist debugging and product improvement, directly impacting the experience of over 5000 users of the application. It also drives every future business 
                        and engineering decision around feature investment, development and enhancement.
                
                        <br></br>
                        
                        My experience at Microsoft was embellished further with three additional projects across two hackathons as well as a Co-Creation project that lives very close to my heart.
                        Explore my <NavLink style={{color: "#E9C46A", textDecoration: 'none' }} exact to="/projects"><u>Projects</u></NavLink> page to learn more about them!
                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    url: "https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg"
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A"}}>June 2020 - June 2021<br/>Atlanta, Georgia, USA</div>,
                cardTitle: <h4 style={{textAlign: "center", color: "#E9C46A"}}>Fellow and Software Developer at Rewriting the Code</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div responsive="true">
                I am the Head Teaching Assistant for Object Oriented Programming in Java - an introductory  
                course that every Computer Science major and minor is required to take at Georgia Tech. As part of this role, 
                I have had the priviledge of working with professors like <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/John_Stasko"><u>John Stasko</u></a> and 
                Susan Watson-Phillips. 
                
                <br/>
    
                <i>"The Best Way to Learn is to Teach."</i> Guiding students and empowering them to grow
                into good programmers is irrefutably one of the most rewarding experiences I have had till date. Not only do I believe that
                teaching is the best way to give back to the community, it has also strengthened my knowledge in the area of 
                fundamental <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Object Oriented Programming</u></a> and the  
                core <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Java</u></a> language. As a member of the team of teaching assistants 
                for one of the largest Computer Science courses on campus, consisting of over 800 students every semester, I assist 
                the professors by preparing course materials for lectures and online tutorials to supplement the material being taught.
                Additionally, I conduct recitations and office hours to help students develop strong coding and debugging skills. I also
                build grading frameworks for programming assignments and exams that assess the students' understanding of the concepts covered 
                in the course. These daily responsibilities have ingrained in me the values of empathy, diginity, leadership, effective listening 
                and communication essential for an all rounded development.

                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    //url: <Image responsive="true" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKa33kbFK2lr0RsHcx_hJ0fatx71EVwrp_Hawdsm5wnNlHc5I7pLdq88y00HbHaAw9E&usqp=CAU"/>
                    url: "https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/oU2KTehvQ6ip_Gj8uoIefQ.png"
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A"}}>June 2021 - July 2021<br/>Stanford, California, USA</div>,
                cardTitle: <h4 style={{textAlign: "center", color: "#E9C46A"}}>Human Centered Design Instructor at Code.X</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div responsive="true">
                I am the Head Teaching Assistant for Object Oriented Programming in Java - an introductory  
                course that every Computer Science major and minor is required to take at Georgia Tech. As part of this role, 
                I have had the priviledge of working with professors like <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/John_Stasko"><u>John Stasko</u></a> and 
                Susan Watson-Phillips. 
                
                <br/>
    
                <i>"The Best Way to Learn is to Teach."</i> Guiding students and empowering them to grow
                into good programmers is irrefutably one of the most rewarding experiences I have had till date. Not only do I believe that
                teaching is the best way to give back to the community, it has also strengthened my knowledge in the area of 
                fundamental <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Object Oriented Programming</u></a> and the  
                core <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Java</u></a> language. As a member of the team of teaching assistants 
                for one of the largest Computer Science courses on campus, consisting of over 800 students every semester, I assist 
                the professors by preparing course materials for lectures and online tutorials to supplement the material being taught.
                Additionally, I conduct recitations and office hours to help students develop strong coding and debugging skills. I also
                build grading frameworks for programming assignments and exams that assess the students' understanding of the concepts covered 
                in the course. These daily responsibilities have ingrained in me the values of empathy, diginity, leadership, effective listening 
                and communication essential for an all rounded development.

                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    //url: <Image responsive="true" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKa33kbFK2lr0RsHcx_hJ0fatx71EVwrp_Hawdsm5wnNlHc5I7pLdq88y00HbHaAw9E&usqp=CAU"/>
                    url: "https://images.squarespace-cdn.com/content/v1/5a32ae139f07f50bae6c69ef/9d2bcf78-4821-4e34-91e7-5f91430fd671/Code.X_Logo-removebg-preview+%281%29.png"
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif", color: "#E9C46A"}}>January 2019 - May 2020<br/>Atlanta, Georgia, USA</div>,
                cardTitle: <h4 style={{textAlign: "center", color: "#E9C46A"}}>Training Manager at Robogals Global</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div responsive="true">
                I am the Head Teaching Assistant for Object Oriented Programming in Java - an introductory  
                course that every Computer Science major and minor is required to take at Georgia Tech. As part of this role, 
                I have had the priviledge of working with professors like <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/John_Stasko"><u>John Stasko</u></a> and 
                Susan Watson-Phillips. 
                
                <br/>
    
                <i>"The Best Way to Learn is to Teach."</i> Guiding students and empowering them to grow
                into good programmers is irrefutably one of the most rewarding experiences I have had till date. Not only do I believe that
                teaching is the best way to give back to the community, it has also strengthened my knowledge in the area of 
                fundamental <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Object Oriented Programming</u></a> and the  
                core <a style={{color: "#E9C46A"}} href="https://en.wikipedia.org/wiki/Object-oriented_programming"><u>Java</u></a> language. As a member of the team of teaching assistants 
                for one of the largest Computer Science courses on campus, consisting of over 800 students every semester, I assist 
                the professors by preparing course materials for lectures and online tutorials to supplement the material being taught.
                Additionally, I conduct recitations and office hours to help students develop strong coding and debugging skills. I also
                build grading frameworks for programming assignments and exams that assess the students' understanding of the concepts covered 
                in the course. These daily responsibilities have ingrained in me the values of empathy, diginity, leadership, effective listening 
                and communication essential for an all rounded development.

                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    //url: <Image responsive="true" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKa33kbFK2lr0RsHcx_hJ0fatx71EVwrp_Hawdsm5wnNlHc5I7pLdq88y00HbHaAw9E&usqp=CAU"/>
                    url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Robogals_Logo.svg/1200px-Robogals_Logo.svg.png"
                    },
                    
                }
            },
        ];
        return (
            <Container style={{marginTop: "100px"}}>
                <FadeIn>
                <Chrono items={items} 
                mode="VERTICAL_ALTERNATING"
                cardHeight="200"
                hideControls
                theme={{ 
                    primary: "#E9C46A",
                    secondary: "black",
                    cardBgColor: "black",
                    cardForeColor: "#f2ebdd",
                    titleColor: "#f2ebdd",
                }}/>
                </FadeIn>
                
                
            </Container>
        )
    }
}
export default InterestsItems;