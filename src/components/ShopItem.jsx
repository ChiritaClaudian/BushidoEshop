import React, {useState} from 'react'
import {Container, Col, Row} from "react-bootstrap"
import {Button} from 'react-bootstrap'
import {BiEuro} from 'react-icons/bi'
import ShopModal from './ShopModal'

function ShopItem(props)
{
    const [isHover, setHover] = useState(false);
    const [seen, setSeen] = useState(false);
    return(
        <div style={{margin:'10%', padding:'5%'}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}  className={isHover ? "border border-dark" : ""}>
            <Container onClick={()=>setSeen(true)}>
                <Row className="flex-column">
                    <Col className='d-flex justify-content-center '>
                        <img style={{width:'95%'}} src={props.image} alt={props.alt}/>
                    </Col>

                    <Col className='d-flex justify-content-center mt-auto' >
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

                </Row>

            </Container>
            <Row>
                <Col style={{padding:'5%'}} className="d-flex justify-content-center ">
                        <Button variant="outline-dark">
                        Add to cart
                        </Button>{' '}
                </Col>
            </Row>
            <ShopModal show={seen} onHide={()=>setSeen(false)} pret={props.price} src={props.image} nume={props.name}/>
        </div>
    );
}

export default ShopItem;