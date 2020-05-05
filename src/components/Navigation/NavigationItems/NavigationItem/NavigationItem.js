import React from 'react';
import ss from './NavigationItem.module.css';

const NavigationItem = (props) => (
  <li className={ss.NavigationItem}>
    <a href={props.link} className={props.active ? ss.active : null}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
