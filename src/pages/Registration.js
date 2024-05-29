import {Component} from "react";
import { Link } from "react-router-dom";
class Registration extends Component{
    render() {
        return(<div id={"ims-login"}>
            <div id={"form-login"}>
                <div>
                    <h2 id={"store-header"}>REGISTRATION</h2>
                </div>
                <form action="/action_page.php">
                    <div className="container">
                        <div className={"user-info"}>
                            <label htmlFor={"username"}>Username: </label>
                            <input type={"text"} name={"username"} id={"username"} placeholder="Enter Email" required/>
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"password"}>Password: </label>
                            <input type={"password"} name={"password"} id={"password"} required/>
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"password"}>MobileNo: </label>
                            <input type={"password"} name={"password"} id={"password"} required/>
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

export default Registration;
