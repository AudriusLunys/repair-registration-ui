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
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> stulpelis1</th>
                            <th> stulpelis2</th>
                            <th> stulpelis3</th>
                            <th> stulpelis4</th>
                            <th> stulpelis5</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.orders.map(
                                order =>
                                    <tr key={order.registrationNr}>
                                        <td>{order.registrationNr}</td>
                                        <td>{order.registrationDate}</td>
                                        <td>{order.repairDescription}</td>
                                        <td>{order.customer.firstName}</td>

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