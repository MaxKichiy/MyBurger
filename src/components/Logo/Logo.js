import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import ss from './Logo.module.css';

const Logo = (props) => (
  <div
    className={ss.Logo}
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={burgerLogo} alt='Your Burger' />
  </div>
);

export default Logo;
