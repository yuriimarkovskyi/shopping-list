import React from 'react';
import './shopping-list-body.scss';
import ShoppingListItems from '../ShoppingListItems/ShoppingListItems';

const ShoppingListBody = () => {
  return (
    <div className="shopping-list-body">
      <ShoppingListItems isCompleted={false}/>
      <ShoppingListItems isCompleted={true}/>
    </div>
  );
};

export default ShoppingListBody;