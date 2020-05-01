import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import ss from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = () => {
  return (
    <div className={ss.BuildControls}>
      {controls.map((e) => (
        <BuildControl key={e.label} label={e.label} />
      ))}
    </div>
  );
};

export default BuildControls;
