import React, {Component} from "react";
import '../css/Menu.css'
import {Link} from "react-router-dom";
class Menu extends Component{
    render() {
        return(
            <>
            <div>
            <ul>
                <li><a className="active" href="/home">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/currentStock">Current Stock</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/suppliers">Suppliers</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/purchase">Purchase</a></li>
                <li><a href="/users">Users</a></li>
                <li><a href="/userLogs">UserLogs</a></li>
                <Link to={"/registration"}><button name={"REGISTRATION"}>REGISTRATION</button></Link>
            </ul>
        </div>
            </>);
    }
}

export default Menu;