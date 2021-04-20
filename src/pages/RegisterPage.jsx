import React from 'react'

function RegisterPage(){
    return(
        <div style={{margin:"10% 35%", display:'flex'}} className="d-flex flex-column">
            <form>
                <h3>Login</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="firstName" className="form-control" placeholder="Enter first name"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="secondName" className="form-control" placeholder="Enter second name"/>
                </div>

                
                 <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                 <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <button style={{paddingLeft:"10%", paddingRight:"10%"}} type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
        </div>
    );
}

export default RegisterPage;