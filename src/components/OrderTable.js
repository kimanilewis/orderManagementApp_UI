import React from 'react';

const OrderTable = ({ orders, openModal }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Business ID</th>
          <th>Department</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td>{order.order_id}</td>
            <td>{order.business_id}</td>
            <td>{order.department}</td>
            <td>{order.amount}</td>
            <td>
              <button onClick={() => openModal(order)}>View Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
