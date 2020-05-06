import React, { useState } from 'react';
import ss from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export const Layout = (props) => {
  let initialState = {
    showSideDrawer: false,
  };

  const [myState, setMyState] = useState(initialState);

  let sideDrawerCLoseHandler = () => {
    setMyState({
      showSideDrawer: !myState.showSideDrawer,
    });
  };

  return (
    <React.Fragment>
      <Toolbar open={sideDrawerCLoseHandler} />
      <SideDrawer
        open={myState.showSideDrawer}
        closed={sideDrawerCLoseHandler}
      />
      <main className={ss.content}>{props.children}</main>
    </React.Fragment>
  );
};
