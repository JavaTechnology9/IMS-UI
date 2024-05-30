import React, {Component} from "react";
import '../css/Login.css';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log('Enter into handleSubmit function ' + this.state.username);
        const {username, password} = this.state;
        const loginData = {username, password};
        try {
            const response = await axios.post('http://localhost:8080/login', loginData);
            if (response.status === 200) {
                alert(response.data);
                this.props.navigate('/menu');
            } else if (response.status === 204) {
                this.setState({message: 'Password does not match'});
            }

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                const {status} = error.response;
                if (status === 401) {
                    this.setState({message: 'Invalid username & password'});
                } else if (status === 400) {
                    this.setState({message: 'Username not found'});
                } else {
                    this.setState({message: 'An error occurred'});
                }
            } else if (error.request) {
                // The request was made but no response was received
                this.setState({message: 'No response from server'});
            } else {
                // Something happened in setting up the request that triggered an Error
                this.setState({message: 'Error: ' + error.message});
            }
        }
    }

    render() {
        return (
            <div id={"ims-login"}>
                <div id={"form-login"}>
                    <div>
                        <h4>{this.state.message}</h4>
                        <h2 id={"store-header"}>STORE INVENTORY</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className={"user-info"}>
                            <label htmlFor={"username"}>Username: </label>
                            <input type={"text"} name={"username"} id={"username"} onChange={this.handleChange}
                                   required/>
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"password"}>Password: </label>
                            <input type={"password"} name={"password"} id={"password"} onChange={this.handleChange}
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
            </div>);
    }
}

const withNavigation = (Component) => {
    return (props) => {
        const navigate = useNavigate();

        return <Component {...props} navigate={navigate}/>;
    };
};
export default withNavigation(Login);