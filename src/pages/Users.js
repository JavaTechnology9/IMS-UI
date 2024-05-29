import {Component} from "react";
import HeaderWithMenu from "./HeaderWithMenu";

class Users extends Component{
    render() {
        return(<>
            <HeaderWithMenu/>
            <div><h1>Users</h1></div>
            <div className="table-container">
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>LOCATION</th>
                        <th>PHONE</th>
                        <th>USERNAME</th>
                        <th>PASSWORD</th>
                        <th>USER_TYPE</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>30</td>
                        <td>123 Main St</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>25</td>
                        <td>456 Elm St</td>
                    </tr>
                    <tr>
                        <td>Emily Johnson</td>
                        <td>35</td>
                        <td>789 Oak St</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default Users;