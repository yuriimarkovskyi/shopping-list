import React from 'react';
import ShoppingListItem from './ShoppingListItem';
import ShoppingListForm from './ShoppingListForm';

const ShoppingList = ({items, remove, create}) => {
  return (
    <div className="shopping-list">

      <div className="shopping-list__head">
        <h2 className="shopping-list__head-title">
          {!items.length
            ? 'Список покупок пуст'
            : 'Список покупок'}
        </h2>
        <div className="shopping-list__head-subtitles">
          <p className="shopping-list__head-subtitle">
            Name
          </p>
          <p className="shopping-list__head-subtitle">
            Price
          </p>
        </div>
      </div>

      <div className="shopping-list__body">
        {items.map(item => (
          <ShoppingListItem
            key={item.id}
            remove={remove}
            item={item}
          />),
        )}
      </div>

      <div className="shopping-list__footer">
        <div className="shopping-list__total-price-wrapper">
          <p className="shopping-list__total-price-title">
            Total price
          </p>
          <p className="shopping-list__total-price-value">
            {items.reduce((accum, curr) => accum + Number(curr.price), 0)} ₴
          </p>
        </div>
      </div>

      <ShoppingListForm create={create}/>

    </div>
  );
};

export default ShoppingList;