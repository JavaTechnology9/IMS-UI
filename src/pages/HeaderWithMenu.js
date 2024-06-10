import React, {Component} from "react";
import Menu from "./Menu";
import Header from "./Header";
class HeaderWithMenu extends Component{
    render() {
        const { username } = this.props;
        return(
            // <>
            // <Header />
            // <Menu/>
            // </>
            React.createElement("div",{},
            React.createElement(Header,{username: username}),React.createElement(Menu))
            
        );

    }
}

export default HeaderWithMenu;