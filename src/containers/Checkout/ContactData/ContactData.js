import React from 'react';
import { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import ss from '../ContactData/ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
      },
      value: '',
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      value: '',
    },
    zipCode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'ZIP Code',
      },
      value: '',
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Country',
      },
      value: '',
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your E-Mail',
      },
      value: '',
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'Cheapest' },
        ],
        placeholder: '',
      },
      value: '',
    },
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    postalCode: '',
  });

  const orderHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const order = {
      ingredients: props.ingredients,
      price: props.price,
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        setLoading(false);
        props.history.push('/');
      })
      .catch((error) => setLoading(false));
  };

  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  let form = (
    <form>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.elementConfig.value}
        />
      ))}

      <Button btnType='Success' clicked={orderHandler}>
        ORDER
      </Button>
    </form>
  );
  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className={ss.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};
export default withRouter(ContactData);
