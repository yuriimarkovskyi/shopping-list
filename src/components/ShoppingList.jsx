import React from 'react';
import Modal from './UI/Modal';
import ShoppingListBody from './ShoppingListBody';
import ShoppingListFooter from './ShoppingListFooter';
import ShoppingListForm from './ShoppingListForm';

const ShoppingList = () => {
  return (
    <div className="shopping-list">
      <ShoppingListBody/>
      <ShoppingListFooter/>

      <Modal>
        <ShoppingListForm/>
      </Modal>

    </div>
  );
};

export default ShoppingList;