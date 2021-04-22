import React, {useState, useEffect} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ShopItem from '../components/ShopItem'

async function getProduse(){
    try {
        let response = await fetch('https://6081334d73292b0017cdcea7.mockapi.io/shop');
        let responseJson = await response.json();
        return responseJson['0']['Produse'];
   } catch(error) {
    console.error(error);
  }
}


function MarketPage()
{

    const [data, setData]=useState([]);
    const getData=()=>{
        fetch('https://6081334d73292b0017cdcea7.mockapi.io/shop')
            .then(function(response){
                console.log(response);
                return response.json();
            })
            .then(function(myJson){
                console.log(myJson);
                setData(myJson);
            });
    }
    useEffect(()=>{
        getData()
    }, []);
    
   

    
    return(
        <div>
            <Container >
                <Row  style={{alignItems:"center", padding:"10%"}} className="justify-content-md-center ">
                    <Col className="mx-auto" >
                        <h3 style={{marginLeft:"45%"}}>Shop</h3>
                        <p style={{textAlign:"center"}}>
                            You want to start your martial artist journey or you already achived your life goals and want to benefit from the best equipment available on the market?
                            Bushido-Eshop is on your side and ready to offer what u are looking for.
                        </p>
 
                    </Col>
                </Row>
                <div className="d-flex flex-column">
                    <Row >
                      {data && data.length>0 && data[0]['Produse'].map((obj) => <Col key={obj.id} md={4} sm={6}><ShopItem image={obj.src} alt={obj.alt} name={obj.nume} reviews={obj.reviews} price={obj.pret}/></Col>)} 
                    </Row>
                </div>
                
            </Container>
        </div>
    );

}

export default MarketPage;