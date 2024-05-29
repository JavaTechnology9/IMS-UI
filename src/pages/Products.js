import {Component} from "react";
import HeaderWithMenu from "./HeaderWithMenu";

class Products extends Component{
    render() {
        return(<>
            <HeaderWithMenu/>
            <div><h1>User Logs</h1></div>
            <div className="table-container">
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>PRODUCT_CODE</th>
                        <th>PRODUCT_NAME</th>
                        <th>COST_PRICE</th>
                        <th>SELL_PRICE</th>
                        <th>BRAND</th>
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
export default Products;