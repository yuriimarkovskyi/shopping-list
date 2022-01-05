import React from 'react';
import {useSelector} from 'react-redux';
import ShoppingListButtons from './ShoppingListButtons';

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
        <ShoppingListButtons/>
      </div>
    </div>
  );
};

export default ShoppingListFooter;