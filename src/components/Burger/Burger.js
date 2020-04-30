import React from 'react';
import ss from './Burger.module.css';
import BurgetIngridient from './BurgerIngridient/BurgerIngridient';

const Burger = (props) => {
  let objKeys = Object.keys(props.ingredients); // возвращаем список ключей с обьекта

  let ingArray = [];
  objKeys.map((e, index) => {
    for (let i = 0; i < props.ingredients[e]; i++) {
      //проходим по каждому с ключей берем
      ingArray.push(<BurgetIngridient type={e} key={e + i + index} />);
    }
  });

  return (
    <div className={ss.Burger}>
      <BurgetIngridient type='bread-top' />
      {ingArray}
      <BurgetIngridient type='bread-bottom' />
    </div>
  );
};

export default Burger;
