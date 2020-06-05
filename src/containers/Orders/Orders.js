import React, { useEffect } from 'react';
import Order from '../../components/Order/Order';
import { useState } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';

const Orders = () => {
  const [retOrders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/orders.json')
      .then((res) => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({ ...res.data[key], id: key });
        }
        setOrders(fetchOrders);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  });
  return (
    <div>
      {retOrders.map((order) => (
        <Order
          ingredients={order.ingredients}
          price={+order.price}
          key={order.id}
        />
      ))}
    </div>
  );
};

export default withErrorHandler(Orders, axios);
