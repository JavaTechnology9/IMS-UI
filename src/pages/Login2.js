import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderWithMenu2 from './HeaderWithMenu2';
import '../css/Login.css';
import {Link} from "react-router-dom";
const Login2 = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword]= useState(null);
    //const [loginResponse, setLoginResponse] =useState(null);
   const [message, setMessage] = useState(null);

    useEffect(() => {
        // const {username, password} = this.state;
        // const loginData = {username, password};
        axios.post('http://localhost:8080/login', {username, password})
           
            .then(response => {
                // Set the response data to state
                setUsername(response.data);
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    const {status} = error.response;
                    if (status === 401) {
                        setMessage('Invalid username & password');
                    } else if (status === 400) {
                        setMessage('Username not found');
                    } else {
                       setMessage('An error occurred');
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    setMessage('No response from server');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setMessage('Error: ' + error.message);
                }
            });
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div>
           <><HeaderWithMenu2 username={username} />
           <div id={"ims-login"}>
                <div id={"form-login"}>
                    <div>
                        <h4>{message}</h4>
                        <h2 id={"store-header"}>STORE INVENTORY</h2>
                    </div>
                    <form >
                        <div className={"user-info"}>
                            <label htmlFor={"username"}>Username: </label>
                            <input type={"text"} name={"username"} id={"username"} onChange={(e)=>setUsername(e.target.value)}
                                   required/>
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"password"}>Password: </label>
                            <input type={"password"} name={"password"} id={"password"} onChange={(e)=>setPassword(e.target.value)}
                                   required/>
                        </div>
                        <div id={"custom-select"}>
                            <select>
                                <option selected>ADMINISTRATOR</option>
                                <option>USER</option>
                            </select>
                        </div>
                        <div id={"login"}>
                            <div id={"login-button"}>
                                <button name={"LOGIN"}>LOGIN</button>
                            </div>
                            <div>
                                <Link to={"/registration"}>
                                    <button name={"REGISTRATION"}>REGISTRATION</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           </>
            
        </div>
    );
};

export default Login2;