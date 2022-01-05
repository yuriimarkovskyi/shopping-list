import React from 'react';
import ShoppingListItems from './ShoppingListItems';

const ShoppingListBody = () => {
  return (
    <div className="shopping-list-body">
      <ShoppingListItems isCompleted={false}/>
      <ShoppingListItems isCompleted={true}/>
    </div>
  );
};

export default ShoppingListBody;