import { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

//create async func to make POST request to server. 
//Takes credentials as arg, calls fetch method using POST option
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
     .then(data => data.json())
}

export default function Login({ setToken }) {

    //create a local state to capture username and password
    //since we do not need to manually set data, make <inputs> uncontrolled components
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    //create a form submit handler handleSubmit that will call loginUser with the username & password.
    //call setToken with a successful result.
    //call handleSubmit using onSubmit event handler on the <form>
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
        
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}