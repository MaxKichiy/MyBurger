import React, { useState } from 'react';
import ss from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const Layout = (props) => {
  // let initialState = {
  //   showSideDrawer: false,
  // };

  const [myState, setMyState] = useState(false);

  let sideDrawerCLoseHandler = () => {
    setMyState(!myState);
  };

  return (
    <React.Fragment>
      <Toolbar isAuth={props.isAuth} open={sideDrawerCLoseHandler} />
      <SideDrawer
        isAuth={props.isAuth}
        open={myState}
        closed={sideDrawerCLoseHandler}
      />
      <main className={ss.content}>{props.children}</main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
