import React, {Component} from "react";
import '../Login.css';
import { Link,useNavigate } from "react-router-dom";
class Login extends Component {
    constructor() {
        super();
        this.state={
           username:'',
           password:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.setUsername=this.setUsername.bind(this);
        this.setPassword=this.setPassword.bind(this);
    }

    setPassword(event){
        this.setState({
            password: event.target.value
        });
    }
    setUsername(event){
        this.setState({
            username: event.target.value
        })
    }
    async handleSubmit(event) {
        event.preventDefault();
        console.log('Enter into handleSubmit function '+ this.state.username);
        try {
            // const response = await fetch('http://localhost:8080/login', {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(this.state.username, this.state.password)
            // });
            // if (!response.ok) {
            //     throw new Error("Login Failed");
            // }
            //
            // const data = await response.json();
            // console.log('Login successful', data);
            // if (data.isAuthenticated) {
            //     this.props.navigate('/menu');
            // } else {
            //     this.props.navigate('/login');
            // }
            this.props.navigate('/menu');
        }catch (error){
            window.alert(error);
        }
    }


    render() {
        return (
            <div id={"ims-login"}>
                <div id={"form-login"}>
                    <div>
                        <h2 id={"store-header"}>STORE INVENTORY</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className={"user-info"}>
                            <label htmlFor={"username"}>Username: </label>
                            <input type={"text"} name={"username"} id={"username"} onChange={this.setUsername} required/>
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"password"}>Password: </label>
                            <input type={"password"} name={"password"} id={"password"} onChange={this.setPassword} required/>
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
                                <Link to={"/registration"}><button name={"REGISTRATION"}>REGISTRATION</button></Link>
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

        return <Component {...props} navigate={navigate} />;
    };
};
export default withNavigation(Login);