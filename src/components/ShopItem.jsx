import React from 'react'
import {Container, Col, Row} from "react-bootstrap"
import {Button} from 'react-bootstrap'
import {BiEuro} from 'react-icons/bi'

function ShopItem(props)
{
    const reviewsText = `(${props.reviews} Reviews)` 
    const priceText = `Starting at ${props.price}`
    return(
        <div style={{padding:'5%'}} >
            <Container >
                <Row className="flex-column">
                    <Col className='d-flex justify-content-center '>
                        <img style={{width:'90%'}} src={props.image} alt={props.alt}/>
                    </Col>

                    <Col className='d-flex justify-content-center mt-auto'>
                        <h5>
                            {props.name}
                        </h5>
                    </Col>

                    <Col className='d-flex justify-content-center'>
                       {props.reviews} Reviews 
                    </Col>

                    <Col className='d-flex justify-content-center' style={{alignText:'center'}}>
                        Starting at {props.price}<BiEuro style={{height:'112%'}}/>
                    </Col>

                    <Col style={{padding:'5%'}} className="d-flex justify-content-center ">
                        <Button variant="outline-dark">
                        Add to cart
                        </Button>{' '}
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default ShopItem;