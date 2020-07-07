import React from 'react';
import ss from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className={ss.NavigationItems}>
    <NavigationItem link='/' active exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
    {!props.isAuth ? (
      <NavigationItem link='/auth'>Authenticate</NavigationItem>
    ) : (
      <NavigationItem link='/logout'>Logout</NavigationItem>
    )}
    {/* <NavigationItem link='/'>Checkout</NavigationItem> */}
  </ul>
);

export default NavigationItems;
