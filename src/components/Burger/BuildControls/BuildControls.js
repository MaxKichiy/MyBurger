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
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((e) => (
        <BuildControl
          key={e.label}
          label={e.label}
          added={() => props.ingredientAdded(e.type)}
          minus={() => props.ingredientMinus(e.type)}
          disabled={props.disabled[e.type]}
        />
      ))}
      <button
        disabled={props.allDisabled}
        className={ss.OrderButton}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
