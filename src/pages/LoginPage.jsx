import React from 'react';
import {Link} from 'react-router-dom'

function LoginPage(){
    return(
        <div style={{margin:"10% 35%", display:'flex'}} className="d-flex flex-column">
            <form>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button style={{paddingLeft:"10%", paddingRight:"10%"}} type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                    Don't have an account, <Link to="/register">register now!</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;