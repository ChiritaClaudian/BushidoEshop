import React from "react"
import NavBar from "../components/NavbarComponent"
import BackgroundVideo from "../components/BackgroundVideo"
import { Container, Row, Col } from 'react-bootstrap'
import FeatureCard from "../components/FeatureCard"
import classes from "../modules/MainPage.module.css"
import URL from "../resources/URL.json"


function MainPage()
{
   
    return (
        <React.Fragment>
            <NavBar/>
            <BackgroundVideo />
            <Container fluid className={classes.featureContainer}>
                <Row>
                    <Col>
                        {/*  Best Protection Equipment  */}
                        <FeatureCard imageURL={URL.equipmentURL} feature="Best Protective Equipment" paragraph="We got the best equipment suited for your fighting skills"/>
                    </Col>
                    <Col>
                        {/* Best Material */}
                        <FeatureCard/>
                    </Col>
                    <Col>
                        {/* Act like a PRO*/}
                        <FeatureCard/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default MainPage;