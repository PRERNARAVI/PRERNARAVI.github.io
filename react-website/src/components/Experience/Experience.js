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
            padding: 0,
            backgroundSize: 'cover',
            position: 'fixed',
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
        <div responsive="true" style={{backgroundColor: "#f8fafc", maxWidth: "100%"}}>    


    
                {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}

                <ExperienceItems/>



        </div>
        );
    }
}
export default Experience;
