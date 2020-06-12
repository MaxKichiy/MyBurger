import React from 'react';

import ss from './Input.module.css';

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={ss.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={ss.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option, id) => (
            <option key={id} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={ss.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={ss.Input}>
      <label className={ss.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
