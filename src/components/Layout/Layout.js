import React from 'react';
import ss from './Layout.module.css';

export const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={ss.content}>{props.children}</main>
    </React.Fragment>
  );
};
