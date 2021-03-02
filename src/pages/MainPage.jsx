import React from "react"
import NavBar from "../components/NavbarComponent"
import BackgroundVideo from "../components/BackgroundVideo"
import { Container, Row, Col, Button } from 'react-bootstrap'
import FeatureCard from "../components/FeatureCard"
import classes from "../modules/MainPage.module.css"
import URL from "../resources/URL.json"
import '../resources/RobotoFont/Roboto-Light.ttf'
import '../resources/RobotoFont/Roboto-Italic.ttf'

function MainPage()
{
   
    return (
        <React.Fragment>
            <NavBar/>
            <BackgroundVideo />
            <div className={classes.featureContainer}>
                <Container fluid="md" className=" align-self-center justify-content-md-center " >
                    <Row className="justify-content-md-center ">
                        <p className={classes.featureText}>
                            This is why Bushido Eshop is suited for your martial arts needs.
                        </p>
                    </Row>
                    <Row className="justify-content-md-center ">
                        <Col className="d-flex justify-content-center ">
                            {/*  Best Protection Equipment  */}
                            <FeatureCard imageURL={URL.equipmentURL} feature="Best Protective Equipment" paragraph="We got the best equipment suited for your fighting skills"/>
                        </Col>
                        <Col className= "d-flex justify-content-center">
                            {/* Best Material */}
                            <FeatureCard imageURL={URL.materialURL} feature="Best Material" paragraph="The best material is used for all the products sold in the Bushido E-Shop"/>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            {/* Act like a PRO*/}
                            <FeatureCard imageURL={URL.proCoverURL} feature="Become the master" paragraph="Bushido E-Shop will go along with you in your martial arts journey"/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button variant="outline-dark" className={classes.featureButton}>Shop now</Button>{''}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default MainPage;