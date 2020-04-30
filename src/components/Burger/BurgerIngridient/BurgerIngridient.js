import React from 'react';
import ss from './BurgerIngridient.module.css';
import PropTypes from 'prop-types';

const BurgetIngridient = (props) => {
  let ingridient = null;
  switch (props.type) {
    case 'bread-bottom':
      ingridient = <div className={ss.BreadBottom}></div>;
      break;
    case 'bread-top':
      ingridient = (
        <div className={ss.BreadTop}>
          <div className={ss.Seeds1}></div>
          <div className={ss.Seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingridient = <div className={ss.Meat}></div>;
      break;
    case 'cheese':
      ingridient = <div className={ss.Cheese}></div>;
      break;
    case 'salad':
      ingridient = <div className={ss.Salad}></div>;
      break;
    case 'bacon':
      ingridient = <div className={ss.Bacon}></div>;
      break;
    default:
      ingridient = null;
  }

  return ingridient;
};

BurgetIngridient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgetIngridient;
