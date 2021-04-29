import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import UserComponent from '../components/UserComponent'
function AdminPage(){
    const [data, setData]=useState([]);
    const getData=()=>{
        fetch('https://6081334d73292b0017cdcea7.mockapi.io/users')
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
            <h3>
                Admin Page
            </h3>
            <div className="d-flex flex-column" >
                <Row noGutters={true}>
                    {data && data.length>0 && data.map((obj) => <Col sm={{ span: 0.6}} style={{marginBottom:'0.5%'}} key={obj.id} sm={12}><UserComponent id={obj.id} username={obj.nume +' '+obj.prenume} email={obj.email}/></Col>)} 
                </Row>
            </div>
        </div>
    );
}

export default AdminPage;