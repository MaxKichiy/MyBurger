import React, { useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = (props) => {
  useEffect(() => {
    props.onFetchOrders(props.token, props.userId);
    // axios
    //   .get('/orders.json')
    //   .then((res) => {
    //     const fetchOrders = [];
    //     for (let key in res.data) {
    //       fetchOrders.push({ ...res.data[key], id: key });
    //     }
    //     setOrders(fetchOrders);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //   });
  }, []);
  let ord = <Spinner />;
  if (!props.loading) {
    ord = props.orders.map((order) => (
      <Order
        ingredients={order.ingredients}
        price={+order.price}
        key={order.id}
      />
    ));
  }

  return <div>{ord}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
