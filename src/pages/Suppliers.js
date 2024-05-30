import React, {Component} from "react";
import HeaderWithMenu from "./HeaderWithMenu";
import "../css/supplier.css";

class Suppliers extends Component{
    render() {
        return(<>
            <HeaderWithMenu/>
            <div id={"product-container"}>
                <div><h1>Suppliers</h1></div>
                <div className="table-container">
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>PRODUCT_CODE</th>
                            <th>PRODUCT_NAME</th>
                            <th>QUANTITY</th>
                            <th>SELL_PRICE</th>
                            <th>COST_PRICE</th>
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
                    <h2> Add Supplier Detail</h2>
                </div>
                <form>
                    <div className={"add-product-input"}>
                        <div className={"add-product-details"}>
                            <label htmlFor={"productName"}> Supplier Name:</label>
                            <input type={"text"} name={"productName"} id={"productName"}/>
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"address"}>Address: </label>
                            <input type={"text"} id={"address"} className={"address"}/>
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"contact-number"}>Contact Number: </label>
                            <input type={"text"} id={"contact-number"} className={"contact-number"}/>
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"debit-amount"}>Debit Amount: </label>
                            <input type={"text"} id={"debit-amount"} className={"debit-amount"}/>
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"credit-amount"}>Credit Amount: </label>
                            <input type={"text"} id={"credit-amount"} className={"credit-amount"}/>
                        </div>

                        <div id={"add-product-login"}>
                            <div id={"add-product-login-button"}>
                                <button name={"add-product"}>Add Supplier</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>)
    }
}

export default Suppliers;