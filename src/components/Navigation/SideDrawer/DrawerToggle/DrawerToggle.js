import React from 'react';
import ss from './DrawerToggle.module.css';

const DrawerToggle = (props) => {
  return (
    <div className={ss.DrawerToggle} onClick={props.open}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
