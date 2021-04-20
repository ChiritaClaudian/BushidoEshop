import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ShopItem from '../components/ShopItem'

function MarketPage()
{
    const itemsArray = []
    let itemShop = {
        src : "ceva url", 
        alt : "o imagine super cool",
        name: "un produs super cool",
        reviews: "10",
        price: "25"         
    }
    for(var i = 0; i < 10; i++){
        itemsArray.push(itemShop)
    }
    return(
        <div>
            <Container style={{alignItems:"center", padding:"10%"}} >
                <Row className="justify-content-md-center ">
                    <Col className="mx-auto" >
                        <h3 style={{marginLeft:"45%"}}>Shop</h3>
                        <p style={{textAlign:"center"}}>
                            You want to start your martial artist journey or you already achived your life goals and want to benefit from the best equipment available on the market?
                            Bushido-Eshop is on your side and ready to offer what u are looking for.
                        </p>
 
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default MarketPage;