import React from 'react';
import ss from './Burger.module.css';
import BurgetIngridient from './BurgerIngridient/BurgerIngridient';

const Burger = (props) => {
  return (
    <div className={ss.Burger}>
      <BurgetIngridient type='bread-top' />
      <BurgetIngridient type='cheese' />
      <BurgetIngridient type='meat' />
      <BurgetIngridient type='bread-bottom' />
    </div>
  );
};

export default Burger;
