import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Purchase from "./Purchase";
import Registration from "./Registration";
import Sales from "./Sales";
import Suppliers from "./Suppliers";
import UserLogs from "./UserLogs";
import Users from "./Users";
import CurrentStock from "./CurrentStock";
import Customers from "./Customers";
import Home from "./Home";
import Logout from './Logout';
import HeaderWithMenu2 from "./HeaderWithMenu2";

class Layout extends Component {
    render() {
        return (<BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path={"/products"} element={<Products />} />
                    <Route path={"/purchase"} element={<Purchase />} />
                    <Route path={"/registration"} element={<Registration />} />
                    <Route path={"/sales"} element={<Sales />} />
                    <Route path={"/userLogs"} element={<UserLogs />} />
                    <Route path={"/users"} element={<Users />} />
                    <Route path={"/suppliers"} element={<Suppliers />} />
                    <Route path={"/currentStock"} element={<CurrentStock />} />
                    <Route path={"/customers"} element={<Customers />} />
                    <Route path={"/menu"} element={<HeaderWithMenu2 />} />
                    <Route path={"/userLogs"} element={<UserLogs />} />
                    <Route path={"/home"} element={<Home />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/logout"} element={<Logout />} />
                </Routes>
            </div>
        </BrowserRouter>);
    }
}
export default Layout;