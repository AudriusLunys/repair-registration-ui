import React, {Component} from 'react';
import OrderService from "../services/OrderService";

class ListOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        OrderService.getOrders().then((response) =>{
            this.setState({orders : response.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Repair Orders</h2>
                <div className="row">
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th> Registration Order Number</th>
                            <th> Registration Date</th>
                            <th> Customer</th>
                            <th> Device</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.orders.map(
                                order =>
                                    <tr  key={order.registrationNr}>
                                        <td>{order.registrationNr}</td>
                                        <td>{order.registrationDate}</td>
                                        <td>{order.customer.firstName } {order.customer.lastName}</td>
                                        <td>{order.device.manufacturer} {order.device.model} </td>

                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListOrders;