import React from "react"
import { Chrono } from "react-chrono";
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import Microsoft from "../../images/Microsoft.png";
  
class InterestsItems extends React.Component{
    render() {  
        const description = [
    <div> • Software Engineer Intern for the Employee Experience Team within Microsoft’s Cloud and Artificial Intelligence (C+AI) organization.<br/>
    • Designed and built an end-to end modern, intelligent solution for the Microsoft Office 365 Enterprise Records Management System used for storing over 6 million regulatory, legal, and business-critical electronic records spanning 100 countries managed in three regions (US, EMEA and Asia) for over 160,000 employees.<br/>
    • Constructed a pipeline to create file plans and retention policies that automatically labels, stores, retains, retrieves and disposes records stored across the entire Office 365 ecosystem (SharePoint, OneDrive, Teams, Outlook Exchange) using an in-place approach that allows users to manage their content from within existing repositories.<br/>
    • Built a microservice for transactional systems using Azure Functions and data connectors that leverages C# (.NET Core) Rest APIs, Azure Portal and Visual Studio resources to facilitate automatic and iterative migration of records from every external Microsoft System (Azure Cosmos DB, SQL, File/Data Storage Blobs, etc.) into the Office 365 infrastructure, after which the records get stored and retained in-place.<br/>
    • Implemented and trained machine learning models to automatically classify records stored across all Office 365 locations into different categories and extract critical and sensitive metadata information from them by leveraging Azure Machine Learning resources and SharePoint Syntex.<br/>
    • Established a workflow for creating queries to search specific records across all locations based on rules generated within the Office 365 Compliance Center.<br/>
    • Defined authorization and authentication rules for granting independent permissions and access to different user groups (admins, compliance teams, records owners and engineering teams) for the systems described above.</div>
        ]
        const items = [
            {
                title: "May 1940",
                cardTitle: "Microsoft",
                cardSubtitle:"Redmond, WA",
                cardDetailedText: description,
                media: {
                    type: "IMAGE",
                    source: {
                    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXyUCJ/ugAApO//uQD////yTh/zVy2EvRYWp/D/uxbyTBvzXziJvyQkq/D/viRJQpTmAAABDUlEQVR4nO3PyRHCQBAEwRHo5vDfXD1ZC5oYyHKgIqtSLev8aZtixYCEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQdhUuq81vCNdZjED63WDX/eoT9I+wfYf8I+0fYv9pjvYbt+4hVt1j7IDzusQgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/WXgB6/1wCkBWrdwAAAAASUVORK5CYII="
                    }
                }
            },
            {
                title: "May 1940",
                cardTitle: "Dunkirk",
                cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
                cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
                media: {
                    type: "IMAGE",
                    source: {
                    url: "http://someurl/image.jpg"
                    }
                }
            },
        ];
        return (
            <Container style={{marginTop: "100px"}}>
                <Chrono items={items} 
                mode="VERTICAL_ALTERNATING"
                theme={{ 
                    primary: "#f2ebdd",
                    secondary: "#f2ebdd",
                    cardBgColor: "black",
                    cardForeColor: "#f2ebdd",
                    titleColor: "black",
                }}>
                </Chrono>
                
                
            </Container>
        )
    }
}
export default InterestsItems;