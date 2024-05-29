import {Component,React} from "react";
import Menu from "./Menu";
import Header from "./Header";
class HeaderWithMenu extends Component{
    render() {
        return(
            <>
            <Header/>
            <Menu/>
            </>
        );

    }
}

export default HeaderWithMenu;