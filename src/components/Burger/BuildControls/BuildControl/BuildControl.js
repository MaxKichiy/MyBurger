import React from 'react';
import ss from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={ss.BuildControl}>
      <div className={ss.Label}>{props.label}</div>
      <button className={ss.Less}>Less</button>
      <button className={ss.More}>More</button>
    </div>
  );
};

export default BuildControl;
