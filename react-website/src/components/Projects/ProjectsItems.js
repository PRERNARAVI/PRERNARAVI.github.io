import React from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap';
import TANDEM from "../../images/TANDEM.jpg";
import Book from "../../images/Book.png";
import Microsoft from "../../images/Microsoft.png";
import AzureInsights from "../../images/AzureInsights.png";
import PowerBI from "../../images/PowerBI.jpg";
import CoC from "../../images/CoC.jpg";
import Java from "../../images/Java.png";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AnimationWrapper } from 'react-hover-animation'

class ProjectsItems extends React.Component{
    render () {
        var fontFormat = {
            fontFamily: "Tahoma, Geneva, sans-serif",
        }
        return (
            <Container responsive="true">
                <Row>
                <Col md='6'>
                        <MDBView hover zoom>
                        <Image
                            src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                            className="img-fluid"
                            style={{backgroundSize : 'cover'}}
                            alt=""
                        />
                        <h1>Hi</h1>
                        <MDBMask className="flex-center">
                            <p className="white-text">Zoom effect</p>
                        </MDBMask>
                        </MDBView>
                </Col>
                <Col>
                <MDBView hover zoom>
                <div class="card card-image"
  style={{backgroundImage: "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"}}>


  <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
      <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>
      <h3 class="card-title pt-2"><strong>This is the card title</strong></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
        Odit sed qui, dolorum!.</p>
      <a class="btn btn-pink"><i class="fas fa-clone left"></i> View project</a>
    </div>
  </div>

</div>
</MDBView>
                </Col>
                </Row>
            </Container>
            
        );
    }
}
export default ProjectsItems;