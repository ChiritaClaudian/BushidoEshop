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
                    
                    <Col className="justify-content-md-center ">
                    <Row className="d-flex flex-column">
                        
                            <Col sm={2} style={{margin:'1%'}}>
                                <h5 style={{margin:"5%"}}>
                                   Navigate
                                </h5>
                            </Col>
                            
                            <Col sm={2} style={{margin:'1%'}}>
                                <Link to={()=>{
                                window.scrollTo(0,0);
                                return "/";
                            }}>Home</Link>
                            </Col>
                            <Col sm={2} style={{margin:'1%'}}>
                                <Link to={()=>{
                                window.scrollTo(0,0);
                                return "/Market";
                            }}>Market</Link>
                            </Col>
                            <Col sm={2} style={{margin:'1%'}}>
                                <Link to={()=>{
                                window.scrollTo(0,0);
                                return "/About";
                            }}>About us</Link>
                            </Col>
                            
                        </Row>
                        
                    </Col>
                    <Col >
                        <Row className="d-flex flex-column">
                        
                            <Col sm={2} style={{margin:'1%'}}>
                                <h5 style={{margin:"5%"}}> Categories</h5>
                            </Col>
                            
                            <Col sm={2} style={{margin:'1%'}}>
                                <Link to="/Market/Judo" >Judo</Link>
                            </Col>
                            <Col sm={2} style={{margin:'1%'}}>
                                <Link to="/Market/Box" >Box</Link>
                            </Col>
                            <Col sm={2} style={{margin:'1%'}}>
                                <Link to="/Market/Kickbox" >Kickbox</Link>
                            </Col>
                            <Col sm={2} style={{margin:'1%'}}>
                                <Link to="/Market/MMA" >MMA</Link>
                            </Col>
                        </Row>
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