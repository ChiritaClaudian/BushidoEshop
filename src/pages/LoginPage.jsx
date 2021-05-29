import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { BiAward } from 'react-icons/bi';
function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let history = useHistory();
    const handleLogin = async () =>{

        const response = await fetch('http://192.168.0.95:30001/users/' + username);
        const user = await response.json();
        if(user == null)
            setShow(true)
        else if(user.password !== password)
            setShow(true)
        else
            setIsLoggedIn(true)
            console.log(show)
            
        
        
    }
    if(isLoggedIn){
        return(
        <Redirect to='/'/>
        );
    }
    else{
    return(
        <div style={{margin:"10% 35%", display:'flex'}} className="d-flex flex-column">
            
            <h3>Login</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="username" onChange={event => setUsername(event.target.value)} placeholder="Enter username"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={event => setPassword(event.target.value)} placeholder="Enter password"/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button style={{paddingLeft:"10%", paddingRight:"10%"}} className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
          
            
            <p className="forgot-password text-right">
                Don't have an account, <Link to="/register">register now!</Link>
            </p>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login error</Modal.Title>
                </Modal.Header>

                <Modal.Body>Bad credentials</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
    }
}

export default LoginPage;