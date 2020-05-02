import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import ss from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <div className={ss.BuildControls}>
      {controls.map((e) => (
        <BuildControl
          key={e.label}
          label={e.label}
          added={() => props.ingredientAdded(e.type)}
          minus={() => props.ingredientMinus(e.type)}
          disabled={props.disabled[e.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
