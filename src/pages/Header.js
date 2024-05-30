import {Component} from "react";
import '../css/Header.css';

class Header extends Component{
    render() {
        return(<div class="topnav">
            <a class="active" href="#logout">Logout</a>
            <a href="#username">UserName</a>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>);
    }
}
export default Header;