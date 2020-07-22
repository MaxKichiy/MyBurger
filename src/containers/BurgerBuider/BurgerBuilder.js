import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-orders';
import { useEffect } from 'react';

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    props.onInitIngredietns();
  }, []);

  const purchaseHandler = () => {
    if (props.isAuth) {
      setPurchasing(true);
    } else {
      props.onSetRedirect('/checkout');
      props.history.push('/auth');
    }
  };
  const stopPurchaseHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in props.ings) {
    //   queryParams.push(
    //     encodeURIComponent(i) + '=' + encodeURIComponent(props.ings[i])
    //   );
    // }
    // queryParams.push('price=' + props.price);
    // const queryString = queryParams.join('&');
    props.onInitPurhase();
    props.history.push('/checkout');
  };

  const disabledInfo = {
    ...props.ings,
  };
  for (let n in disabledInfo) {
    disabledInfo[n] = disabledInfo[n] <= 0;
  }

  function didItTrue(obj) {
    for (let n in Object.keys(obj)) {
      if (obj[Object.keys(obj)[n]] !== true) {
        // если добавили какой-то ингредиент кнопка покупки станет доступна
        return false;
      }
    }
    return true;
  }
  // let spinner = props.error ? <p>Something is wrong</p> : <Spinner />;

  return (
    <React.Fragment>
      <Modal show={purchasing} hide={stopPurchaseHandler}>
        {!props.ings && props.loading ? (
          <Spinner />
        ) : (
          <OrderSummary
            purchContinue={purchaseContinueHandler}
            purchCancel={stopPurchaseHandler}
            ingredients={props.ings}
            price={props.price}
          />
        )}
      </Modal>
      {props.ings ? (
        <React.Fragment>
          <Burger ingredients={props.ings} ingArray={props.totalIng} />
          <BuildControls
            ingredientAdded={props.onIngredientAdded}
            ingredientMinus={props.onIngredientRemoved}
            disabled={disabledInfo}
            price={props.price}
            allDisabled={didItTrue(disabledInfo)}
            ordered={purchaseHandler}
            isAuth={props.isAuth}
          />
        </React.Fragment>
      ) : props.error ? (
        <p>This is wrong</p>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredietns: () => dispatch(burgerBuilderActions.initIngredients()),
    onInitPurhase: () => dispatch(burgerBuilderActions.purchaseInit()),
    onSetRedirect: (path) =>
      dispatch(burgerBuilderActions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
