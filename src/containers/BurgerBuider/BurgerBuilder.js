import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends React.Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredietns();
  }

  // addIngredientHandler = (type) => {
  //   const oldCount = this.props.ings[type];
  //   const updatedCount = oldCount + 1;
  //   const updateIngredients = {
  //     ...this.props.ings,
  //     [type]: updatedCount,
  //   };
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updateIngredients,
  //   });
  // };

  // removeIngredientHandler = (type) => {
  //   const oldCount = this.props.ings[type];
  //   const updatedCount = oldCount - 1;
  //   const updateIngredients = {
  //     ...this.props.ings,
  //     [type]: updatedCount,
  //   };
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updateIngredients,
  //   });
  // };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };
  stopPurchaseHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.props.ings) {
    //   queryParams.push(
    //     encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i])
    //   );
    // }
    // queryParams.push('price=' + this.props.price);
    // const queryString = queryParams.join('&');
    this.props.onInitPurhase();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
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
    let spinner = this.props.error ? <p>Something is wrong</p> : <Spinner />;

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} hide={this.stopPurchaseHandler}>
          {!this.props.ings && this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              purchContinue={this.purchaseContinueHandler}
              purchCancel={this.stopPurchaseHandler}
              ingredients={this.props.ings}
              price={this.props.price}
            />
          )}
        </Modal>
        {this.props.ings ? (
          <React.Fragment>
            <Burger
              ingredients={this.props.ings}
              ingArray={this.state.totalIng}
            />
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              ingredientMinus={this.props.onIngredientRemoved}
              disabled={disabledInfo}
              price={this.props.price}
              allDisabled={didItTrue(disabledInfo)}
              ordered={this.purchaseHandler}
            />
          </React.Fragment>
        ) : this.props.error ? (
          <p>This is wrong</p>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
