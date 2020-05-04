import React from 'react';
import ss from './Backdrop.module.css';

const Backdrop = (props) =>
  props.show ? <div className={ss.Backdrop} onClick={props.hide}></div> : null;

export default Backdrop;
