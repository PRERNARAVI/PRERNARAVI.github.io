import React from "react"
import { Chrono } from "react-chrono";
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import Microsoft from "../../images/Microsoft.png";
  
class InterestsItems extends React.Component{
    render() {  
        const description = [
    <div style={{minHeight: "50px", fontFamily: "Tahoma, Geneva, sans-serif"}}> • Software Engineer Intern for the Employee Experience Team within Microsoft’s Cloud and Artificial Intelligence (C+AI) organization.<br/>
    • Designed and built an end-to end modern, intelligent solution for the Microsoft Office 365 Enterprise Records Management System used for storing over 6 million regulatory, legal, and business-critical electronic records spanning 100 countries managed in three regions (US, EMEA and Asia) for over 160,000 employees.<br/>
    • Constructed a pipeline to create file plans and retention policies that automatically labels, stores, retains, retrieves and disposes records stored across the entire Office 365 ecosystem (SharePoint, OneDrive, Teams, Outlook Exchange) using an in-place approach that allows users to manage their content from within existing repositories.<br/>
    • Built a microservice for transactional systems using Azure Functions and data connectors that leverages C# (.NET Core) Rest APIs, Azure Portal and Visual Studio resources to facilitate automatic and iterative migration of records from every external Microsoft System (Azure Cosmos DB, SQL, File/Data Storage Blobs, etc.) into the Office 365 infrastructure, after which the records get stored and retained in-place.<br/>
    • Implemented and trained machine learning models to automatically classify records stored across all Office 365 locations into different categories and extract critical and sensitive metadata information from them by leveraging Azure Machine Learning resources and SharePoint Syntex.<br/>
    • Established a workflow for creating queries to search specific records across all locations based on rules generated within the Office 365 Compliance Center.<br/>
    • Defined authorization and authentication rules for granting independent permissions and access to different user groups (admins, compliance teams, records owners and engineering teams) for the systems described above.</div>
        ]
        const items = [
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif"}}>May 2021 - July 2021<br/>Redmond, WA</div>,
                cardTitle: <h4 style={{textAlign: "center"}}>Software Engineer Intern at Microsoft</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: description,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    url: "https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg"
                    },
                    
                }
            },
            {
                title: <div style={{fontSize: "15px", fontFamily: "Tahoma, Geneva, sans-serif"}}>May 2021 - July 2021<br/>Redmond, WA</div>,
                cardTitle: <h4 style={{textAlign: "center"}}>Software Engineer Intern at Microsoft</h4>,
                //cardSubtitle:<h5 style={{color: "#f2ebdd", textAlign: "center"}}>Software Engineer Intern</h5>,
                cardDetailedText: description,
                media: 
                {
                    type: "IMAGE",
                    source: {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKa33kbFK2lr0RsHcx_hJ0fatx71EVwrp_Hawdsm5wnNlHc5I7pLdq88y00HbHaAw9E&usqp=CAU"
                    },
                    
                }
            },
        ];
        return (
            <Container style={{marginTop: "100px"}}>
                <Chrono items={items} 
                mode="VERTICAL_ALTERNATING"
                cardHeight="250"
                onScrollEnd
                hideControls
                theme={{ 
                    primary: "#E9C46A",
                    secondary: "black",
                    cardBgColor: "black",
                    cardForeColor: "#f2ebdd",
                    titleColor: "#f2ebdd",
                }}/>
                
                
            </Container>
        )
    }
}
export default InterestsItems;