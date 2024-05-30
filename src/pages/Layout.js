import {Component} from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
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
import Menu from "./Menu";
import HeaderWithMenu from "./HeaderWithMenu";
import Home from "./Home";

class Layout extends Component{
    render() {
        return(<BrowserRouter>
            <div className="App">
                <Routes>
                   <Route path={"/"} element={<Login/>}/>
                    <Route path={"/products"} element={<Products/>}/>
                    <Route path={"/purchase"} element={<Purchase/>}/>
                    <Route path={"/registration"} element={<Registration/>}/>
                    <Route path={"/sales"} element={<Sales/>}/>
                    <Route path={"/userLogs"} element={<UserLogs/>}/>
                    <Route path={"/users"} element={<Users/>}/>
                    <Route path={"/suppliers"} element={<Suppliers/>}/>
                    <Route path={"/currentStock"} element={<CurrentStock/>}/>
                    <Route path={"/customers"} element={<Customers/>}/>
                    <Route path={"/menu"} element={<HeaderWithMenu/>}/>
                    <Route path={"/userLogs"} element={<HeaderWithMenu/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>);
    }
}
export default Layout;