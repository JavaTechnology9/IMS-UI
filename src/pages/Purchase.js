import React, {Component} from "react";
import HeaderWithMenu from "./HeaderWithMenu";

class Purchase extends Component{
    render() {
        return(<>
            <HeaderWithMenu/>
            <div id={"product-container"}>
                <div><h1>Purchase Details</h1></div>
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
            </div>
            <div id={"add-product-container"}>
                <div>
                    <h2> Add Purchase</h2>
                </div>
                <form>
                    <div className={"add-product-input"}>
                        <div className={"add-product-details"}>
                            <label htmlFor={"productName"}> Product Name:</label>
                            <input type={"text"} name={"productName"} id={"productName"}/>
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
                                <button name={"add-product"}>Add Purchase</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>)
    }
}

export default Purchase;