import React from "react"
import { Chrono } from "react-chrono";
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import MicrosoftLogo from "../../images/Microsoft_logo.svg";
import GoogleLogo from "../../images/Google_logo.png";
import GT from "../../images/GT.png";
import RTC from "../../images/RTC.png";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { FadeIn, Pulse } from "react-animation-wrapper";
  
function show() {
    console.log("XXXXXXXXXXXXXXX");
    for(const x of document.getElementByClassName("show-more")) {
        console.log(x);
        x.style.color = "white";
    }
} 
class ExperienceItems extends React.Component{
    render() {  
        const items = [

            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>May 2023 - August 2023<br/>Redmond, Washington, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Design Researcher Intern at Microsoft</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}>
                    · Research in generative AI tools for neurodivergent and limited mobility groups within Microsoft's Windows + AI UX research team. <br/>
                    · Deployed a foundational accessibility study to investigate the delighters and pain-points that people with disabilities encounter when using personal devices as well as AI tools. Also investigated their perceptions, expectations, and ethical concerns when using AI platforms. <br/>
                    · Designed and employed qualitative methods: surveys, unmoderated diary missions, and semi-structured interviews—to collect the above data and used deductive coding analysis to draw emerging trends between the two user groups. <br/>
                    · Conducted co-design workshops with users to inform future needs and directions for the integration of generative AI platforms into the Microsoft Windows ecosystem.
                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                        url: MicrosoftLogo
                    },
                    
                }
                
            },

            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>May 2022 - July 2022<br/>Redmond, Washington, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Software Engineer Intern at Microsoft</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}>· Software Engineer Intern for the Corporate, External, and Legal Affairs (CELA) team within <a href="https://www.microsoft.com/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Microsoft</u></a>'s Experiences and Devices (E&D) organization. <br/>
                · Designed and built an end-to-end Office 365 Extension/Add-in: Legal Ease for Microsoft's Artifact Management System, used for onboarding all legal matters (involving law firms for example), their stakeholders and documents into the Office 365 Infrastructure. <br/>
                · Constructed a pipeline using React and C# .NET Core APIs to facilitate the smooth migration of artifacts sent via email on the Exchange server to the rest of the Office 365 ecosystem (SharePoint, OneDrive, Teams), thereby centralizing their storage.<br/>
                · Developed an ML-based recommendation service for the add-in that displays projects (already in SharePoint) pertinent to the emails opened on Outlook, allowing users to iterate on existing matters and eliminating duplication. <br/>
                · Deployed the add-in to the Office 365 add-in store, thereby making it available to over 220,000 employees.
                · Formulated and conducted extensive accessibility assessments to test the functionality of interactive interface elements for the accessibility team within CELA.</div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                        url: MicrosoftLogo
                    },
                    
                }
                
            },

            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>January 2022 - April 2022<br/>Mountain View, California, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Research Intern at Google AI</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}> 
                • Research Intern for the <a href="https://research.google/teams/perception/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Perception Team</u></a> at <a href="https://research.google/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Google Research</u></a> advised 
                by <a href="https://en.wikipedia.org/wiki/Thad_Starner" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Thad Starner</u></a>, <a href="https://www.linkedin.com/in/mgeorg/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Manfred Georg</u></a>, and <a href="https://www.linkedin.com/in/gcsung/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>George Sung</u></a>.
                <br/>· Collected and annotated over 1 million videos for an American Sign Language (ASL) fingerspelling dataset in collaboration with the National Technical Institute for the Deaf (NTID) and DPAN (Deaf Professional Arts Network). 
                <br/>· Built an automated data processing pipeline for extracting features and tracking movement using pose estimation tools: Google MediaPipe. 
                <br/>· Led the development, training, testing and fine tuning of multiple models-- Hidden Markov Models (HMMs), Long Short-Term Memory models (LSTMs), and Transformers-- used for fingerspelling sign recognition.
                <br/></div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                        url: GoogleLogo
                    },
                    
                }
                
            },

            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>May 2021 - July 2021<br/>Redmond, Washington, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Software Engineer Intern at Microsoft</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}> • Software Engineer Intern for the Employee Experience Team within <a href="https://www.microsoft.com/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Microsoft</u></a>'s Cloud and Artificial Intelligence (C+AI) organization.<br/>
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
                        url: MicrosoftLogo
                    },
                    
                }
                
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>January 2019 - October 2021<br/>Atlanta, Georgia, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Head Teaching Assistant for the College of Computing at Georgia Tech</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}>
                • Head Teaching Assistant for CS 1331- Object-Oriented Programming in Java for <a style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}} href="https://en.wikipedia.org/wiki/John_Stasko"><u>Dr. John Stasko</u></a> at <a style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}} href="https://www.cc.gatech.edu/"><u>Georgia Tech.</u></a><br/>
                • Managed a team of 30 Teaching Assistants (8% of total undergraduate TAs employed by the College of Computing) for the course.<br/>
                • Substituted as a lecturer for over 800 students when the professor is not available.<br/>
                • Directed the Teaching Assistant hiring process and conducted interviews for candidate TAs every semester.<br/>
                • Ensured quality and timely delivery of course materials.<br/>
                • Assigned responsibilities and coordinate between the internal teams for homeworks, lectures, exams, office hours and autograders.<br/>
                • Redesigned course schedule, handled individual student exceptions and grades and oversaw course communication announcements and emails.<br/>
                • Conducted recitations and office hours to instruct and train over 800 undergraduates in fundamental Object-Oriented Programming Concepts and help them develop strong coding and debugging skills.<br/>
                • Developed frameworks to grade weekly programming assignments.

                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                        url: GT
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>May 2020 - July 2020<br/>Redmond, Washington, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Software Engineer Intern at Microsoft</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: 
                <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}>
                    • Software Engineer Intern for Professional Services within <a href="https://www.microsoft.com/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Microsoft</u></a>'s Core Services Engineering and Operations (CSEO) organization.<br/>
                    • Designed and implemented a centralized telemetry service to monitor an all-inclusive web platform used by internal consultants to track their projects and finances.<br/>
                    • Developed a new telemetry system using Angular and TypeScript that logs all UI events, page views, API requests and errors to assist debugging and product improvement, thereby directly impacting 5000+ users.<br/>
                    • Standardized telemetry and documented new rules and updated naming conventions, to make telemetry development and querying from Azure Application Insights fast, efficient and consistent.<br/>
                    • Built dashboards from real-time user data using Kusto Query Language (KQL), Azure Data Explorer and Microsoft Power BI to analyze user behavior and track key trends, feature usage and main pain points across multiple environments, so as to make recommendations for improving application performance.<br/>
                                
                        
                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                        url: MicrosoftLogo
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>June 2020 - June 2021<br/>Atlanta, Georgia, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Fellow and Software Developer at Rewriting the Code</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}>
                • Awarded a Fellowship from <a href="https://rewritingthecode.org/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Rewriting the Code (RTC)</u></a> for the Academic Year 2020-2021.<br/>
                • Designed and built a referral portal for over 10,000 RTC members worldover to facilitate the referral process between RTC members currently working/interning at various companies and members seeking jobs.<br/>
                • Created an accessible user interface using React.js that allows for member and alumni sign-up and authentication, professional profile creation, referral assignments and management.<br/>
                • Developed endpoints for the above functionality in the backend using Node.js and Express.js.<br/>
                • Constructed databases using MongoDB to store member and company data, as well as referral history and information.<br/>

                </div>,
                media: 
                {
                    type: "IMAGE",
                    source: {
                        url: RTC
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>June 2021 - July 2021<br/>Stanford, California, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Human Centered Design Instructor at Code.X</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}>
                • Instructor for Human Centered Design for <a href="https://www.codedotx.org/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Code.X</u></a> under its summer program which serves over 150 students.<br/>
• Led the Human Centered Design Year 3 program which guides students through an end-to-end process of identifying a problem space, ideation, outlining user personas, conducting market research and creating minimum viable products (MVPs), visioning, low and high-fidelity prototyping, heuristic evaluations, and usability testing.<br/>
• Created course materials and delivered lectures on principles of human centered design, qualitative user research, laws of user experience (UX), information architecture, visual design, branding and aesthetic refinement, and evaluation of prototypes.<br/>
• Organized and supervised design sprints with every student group to execute the above mentioned processes for their capstone projects.<br/>

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
                title: <div style={{fontSize: "15px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#3A1EB6"}}>January 2019 - May 2020<br/>Atlanta, Georgia, USA</div>,
                cardTitle: <h5 style={{textAlign: "center", color: "#3A1EB6", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Training Manager at Robogals Global</h5>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: <div style={{minHeight: "50px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#2D3436"}}>
                • Nominated to the executive board of <a href="https://robogals.org/" style={{color: "#1E88E5", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}><u>Robogals</u></a> at Georgia Tech, as the Training Manager. <br/>
• Developed and programmed robots for engineering workshops. <br/>
• Led workshops to teach students and train volunteers on the basics of robotics workshop knowledge needed.<br/>
• Organized STEM based events to expose primary, middle and high school girls to robotics, computing and other STEM fields.<br/>
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

        let active = window.screen.width < 580;
        let activeTwo = window.screen.width < 580;

        
        return (
            <div style={{paddingTop: "80px", paddingBottom: "80px", paddingLeft: "0px", paddingRight: "0px", backgroundColor: "#f8fafc", maxWidth: "100%"}}>
            <Container  >
            <br/><br/>
            <div style={{height: "4px", width: "48px", background: "#3A1EB6", borderRadius: "2px", marginBottom: "18px"}}></div>
            <h4 style={{color: "#3A1EB6", marginBottom: "20px", textAlign: "left", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Places I've Worked and Volunteered at</h4>
            <br/>
                <Chrono items={items} 
                mode= {active? "VERTICAL": "VERTICAL_ALTERNATING"}
                cardHeight={activeTwo? "100": "200"}
                hideControls
                theme={{ 
                    primary: "#3A1EB6",
                    secondary: "#f5f7fd",
                    cardBgColor: "#fff",
                    cardForeColor: "#2D3436",
                    titleColor: "#2D3436",
                }}/>

            </Container>

            <script>
                  show();
            </script>
            </div>
        )
    }
}
export default ExperienceItems;