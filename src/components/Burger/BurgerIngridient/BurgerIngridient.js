import React from 'react';
import css from './BurgetIngridient.module.css';

const BurgetIngridient = (props) => {
  let ingridient = null;
  switch (props.type) {
    case 'bread-bottom':
      ingridient = <div className={css.BreadBottom}></div>;
      break;
    case 'bread-top':
      ingridient = (
        <div className={css.BreadTop}>
          <div className={css.Seeds1}></div>
          <div className={css.Seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingridient = <div className={css.Meat}></div>;
      break;
    case 'cheese':
      ingridient = <div className={css.Cheese}></div>;
      break;
    case 'salad':
      ingridient = <div className={css.Salad}></div>;
      break;
    case 'bacon':
      ingridient = <div className={css.Bacon}></div>;
      break;
    default:
      ingridient = null;
  }

  return ingridient;
};

export default BurgetIngridient;
