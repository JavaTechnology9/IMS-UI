import React, { Component } from "react";
import HeaderWithMenu from "./HeaderWithMenu";
import "../css/customer.css"
import axios from "axios";

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            location: '',
            phone: '',
            email: '',
            message: '',
            customerData: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value,
        });
    }
    async componentDidMount() {
        const response = await axios.get('http://localhost:8080/customer/getAllCustomers');
        console.log(response.data);
        this.setState(() => ({
            customerData: response.data
        }))
    }
    async handleSubmit(event) {
        event.preventDefault();
        const { customerName, location, phone, email } = this.state;
        const customerData = { customerName, location, phone, email };
        try {
            console.log(customerData);
            const response = await axios.post('http://localhost:8080/customer/addCustomer', customerData);

            if (response.status === 200) {
                alert(response.data);
                window.location.reload();

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
                            {this.state.customerData.map(customer => (
                                <tr key={customer.customerId}>
                                    <td>{customer.customerId}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.customerCode}</td>
                                    <td>{customer.location}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.email}</td>
                                </tr>
                            ))}

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
                            <label htmlFor={"customerName"}> Customer Name:</label>
                            <input type={"text"} name={"customerName"} id={"customerName"} placeholder="Enter Customer Name" onChange={this.handleChange} required />
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"location"}>Location: </label>
                            <input type={"text"} id={"location"} name={"location"} placeholder="Enter Location" onChange={this.handleChange} required />
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"phone"}>Phone NO: </label>
                            <input type={"text"} id={"phone"} name={"phone"} placeholder="Enter Phone No" onChange={this.handleChange} required />
                        </div>
                        <div className={"add-product-details"}>
                            <label htmlFor={"email"}>Email: </label>
                            <input type={"text"} id={"email"} name={"email"} placeholder="Enter Email" onChange={this.handleChange} required />
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

export default Customers;