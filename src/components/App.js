import React, { useState, useEffect } from 'react';
import OrderTable from './OrderTable';
import Modal from './Modal';
import { fetchOrders } from '../utils/api';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      const orders = await fetchOrders();
      setOrders(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>Order Management App</h1>
      <OrderTable orders={orders} openModal={openModal} />
      <Modal order={selectedOrder} isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;
