import React from 'react'
import {Container, Col, Row} from "react-bootstrap"

function ShopItem(props)
{
    const reviewsText = `(${props.reviews} Reviews)` 
    const priceText = `Starting at $${props.price}`
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src={props.image} alt={props.alt}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>
                            {props.name}
                        </h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       {reviewsText} 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {priceText}
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default ShopItem;