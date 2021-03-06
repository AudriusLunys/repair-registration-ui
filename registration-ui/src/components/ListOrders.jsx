import React, {Component} from 'react';
import OrderService from "../services/OrderService";
import Pagination from "./Pagination";
import {paginate} from "../services/paginate";

class ListOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            currentPage: 1,
            pageSize: 10
        }
    }
    orderInfo(registrationNr){
        this.props.history.push(`/order/${registrationNr}`);
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    };


    componentDidMount() {
        OrderService.getOrders().then((response) => {
            this.setState({orders: response.data});
        });
    }

    render() {
        const {pageSize, currentPage} = this.state;

        const orders = paginate(this.state.orders, currentPage, pageSize);

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
                            <th> Order Info</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map(
                                order =>
                                    <tr key={order.registrationNr}>
                                        <td>{order.registrationNr}</td>
                                        <td>{order.registrationDate}</td>
                                        <td>{order.customer.firstName} {order.customer.lastName}</td>
                                        <td> <button style={{marginLeft: "10px"}} onClick={ () => this.orderInfo(order.registrationNr)} className="btn btn-info">Review Order </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={this.state.orders.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>
            </div>
        );
    }
}

export default ListOrders;