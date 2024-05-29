import {Component} from "react";
import HeaderWithMenu from "./HeaderWithMenu";

class Purchase extends Component{
    render() {
        return(<>
            <HeaderWithMenu/>
            <div><h1>User Logs</h1></div>
            <div className="table-container">
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>PURCHASE_ID</th>
                        <th>PRODUCT_CODE</th>
                        <th>PRODUCT_NAME</th>
                        <th>QUANTITY</th>
                        <th>TOTAL_COST</th>
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
export default Purchase;