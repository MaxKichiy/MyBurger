import React, { useState } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { useEffect } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Checkout = (props) => {
  // const [ingredients, setIngredients] = useState({
  //   salad: 0,
  //   cheese: 0,
  //   meat: 0,
  //   bacon: 0,
  // });
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    props.onInitPurchase();
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
  }, []);

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  let summary = <Redirect to='/' />;
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null;
    summary = (
      <div>
        {purchasedRedirect}
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
  }

  return summary;
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    purchased: state.order.purchased,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
