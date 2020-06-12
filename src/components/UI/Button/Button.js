import React from 'react';
import ss from './Button.module.css';

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={ss.Button + ' ' + ss[props.btnType]}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
