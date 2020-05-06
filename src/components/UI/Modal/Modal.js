import React from 'react';
import ss from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = React.memo((props) => {
  console.log('Privet ot modal');
  return (
    <React.Fragment>
      <Backdrop show={props.show} hide={props.hide} />
      <div
        className={ss.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
});

export default Modal;
