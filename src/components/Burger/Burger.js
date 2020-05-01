import React from 'react';
import ss from './Burger.module.css';
import BurgetIngridient from './BurgerIngridient/BurgerIngridient';

const Burger = (props) => {
  let objKeys = Object.keys(props.ingredients); // возвращаем список ключей с обьекта

  let ingArray = [];
  objKeys.map((e, index) => {
    for (let i = 0; i < props.ingredients[e]; i++) {
      //проходим по каждому с ключей, добавляем в список по значению  ключа. Например "salad": 2 - добавляем 2 салата.
      ingArray.push(<BurgetIngridient type={e} key={e + i + index} />);
    }
  });
  console.log(ingArray);

  return (
    <div className={ss.Burger}>
      <BurgetIngridient type='bread-top' />
      {ingArray.length !== 0 ? ingArray : <p>Put some ingridients</p>}
      <BurgetIngridient type='bread-bottom' />
    </div>
  );
};

export default Burger;
