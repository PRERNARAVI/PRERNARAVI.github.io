import React from 'react';
import { Image, Container, Row, Col} from 'react-bootstrap';
import ResearchWallpaper from "../../images/research_wallpaper.jpg";
import PublicationsItems from './PublicationsItems';
import BlackOne from "../../images/BlackOne.jpg";

class Publications extends React.Component {

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
        <div responsive="true" style={{backgroundColor: "#f8fafc", maxWidth: "100%"}}>    

                <PublicationsItems/>


        </div>
        );
    }
}
export default Publications;
