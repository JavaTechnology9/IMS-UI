import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/registration.css';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            mobileNo: '',
            fullName: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }
    async handleSubmit(event) {
        event.preventDefault();
        const { username, password, mobileNo, fullName } = this.state;
        const registrationData = { username, password, mobileNo, fullName };
        try {
            console.log(registrationData);
            const response = await axios.post('http://localhost:8080/registration', registrationData);
            
            if (response.status === 200) {
                alert(response.data);
                this.props.navigate('/login');
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                const { status, data } = error.response;
                if (status === 401) {
                    this.setState({ message: data });
                } else if (status === 400) {
                    this.setState({ message: data });
                } else if (status === 500) {
                    this.setState({ message: data });
                } else {
                    this.setState({ message: 'An error occurred' });
                }
            } else if (error.request) {
                // The request was made but no response was received
                this.setState({ message: 'No response from server' });
            } else {
                // Something happened in setting up the request that triggered an Error
                this.setState({ message: 'Error: ' + error.message });
            }
        }

    }
    render() {
        return (<div id={"ims-login"}>
            <div id={"form-login"}>
                <div>
                    <h4>{this.state.message}</h4>
                    <h2 id={"store-header"}>REGISTRATION</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className={"user-info"}>
                            <label htmlFor={"fullName"}>Full Name: </label>
                            <input type={"text"} name={"fullName"} id={"fullName"} placeholder="Enter Full Name" onChange={this.handleChange} required />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"username"}>Username: </label>
                            <input type={"text"} name={"username"} id={"username"} placeholder="Enter Email" onChange={this.handleChange} required />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"password"}>Password: </label>
                            <input type={"password"} name={"password"} id={"password"} placeholder="Enter Password" onChange={this.handleChange} required />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"mobileNo"}>MobileNo: </label>
                            <input type={"text"} name={"mobileNo"} id={"mobileNo"} placeholder="Enter Mobile No" onChange={this.handleChange} required />
                        </div>

                        <div id={"login"}>
                            <div id={"login-button"}>
                                <button name={"LOGIN"}>REGISTRATION</button>
                            </div>

                        </div>
                    </div>

                    <div className="container signin">
                        <p>Already have an account? <Link to={"/"}>Sign in</Link>.</p>
                    </div>

                </form>
            </div>
        </div>);
    }
}
const withNavigation = (Component) => {
    return (props) => {
        const navigate = useNavigate();

        return <Component {...props} navigate={navigate} />;
    };
};

export default withNavigation(Registration);
