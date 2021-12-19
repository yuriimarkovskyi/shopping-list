import React from 'react';
import './shopping-list.scss';
import Modal from '../UI/Modal/Modal';
import ShoppingListBody from '../ShoppingListBody/ShoppingListBody';
import ShoppingListFooter from '../ShoppingListFooter/ShoppingListFooter';
import ShoppingListForm from '../ShoppingListForm/ShoppingListForm';

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