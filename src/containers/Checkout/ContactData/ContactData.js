import React from 'react';
import { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import ss from '../ContactData/ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

const ContactData = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState();
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
      .then((response) => {
        setLoading(false);
        props.history.push('/');
      })
      .catch((error) => setLoading(false));
  };
  let form = (
    <form>
      <input
        className={ss.Input}
        type='text'
        name='name'
        placeholder='Your Name'
      />
      <input
        className={ss.Input}
        type='email'
        name='email'
        placeholder='Your Mail'
      />
      <input
        className={ss.Input}
        type='text'
        name='street'
        placeholder=' Street'
      />
      <input
        className={ss.Input}
        type='text'
        name='street'
        placeholder=' Postal Code'
      />
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
