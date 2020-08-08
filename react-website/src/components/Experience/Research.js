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
            top: '40%', 
            left: '25%',
            color: 'white',
            fontSize: 60,
            
        };


        return (
        <div responsive="true">    
            <Row>       
                <Image style={background} responsive="true" className="wallpaper-format" src={ResearchWallpaper} fluid="true"/>
                <div className = "research-wallpaper-text">
                    <p style={textStyle}>Hi! My name is Prerna, I am a </p>
                </div>
                <ResearchItems/>
            </Row>    
        </div>
        );
    }
}
export default Research;
