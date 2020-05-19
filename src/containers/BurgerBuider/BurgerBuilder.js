import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 3,
    purchasing: false,
    loading: true,
    error: false,
  };

  componentDidMount() {
    axios
      .get('https://your-burger-react.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount,
    };
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngredients,
    });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount,
    };
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngredients,
    });
  };

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
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Max',
        address: {
          street: 'Test 1',
          zipCode: '33024',
          country: 'Ukraine',
        },
        email: 'ggg@gmail.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => this.setState({ loading: false, purchasing: false }))
      .catch((error) => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let n in disabledInfo) {
      disabledInfo[n] = disabledInfo[n] <= 0;
    }
    if (this.state.loading) {
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
    let spinner = this.state.error ? <p>Something is wrong</p> : <Spinner />;

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} hide={this.stopPurchaseHandler}>
          {!this.state.ingredients && this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              purchContinue={this.purchaseContinueHandler}
              purchCancel={this.stopPurchaseHandler}
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        </Modal>
        {this.state.ingredients ? (
          <React.Fragment>
            <Burger
              ingredients={this.state.ingredients}
              ingArray={this.state.totalIng}
            />
            <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientMinus={this.removeIngredientHandler}
              disabled={disabledInfo}
              price={this.state.totalPrice}
              allDisabled={didItTrue(disabledInfo)}
              ordered={this.purchaseHandler}
            />
          </React.Fragment>
        ) : this.state.error ? (
          <p>This is wrong</p>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
