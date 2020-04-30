import React from 'react';
import ss from './BurgerIngridient.module.css';
import PropTypes from 'prop-types';

const BurgetIngridient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={ss.BreadBottom}></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={ss.BreadTop}>
          <div className={ss.Seeds1}></div>
          <div className={ss.Seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={ss.Meat}></div>;
      break;
    case 'cheese':
      ingredient = <div className={ss.Cheese}></div>;
      break;
    case 'salad':
      ingredient = <div className={ss.Salad}></div>;
      break;
    case 'bacon':
      ingredient = <div className={ss.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

BurgetIngridient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgetIngridient;
