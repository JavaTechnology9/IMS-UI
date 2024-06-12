import { Component } from "react";
import HeaderWithMenu from "./HeaderWithMenu";
import '../css/TableComponent.css'
import axios from "axios";

class UserLogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:8080/loadAllUsers');
        console.log(response.data);
        this.setState(() => ({
            userData: response.data
        }))
    }
    render() {
        return (<>
            <HeaderWithMenu />
            <div id={"product-container"}>
                <div><h1>User Logs</h1></div>
                <div className="table-container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>USERNAME</th>
                                <th>IN_TIME</th>
                                <th>OUT_TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userData.map(user => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.loginTime}</td>
                                    <td>{user.logoutTime}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>)
    }
}

export default UserLogs;
