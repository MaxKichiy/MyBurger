import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ss from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  // const attachedClasses = [];
  return (
    <React.Fragment>
      <Backdrop show={props.open} hide={props.closed} />
      <div
        className={ss.SideDrawer + ' ' + (props.open ? ss.Open : ss.Close)}
        onClick={props.closed}
      >
        <Logo height={'14%'} marginBottom={'32px'} />
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
