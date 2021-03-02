import React from 'react'
import "bootstrap"
import 'react-bootstrap'
import backgroundVideo from '../resources/martialArts.mp4'
import classes from '../modules/BackgroundVideo.module.css'
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import '../resources/RobotoFont/Roboto-Medium.ttf'
import 'bootstrap'
function BackgroundVideo()
{
    return (
       
        <div className={classes.container}> 
           
            
         <Container fluid="md" className=" align-self-center justify-content-md-center ">
            <Row className="py-auto justify-content-md-center ">
                <Col md="auto" >
                    <p className={classes.content}>
                        Wellcome to the Busho E-shop 
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className={classes.buttons}>
                    <Button variant="light">
                        Shop Now
                    </Button>{' '}
                    <Button variant="light">
                        Learn more
                    </Button>{' '}
                </Col>
                
                    
                
            </Row>
            </Container>
            <video autoPlay loop muted className={classes.video}>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
        </div>
       
       
    );
}

export default BackgroundVideo;