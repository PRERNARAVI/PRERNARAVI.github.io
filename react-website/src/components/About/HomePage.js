import React from 'react';
import { Image, Container, Row, Col} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import AboutMe from './AboutMe';
 

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
      width: "100%",
      color: '#2D3436',
      fontSize: 45,
      paddingTop: "250px",
      lineHeight: 1.5,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      fontWeight: 500
    };
    var lastStyle = {
      position: 'absolute', 
      width: "100%",
      color: '#2C3E50',
      fontSize: 45,
      lineHeight: 1.5,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      fontWeight: 400
    };
    var writeStyle = {
        position: 'absolute', 
        width: "100%",
        color: '#3A1EB6',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: 1.5,
        fontSize: 50,
        fontWeight: 500
      };
    return(
      
        <div responsive="true" style={{backgroundColor: "#f8fafc", maxWidth: "100%", minWidth: "100%"}}>
          {/* <Image style={backgroundMe} responsive="true" src="https://wallpaperaccess.com/full/2943763.jpg" fluid="true"/> */}
          {/* <Image style={backgroundMe} responsive="true" src="https://wallpaperaccess.com/full/2943763.jpg" fluid="true"/>
            <div className = "wallpaper-text">
              <p >
              <h1 style={textStyle}> <div id="writing-text">Hi! My name is Prerna, I am a </div>
                
                <h1 style={writeStyle} >
                <Typewriter
                    options={{
                        strings: ['PhD Student', 'Computer Scientist', 'Researcher', 'Designer'],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 30,
                    }}
                />
                
                <div style={lastStyle}>based in the United States.</div>
                </h1>
              </h1>
              </p>
            </div> */}
          <AboutMe/>  

        </div>
        
    );
  }
}

export default HomePage;