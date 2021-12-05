import React, {Component} from "react";
import OrderService from "../services/OrderService";
import QRCode from 'qrcode.react';

class DisplayOrder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            registrationNr: this.props.match.params.registrationNr,
            registrationDate: '',
            customerName: '',
            surname: '',
            email: '',
            telephone: '',
            manufacturer: '',
            model: '',
            serialNr: '',
            failure: ''
        }
    }

    componentDidMount() {
        OrderService.getOrderByRegNr(this.state.registrationNr).then((response) => {
            let order = response.data
            this.setState({
                registrationDate: order.registrationDate,
                customerName: order.customer.firstName,
                surname: order.customer.lastName,
                email: order.customer.email,
                telephone: order.customer.telNumber,
                manufacturer: order.device.manufacturer,
                model: order.device.model,
                serialNr: order.device.serialNumber,
                failure: order.device.failureDescription
            });

        });
    }

    backToOrders() {
        this.props.history.push('/orders');
    }

    render() {
        return (
            <div>
                <div className="card text-center">
                    <h5 className="card-header">Order {this.state.registrationNr} </h5>
                    <div className="card-body">
                        <p className="card-text">Registered on {this.state.registrationDate} </p>
                        <h6 className="card-title">Customer Info:</h6>
                        <p className="card-text">{this.state.customerName} {this.state.surname} </p>
                        <p className="card-text"> Email: {this.state.email} </p>
                        <p className="card-text">Tel. Number : {this.state.telephone} </p>
                        <h6 className="card-title">Device Info:</h6>
                        <p className="card-text">Manufacturer: {this.state.manufacturer} </p>
                        <p className="card-text">Model : {this.state.model} </p>
                        <p className="card-text">Serial Number: {this.state.serialNr} </p>
                        <p className="card-text">Failure Description: {this.state.failure} </p>
                        <button style={{marginLeft: "10px"}} onClick={ () => this.backToOrders()} className="btn btn-info">Back to Orders </button>
                    </div>
                    <div className="card-footer text-muted">
                        <QRCode value= {"Registration Number: " + this.state.registrationNr}/>

                    </div>
                </div>

            </div>
        );
    }

}

export default DisplayOrder;