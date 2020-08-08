import React from 'react';
import { Image, Container, Row} from 'react-bootstrap';
import ResearchWallpaper from "../../images/research-wallpaper.jpg";
import ResearchItems from './ResearchItems';

class Research extends React.Component {

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
            
        };
        var textStyle = {
            position: 'absolute', 
            marginTop: "250px",
            marginLeft: "200px",
            color: 'white',
            fontSize: 25,
            width: "45%",
            fontFamily: "Tahoma, Geneva, sans-serif",
            
        };


        return (
        <div responsive="true">    
            <Row>       
                <Image style={background} responsive="true" className="wallpaper-format" src={ResearchWallpaper} fluid="true"/>
                <div className = "research-wallpaper-text">
                    <p style={textStyle}>I believe academic knowledge offers a strong theoretical framework for developing practical 
                    solutions for meeting challenges faced by the community and society. With this in mind, I have undertaken to 
                    pursue research projects under the guidance of some very experienced luminaries. These Research projects have 
                    offered me stimulating challenges often emboldening me to push the boundaries and go beyond convention and 
                    lateral thinking.  </p>
                </div>
                <ResearchItems/>
            </Row>    
        </div>
        );
    }
}
export default Research;
