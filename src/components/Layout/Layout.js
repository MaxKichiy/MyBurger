import React from 'react';
import ss from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

export const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />

      <main className={ss.content}>{props.children}</main>
    </React.Fragment>
  );
};
