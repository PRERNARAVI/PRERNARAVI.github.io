import React from 'react';
import { Image, Container, Row} from 'react-bootstrap';
import wallpaper from "../../images/home-page-wallpaper.png";
import Typewriter from 'typewriter-effect';
import AboutMe from './AboutMe';
 

class HomePage extends React.Component {

  render() {
    var background = {
    marginRight: 0,
    backgroundSize: 'cover',
    position: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  };
    var textStyle = {
      position: 'absolute', 
      top: '40%', 
      left: '25%',
      color: 'white',
      fontSize: 60,
      
    };
    var writeStyle = {
        position: 'absolute', 
        top: '50%',
        left: '30%',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 60,
        
      };
    return(
      
        <div responsive="true" >
        <Row>
          <Image style={background} responsive="true" className="wallpaper-format" src={wallpaper} fluid="true"/>
        
            <div className = "wallpaper-text">
              <h1 style={textStyle}>Hi! My name is Prerna, I am a </h1>
                <h1 style={writeStyle} > 
              
                <Typewriter
                    options={{
                        strings: ['Software Engineer.', 'Researcher.','Teaching Assistant.','Student.'],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 30,
                    }}
                />
              </h1>
            </div>
          <AboutMe/>  
        </Row>
        
        
        </div>
        
    );
  }
}

export default HomePage;