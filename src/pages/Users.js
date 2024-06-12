import { Component } from "react";
import HeaderWithMenu from "./HeaderWithMenu";
import axios from "axios";
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }

    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:8080/loadRegistrations');
        console.log(response.data);
        this.setState(() => ({
            userData: response.data
        }))
    }

    render() {
        return (<>
            <HeaderWithMenu />
            <div><h1>Users</h1></div>
            <div id={"product-container"}>
                <div><h1>User Details</h1></div>
                <div className="table-container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>MOBILE_NO</th>
                            </tr>

                        </thead>
                        <tbody>
                            {this.state.userData.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.username}</td>
                                    <td>{user.mobileNo}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>)
    }
}
export default Users;