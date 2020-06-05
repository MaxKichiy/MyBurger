import React from 'react';
import ss from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
  <li className={ss.NavigationItem}>
    <NavLink activeClassName={ss.active} to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
