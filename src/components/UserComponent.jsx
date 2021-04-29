import React from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'
function UserComponent(props)
{
    return(
        <Container fluid={true}>
        <Row className="justify-content-center " noGutters={true}>
            <Col sm={{ span: 1}}>
                {props.id}
            </Col>
            <Col >
                {props.username}
            </Col>
            <Col >
                {props.email}
            </Col>
            <Col sm={{ span: 2}}>
                <Button className="align-self-center">Change Username</Button>{' '}
            </Col>
            <Col sm={{ span: 2}}>
                <Button className="align-self-center">Change Password</Button>{' '}
            </Col>
            <Col sm={{ span: 0.5 }}>
                <Button className="align-self-end">Delete user</Button>{' '}
            </Col>
        </Row>
        </Container>
    );
}

export default UserComponent;