import './Order.css';
import React, { useEffect, useState } from 'react';

const OrderTable = (props) => {
    const [customizes, setCustomizes] = useState([]);

    useEffect(() => {
        const token = 'abc123';

        fetch('http://localhost:5000/api/order/orders', {
            headers: new Headers({
                Authorization: `Bearer ${token}`,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => setCustomizes(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Order Items</th>
                    <th>Total Price</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>District</th>
                    <th>Delivery At</th>
                    <th>Delivery Charge</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.orders.length > 0 ? (
                    props.orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.orderItems}</td>
                            <td>{order.totalprice}</td>
                            <td>{order.email}</td>
                            <td>{order.phoneNo}</td>
                            <td>{order.address}</td>
                            <td>{order.district}</td>
                            <td>{order.deliveryAt}</td>
                            <td>{order.deliveryCharge}</td>
                            <td>{order.orderStatus}</td>
                            <td>
                                <select className="browser-default custom-select">
                                    <option>{order.district}</option>
                                    <option value="1">Done</option>
                                    <option value="2">On process</option>
                                    <option value="3">Rejected</option>
                                </select>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={10}>No orders</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default OrderTable;
