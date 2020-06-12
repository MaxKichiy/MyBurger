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
      validation: {
        required: true,
      },
      valid: false,
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
    },
    zipCode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'ZIP Code',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Country',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your E-Mail',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
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
      validation: {
        required: true,
      },
      valid: false,
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
    const formData = {};
    for (let formElementId in orderForm) {
      formData[formElementId] = orderForm[formElementId].value;
    }
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      orderData: formData,
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

  const checkValidity = (value, rules) => {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== '';
    }

    return isValid;
  };
  const inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = {
      ...orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputId],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedOrderForm[inputId] = updatedFormElement;
    console.log(updatedFormElement);

    setOrderForm(updatedOrderForm);
  };

  let form = (
    <form onSubmit={orderHandler}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.elementConfig.value}
          changed={(event) => inputChangedHandler(event, formElement.id)}
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
