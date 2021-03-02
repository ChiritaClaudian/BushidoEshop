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
                    <Col md>
                        {/*  Best Protection Equipment  */}
                        <FeatureCard imageURL={URL.equipmentURL} feature="Best Protective Equipment" paragraph="We got the best equipment suited for your fighting skills"/>
                    </Col>
                    <Col md>
                        {/* Best Material */}
                        <FeatureCard imageURL={URL.materialURL} feature="Best Material" paragraph="The best material is used for all the products sold in the Bushido E-Shop"/>
                    </Col>
                    <Col md>
                        {/* Act like a PRO*/}
                        <FeatureCard/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default MainPage;