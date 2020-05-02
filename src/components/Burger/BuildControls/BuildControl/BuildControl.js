import React from 'react';
import ss from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={ss.BuildControl}>
      <div className={ss.Label}>{props.label}</div>
      <button
        onClick={props.minus}
        className={ss.Less}
        disabled={props.disabled}
      >
        Less
      </button>
      <button onClick={props.added} className={ss.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
