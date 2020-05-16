import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3,
    purchasing: false,
  };

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
    // alert('You continue');
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
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
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

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} hide={this.stopPurchaseHandler}>
          <OrderSummary
            purchContinue={this.purchaseContinueHandler}
            purchCancel={this.stopPurchaseHandler}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
          />
        </Modal>

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
    );
  }
}

export default BurgerBuilder;
