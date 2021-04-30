import React from 'react'
import "bootstrap"
import 'react-bootstrap'
import backgroundVideo from '../resources/martialArts.mp4'
import classes from '../modules/BackgroundVideo.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../resources/RobotoFont/Roboto-Medium.ttf'
import {useMediaQuery} from 'react-responsive'
import backgroundImage from '../resources/bushido_cover.jpg'
import { useHistory } from "react-router-dom"

function BackgroundVideo(props)
{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const history = useHistory();
    
    if(isTabletOrMobile)
        return(
            <div className={classes.container}>
                <img src={backgroundImage} style={{width:'100%'}} alt="poza cu bushido"/>
                <Container fluid="md" className=" align-self-center justify-content-md-center " style={{position:'absolute'}}>
                    <Row className="py-auto justify-content-md-center ">
                        <Col md="auto" >
                            <p style={{margin:"15%"}} className={classes.content}>
                                Welcome to the Bushido E-shop 
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className={classes.buttons}>
                            <Button variant="light" style={{margin:"1%"}} onClick={()=>{history.push("/Market");}}>
                                Shop Now
                            </Button>{' '}
                            <Button variant="light" style={{margin:"1%"}} onClick={()=>{history.push("/About");}}>
                                Learn more
                            </Button>{' '}
                        </Col>    
                    </Row>
                </Container>
            </div>
        );
    else
        return(
            <div className={classes.container} > 
                <video autoPlay loop muted className={classes.video}>
                    <source src={backgroundVideo} type='video/mp4'/>
                </video>
                <Container fluid="md" className=" align-self-center justify-content-md-center " style={{position:"absolute"}}>
                    <Row className="py-auto justify-content-md-center ">
                        <Col md="auto" >
                            <p className={classes.content}>
                                Welcome to the Bushido E-shop 
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className={classes.buttons}>
                            <Button variant="light" style={{margin:"1%"}} onClick={()=>{history.push("/Market");}}>
                                Shop Now
                            </Button>{' '}
                            <Button variant="light" style={{margin:"1%"}} onClick={()=>{history.push("/About");}}>
                                Learn more
                            </Button>{' '}
                        </Col>
                        
                    
                    </Row>
                </Container>
                
            </div>
        );
}

export default BackgroundVideo;