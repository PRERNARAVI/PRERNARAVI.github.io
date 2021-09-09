import React from 'react';
import { Image, Container, Row, Col} from 'react-bootstrap';
import wallpaper from "../../images/home-page-wallpaper.png";
import Typewriter from 'typewriter-effect';
import AboutMe from './AboutMe';
import BlackOne from "../../images/BlackOne.jpg";
import Laptop from "../../images/Laptop.jpg";
import MeTwo from "../../images/meTwo.jpg";
 

class HomePage extends React.Component {

  render() {
  var backgroundMe = {
    marginTop: 40,
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.45,
    width: '100%',
    height: "100%",
};
    var textStyle = {
      position: 'absolute', 
      top: '40%', 
      left: '28%',
      color: 'white',
      fontSize: 60,
      
    };
    var writeStyle = {
        position: 'absolute', 
        top: '50%',
        left: '28%',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 60,
        
      };
    return(
      
        <div responsive="true" style={{backgroundColor: "#0e172a", maxWidth: "100%"}}>
        <Row>
          {/* <Image style={background} responsive="true" className="wallpaper-format" src={BlackOne} fluid="true"/> */}
          <Col xs={0} style={{alignContent: "center"}}>
          <Image style={backgroundMe} responsive="true" className="wallpaper-format" src="https://undark.org/wp-content/uploads/2020/04/techtower-scaled.jpg" fluid="true"/>
            <div className = "wallpaper-text">
              <h1 style={textStyle}>Hi! My name is Prerna, I am a </h1>
                <h1 style={writeStyle} > 
              
                <Typewriter
                    options={{
                        strings: ['Computer Scientist.', 'Researcher.','Teaching Assistant.','Student.'],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 30,
                    }}
                />
              </h1>
            </div>
            </Col>
          <AboutMe/>  
        </Row>
        
        
        </div>
        
    );
  }
}

export default HomePage;