import React from 'react'
import classes from '../modules/PopUpShop.module.css'
import {Row, Col, Modal,Button} from 'react-bootstrap'
import {BiEuro} from 'react-icons/bi'
function ShopModal(props)
{
    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img src={props.src} style={{width:'90%'}}/>
                    </Col>
                    <Col>
                        <Row className='d-flex flex-column'>
                            <Col>
                                <h3>{props.nume}</h3>
                            </Col>

                            <Col style={{margin:'5%'}}>
                                <h5>Price: {props.pret}<BiEuro style={{height:'120%'}}/></h5>
                            </Col>
                            
                            <Col style={{position:'absolute', left:'0', bottom:'0'}}>
                                 <Button variant="outline-dark">
                                    Add to cart
                                </Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>

    );
}

export default ShopModal;