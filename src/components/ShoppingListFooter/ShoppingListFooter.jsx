import React from 'react';
import './shopping-list-footer.scss';
import {useSelector} from 'react-redux';
import ShoppingListButtonsBlock from '../ShoppingListButtonsBlock/ShoppingListButtonsBlock';

const ShoppingListFooter = () => {
  const items = useSelector(state => state.items.items);

  return (
    <div className="shopping-list-footer">
      <div className="shopping-list-footer__top">
        <p className="shopping-list-footer__price-title">
          Total amount of purchases
        </p>
        <p className="shopping-list-footer__price-value">
          {items.reduce((accum, curr) => accum + Number(curr.price), 0)} ₴
        </p>
      </div>
      <div className="shopping-list-footer__bottom">
        <ShoppingListButtonsBlock/>
      </div>
    </div>
  );
};

export default ShoppingListFooter;