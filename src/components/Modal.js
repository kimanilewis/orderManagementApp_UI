import React from 'react';

const Modal = ({ order, isOpen, closeModal }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2>Order Details</h2>
          <p>Order ID: {order.order_id}</p>
          <p>Business ID: {order.business_id}</p>
          <p>Department: {order.department}</p>
          <p>Amount: {order.amount}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  );
};

export default Modal;
