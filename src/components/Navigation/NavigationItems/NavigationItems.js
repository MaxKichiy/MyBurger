import React from 'react';
import ss from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className={ss.NavigationItems}>
    <NavigationItem link='/' active exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
    {/* <NavigationItem link='/'>Checkout</NavigationItem> */}
  </ul>
);

export default NavigationItems;
