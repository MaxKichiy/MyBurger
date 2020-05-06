import React from 'react';
import ss from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
  <header className={ss.Toolbar}>
    <DrawerToggle open={props.open} />
    <Logo height={'80%'} />
    <nav className={ss.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
