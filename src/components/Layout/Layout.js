import React from 'react';
import css from './Layout.module.css';

export const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={css.content}>{props.children}</main>
    </React.Fragment>
  );
};
