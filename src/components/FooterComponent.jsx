import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
function FooterComponent()
{
    return(
        <div style={{padding:"5%"}}>
            <hr></hr>
            <Container fluid="md" className=" align-self-center justify-content-md-center ">
                <Row className="justify-content-md-center ">
                    <hr/>
                    <Col className="justify-content-md-center ">
                        <hr/>
                        <h5 style={{margin:"5%"}}>
                            Navigate
                        </h5>
                        {/* Aici ar trb sa fie o lista cu link-uri cu Shop About us si Home Page*/}
                        <p>
                            <Link to="/">Home Page</Link>
                        </p>
                        <p>
                            <Link to="/Market">Market place</Link>
                        </p>
                        <p>
                            <Link to="/AboutUs">About us</Link>
                        </p>
                    </Col>
                    <Col >
                        <hr/>
                        <h5 style={{margin:"5%"}}> Categories</h5>
                        <p>
                            Karate
                        </p>
                        <p>Judo</p>
                        <p>Kickbox</p>
                        <p>MMA</p>
                    </Col>
                </Row>

            </Container>

            <footer style={{padding:"5%"}}>
                <Container fluid="md" className=" align-self-center justify-content-md-center ">
                    <Row className="justify-content-md-center ">
                        <h4 style={{margin:"5%"}}>Follow us</h4>
                    </Row>
                    <Row className="justify-content-md-center " >
                        <Col className="d-flex justify-content-center ">
                            <AiOutlineFacebook size="3em"/>
                        </Col>
                        <Col className="d-flex justify-content-center ">
                            <AiOutlineInstagram size="3em"/>
                        </Col>
                        <Col className="d-flex justify-content-center ">
                            <AiOutlineTwitter size="3em"/>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default FooterComponent;