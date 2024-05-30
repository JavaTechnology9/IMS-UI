import React, {Component} from "react";
import HeaderWithMenu from "./HeaderWithMenu";
//import {Link} from "react-router-dom";
import "../css/product.css"

class Products extends Component {
    render() {
        return (<>
            <HeaderWithMenu/>
            <div id={"product-container"}>
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
                            <td>45.63</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>25</td>
                            <td>456 Elm St</td>
                            <td>45.63</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>Emily Johnson</td>
                            <td>35</td>
                            <td>789 Oak St</td>
                            <td>45.63</td>
                            <td>Apple</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id={"add-product-container"}>
                <div>
                    <h2> Add Product</h2>
                </div>
                <form>
                    <div className={"add-product-input"}>
                    <div className={"add-product-details"}>
                        <label htmlFor={"productName"}> Product Name:</label>
                            <input type={"text"} name={"productName"} id={"productName"} />
                    </div>
                    <div className={"add-product-details"}>
                        <label htmlFor={"quantity"}>Quantity: </label>
                        <input type={"text"} id={"quantity"} className={"quantity"}/>
                    </div>
                    <div className={"add-product-details"}>
                        <label htmlFor={"cost-price"}>Cost Price: </label>
                        <input type={"text"} id={"cost-price"} className={"cost-price"}/>
                    </div>
                    <div className={"add-product-details"}>
                        <label htmlFor={"selling-price"}>Selling Price: </label>
                        <input type={"text"} id={"selling-price"} className={"selling-price"}/>
                    </div>
                    <div className={"add-product-details"}>
                        <label htmlFor={"product-brand"}>Brand: </label>
                        <input type={"text"} id={"product-brand"} className={"product-brand"}/>
                    </div>

                    <div id={"add-product-login"}>
                        <div id={"add-product-login-button"}>
                            <button name={"add-product"}>Add Product</button>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </>)
    }
}

export default Products;