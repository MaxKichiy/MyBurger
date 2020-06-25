import React, { useState } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
const Checkout = (props) => {
  // const [ingredients, setIngredients] = useState({
  //   salad: 0,
  //   cheese: 0,
  //   meat: 0,
  //   bacon: 0,
  // });
  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const query = new URLSearchParams(props.location.search);
  //   const getingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //       getingredients[param[0]] = +param[1];
  //     }
  //   }
  //   setIngredients(getingredients);
  //   setTotalPrice(price);
  // }, []);

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={props.ings}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={props.match.path + '/contact-data'}
        component={ContactData}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(Checkout);
