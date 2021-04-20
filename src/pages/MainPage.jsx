import React from "react"
import NavBar from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import BackgroundVideo from "../components/BackgroundVideo"
import { Container, Row, Col, Button } from 'react-bootstrap'
import FeatureCard from "../components/FeatureCard"
import classes from "../modules/MainPage.module.css"
import URL from "../resources/URL.json"
import '../resources/RobotoFont/Roboto-Light.ttf'
import '../resources/RobotoFont/Roboto-Italic.ttf'
import CategoryImage from '../components/CategoryImage'
import karateImage from '../resources/Karate.png'
import judoImage from '../resources/Judo.png'
import mmaImage from '../resources/MMA.png'
import kickboxImage from '../resources/Kickbox.png'

function MainPage()
{
    return (
        <React.Fragment>
            
            <BackgroundVideo />
            <div className={classes.featureContainer}>
                <Container fluid="md" className=" align-self-center justify-content-md-center " >
                    <Row className="justify-content-md-center ">
                        <p className={classes.featureText}>
                            Bushido Eshop is suited for your martial arts needs.
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
                            {/* Become a PRO*/}
                            <FeatureCard imageURL={URL.proCoverURL} feature="Become the master" paragraph="Bushido E-Shop will go along with you in your martial arts journey"/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="d-flex justify-content-center">
                            <Button variant="outline-dark" className={classes.featureButton}>Shop now</Button>{''}
                        </Col>
                    </Row>
                </Container>
            </div>
                <Container >
                 <Row className="justify-content-md-center " style={{position:'relative'}}>
                        <p className={classes.featureText}>
                            Categories from Bushido Eshop.
                        </p>
                    </Row>
                    
                    <Row >
                        <Col md={6} sm={12} >
                            <CategoryImage image={karateImage} header="KARATE"/>
                        </Col>
                        <Col md={6} sm={12} >
                            <CategoryImage image={mmaImage} header="MMA"/>
                        </Col>
                    </Row>
                    <Row  >
                        <Col md={6} sm={12} >
                            <CategoryImage image={kickboxImage} header="KICKBOX"/>
                        </Col>
                        <Col md={6} sm={12} >
                            <CategoryImage image={judoImage} header="JUDO"/>
                        </Col>
                    </Row>
                </Container>
        </React.Fragment>
    );
}

export default MainPage;