import React, {Component} from "react";
import HeaderWithMenu from "./HeaderWithMenu";

class Home extends Component {
    render() {
        return (<>
            <HeaderWithMenu/>
            <div>
                <h2>Manage your inventory, transaction and personnel, all in one place.</h2>
                <span> Click on the Menu button to start</span>
            </div>
        </>);
    }
}

export default Home;