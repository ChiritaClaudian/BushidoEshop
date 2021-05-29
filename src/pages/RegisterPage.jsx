import React,{useState} from 'react'

function RegisterPage(){
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleLogin = () => {
        //ar trb sa schimb pagina si sa setez un cookie
        //ar trb sa fac post 
        console.log("hello")
        var details = {
            'username': username,
            'password': password,
            'mail': email
            };
            console.log(username + password + email)
            var formBody = [];
            for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            fetch('http://192.168.0.95:30001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Access-Control-Allow-Origin': 'origin-list'
            },
            body: formBody
            }).then(function(response){
                console.log(response);
                return response.json();
            })
            .then(function(myJson){
                console.log(myJson);
            });
    }
    return(
        <div style={{margin:"10% 35%", display:'flex'}} className="d-flex flex-column">
            <h3>Register</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="username" onChange={event => setUsername(event.target.value)} autoComplete="Enter first name"/>
            </div>

                <div className="form-group">
                <label>Email address</label>
                <input type="email" onChange={event => setEmail(event.target.value)} autoComplete="Enter email"/>
            </div>

                <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={event => setPassword(event.target.value)} autoComplete="Enter password"/>
            </div>

            <button style={{paddingLeft:"10%", paddingRight:"10%"}} onClick={handleLogin} className="btn btn-primary btn-block">Signed up</button>
            
        </div>
    );
}


export default RegisterPage;