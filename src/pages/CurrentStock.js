import { Component } from "react";
import HeaderWithMenu from "./HeaderWithMenu";
import axios from "axios";
class CurrentStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStock: []
        }

    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:8080/currentStock/loadCurrentStock');
        console.log(response.data);
        this.setState(() => ({
            currentStock: response.data
        }))
    }

    render() {
        return (<>
            <HeaderWithMenu />
            <div id={"product-container"}>
                <div><h1>Current Stock</h1></div>
                <div className="table-container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>CURRENT_STOCK_ID</th>
                                <th>PRODUCT_NAME</th>
                                <th>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.currentStock.map(stock => (
                                <tr key={stock.currentStockId}>
                                    <td>{stock.currentStockId}</td>
                                    <td>{stock.products.productName}</td>
                                    <td>{stock.quantity}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>)
    }
}
export default CurrentStock;