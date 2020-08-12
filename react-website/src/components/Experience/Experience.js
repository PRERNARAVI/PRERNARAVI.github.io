import React from 'react';
import { Image, Container, Row, Card, Col} from 'react-bootstrap';
import ExperienceWallpaper from "../../images/ExperienceWallpaper.jpg";
import ExperienceItems from './ExperienceItems';
import Black from "../../images/black.jpg";
import BlackOne from "../../images/BlackOne.jpg";

class Experience extends React.Component {

    render() {
        var background = {
            marginTop: 60,
            marginRight: 0,
            marginLeft: 0,
            backgroundSize: 'cover',
            position: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '102%',
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
        <div responsive="true">    
            <Row className="justify-content-md-center"> 
            <Col xs={0} style={{alignContent: "center"}}>      
                <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/>
                <div className = "research-wallpaper-text">
                    {/* <p style={textStyle}>I believe academic knowledge offers a strong theoretical framework for developing practical 
                    solutions for meeting challenges faced by the community and society. With this in mind, I have undertaken to 
                    pursue research projects under the guidance of some very experienced luminaries. These research projects have 
                    offered me stimulating challenges often emboldening me to push the boundaries and go beyond convention and 
                    lateral thinking.  </p> */}
                </div>
            </Col>
                <ExperienceItems/>
            </Row>

        </div>
        );
    }
}
export default Experience;
