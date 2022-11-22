import React from 'react';
import { Image, Container, Row, Card, Col} from 'react-bootstrap';
import ExperienceWallpaper from "../../images/ExperienceWallpaper.jpg";
import ProjectsItems from './ProjectsItems';
import BlackOne from "../../images/BlackOne.jpg"

class Projects extends React.Component {

    render() {
        var background = {
            marginTop: 60,
            marginRight: 0,
            marginLeft: 0,
            backgroundSize: 'cover',
            position: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            width: '100%',
            height: "100%"
            
        };
        var textStyle = {
            position: 'absolute', 
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#F2EBDD",
            fontSize: 30,
            maxWidth: "85%",
            fontFamily: "Tahoma, Geneva, sans-serif",
            marginTop: "200px",
            marginLeft: "135px",
            marginRight: "30px",    
        };


        return (
        <div responsive="true" style={{backgroundColor: "#0e172a", maxWidth: "100%"}}>    
            <Row className="justify-content-md-center"> 
            <Col xs={0} style={{alignContent: "center"}}>      
                {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}
            </Col>
                <ProjectsItems/>
            </Row>

        </div>
        );
    }
}
export default Projects;
