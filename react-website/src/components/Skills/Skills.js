import React from 'react';
import { Image, Container, Row, Col} from 'react-bootstrap';
import ResearchWallpaper from "../../images/research_wallpaper.jpg";
import SkillsItems from './SkillsItems';
import BlackOne from "../../images/BlackOne.jpg";

class Research extends React.Component {

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
                <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/>
                {/* <div className = "research-wallpaper-text">
                    <p style={textStyle}>I believe academic knowledge offers a strong theoretical framework for developing practical 
                    solutions for meeting challenges faced by the community and society. With this in mind, I have undertaken to 
                    pursue research projects under the guidance of some very experienced luminaries. These research projects have 
                    offered me stimulating challenges often emboldening me to push the boundaries and go beyond convention and 
                    lateral thinking.  </p>
                </div> */}
            </Col>
                <SkillsItems/>
            </Row>

        </div>
        );
    }
}
export default Research;
