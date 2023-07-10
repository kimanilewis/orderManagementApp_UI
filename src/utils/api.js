import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching orders');
  }
};
