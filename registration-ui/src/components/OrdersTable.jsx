import React from "react";

const OrdersTable = props => {
    const { orders } = props;

    return(  <table className="table table-bordered table-hover">
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
            orders.map(
                order =>
                    <tr key={order.registrationNr}>
                        <td>{order.registrationNr}</td>
                        <td>{order.registrationDate}</td>
                        <td>{order.customer.firstName} {order.customer.lastName}</td>
                        <td>{order.device.manufacturer} {order.device.model} </td>
                    </tr>
            )
        }
        </tbody>
    </table> );

}

export default OrdersTable;