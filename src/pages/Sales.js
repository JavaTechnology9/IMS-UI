import React, { Component } from "react";
import HeaderWithMenu from "./HeaderWithMenu";
import "../css/customer.css"
import axios from "axios";

class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            sellPrice: '',
            soldBy: '',
            quantity: '',
            message: '',
            price: '',
            products: [],
            customers:[],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSalePriceChange = this.handleSalePriceChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }
    handleSelectChange(event) {
        this.setState({
            productName: event.target.value
        })
    }
    handleSalePriceChange(event){
        this.setState({
            sellPrice: event.target.value
        })
    }
    handleCustomerChange(event){
        this.setState({
            soldBy: event.target.value
        })
    }

    findRecord() {
           return  this.state.products.filter(product=> product.productName===this.state.productName).map(product=>(
                <option key={product.sellingPrice}>
                    {product.sellingPrice}

                </option>)
            );
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:8080/products/getAllProducts');
        this.setState(() => ({
            products: response.data
        }))

        const customerResponse = await axios.get('http://localhost:8080/customer/getAllCustomers');
        this.setState(() => ({
            customers: customerResponse.data
        }))

    }

    async handleSubmit(event) {
        event.preventDefault();
        const { productName, sellPrice, quantity, soldBy } = this.state;
        const salesData = { productName, sellPrice, quantity, soldBy };
        try {
            console.log(salesData);
            const response = await axios.post('http://localhost:8080/sales/addSale', salesData);
            // if (response.status === 200) {
            //     this.setState({ message: response.data });
            // }
            if (response.status === 200) {
                alert(response.data);

                //this.props.navigate('/login');
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                const { status, data } = error.response;
                if (status === 401) {
                    this.setState({ message: data });
                } else if (status === 400) {
                    this.setState({ message: data });
                } else if (status === 500) {
                    this.setState({ message: data });
                } else {
                    this.setState({ message: 'An error occurred' });
                }
            } else if (error.request) {
                // The request was made but no response was received
                this.setState({ message: 'No response from server' });
            } else {
                // Something happened in setting up the request that triggered an Error
                this.setState({ message: 'Error: ' + error.message });
            }
        }

    }
    render() {

        return (<>
            <HeaderWithMenu />
            <div id={"product-container"}>
                <div><h1>Customer Details</h1></div>
                <div className="table-container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>CUSTOMER_ID</th>
                                <th>CUSTOMER_NAME</th>
                                <th>CUSTOMER_CODE</th>
                                <th>LOCATION</th>
                                <th>PHONE</th>
                                <th>Email</th>
                            </tr>

                        </thead>
                        <tbody>
                            {/* {this.state.customerData.map(customer => (
                            <tr key={customer.customerId}>
                                <td>{customer.customerId}</td>
                                <td>{customer.customerName}</td>
                                <td>{customer.customerCode}</td>
                                <td>{customer.location}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                            </tr>
                        ))} */}

                        </tbody>
                    </table>
                </div>
            </div>
            <div id={"add-product-container"}>
                <div>
                    <h4>{this.state.message}</h4>
                    <h2> Add Customer</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className={"add-product-input"}>
                        <div className={"add-product-details"}>
                            <label htmlFor={"customerName"}> Product Name:</label>
                            <select onChange={this.handleSelectChange}>
                                <option>Select Product Name</option>
                                {this.state.products.map(product => (
                                    <option key={product.id} value={product.productName}>
                                        {product.productName}

                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"location"}>Selling Price: </label>
                            <select onChange={this.handleSalePriceChange}>
                                <option>Select Price</option>
                                {this.state.productName && this.findRecord() }

                            </select>
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"phone"}>Quantity: </label>
                            <input type={"text"} id={"quantity"} name={"quantity"}  onChange={this.handleChange} required />
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"email"}>SoldBy: </label>
                            <select onChange={this.handleCustomerChange}>
                                <option>Select Customer Name</option>
                                {this.state.customers.map(customer => (
                                    <option key={customer.customerId} value={customer.customerName}>
                                        {customer.customerName}

                                    </option>
                                ))}
                            </select>
                        </div>

                        <div id={"add-product-login"}>
                            <div id={"add-product-login-button"}>
                                <button name={"add-product"}>Add Customer</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>)
    }
}

export default Sales;
