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
    position: "fixed",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
    width: '100%',
    height: "100%",
};
    var textStyle = {
      position: 'absolute', 
      top: '40%', 
      width: "100%",
      color: 'white',
      fontSize: 60,
      
    };
    // var offset = document.getElementById("introText").offsetLeft;
    var writeStyle = {
        position: 'absolute', 
        top: '50%',
        width: "100%",
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 60,
        
      };
    return(
      
        <div responsive="true" style={{backgroundColor: "#0e172a", maxWidth: "100%", minWidth: "100%"}}>
          <Image style={backgroundMe} responsive="true" src="https://undark.org/wp-content/uploads/2020/04/techtower-scaled.jpg" fluid="true"/>
            <div className = "wallpaper-text">
              <h1 style={textStyle} id="introText">Hi! My name is Prerna, I am a </h1>
                <h1 style={writeStyle} id="typeText"> 
              
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
          <AboutMe/>  

        </div>
        
    );
  }
}

export default HomePage;