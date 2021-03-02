import React from 'react'
import {classes} from '../modules/BackgroundVideo.module.css'
import {Button, Container, Row, Col} from 'react-bootstrap'

function mainPageButtons()
{
    return (
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
    );
}

export default mainPageButtons;