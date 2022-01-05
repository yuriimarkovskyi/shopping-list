import React from 'react';
import {useDispatch} from 'react-redux';
import {clearCompletedItemsAction, completeAllItemsAction} from '../store/itemsReducer';
import {changeVisibilityAction} from '../store/visibleReducer';
import Button from './UI/Button';

const ShoppingListButtons = () => {
  const dispatch = useDispatch();

  const handleCompleteAllItems = () => {
    dispatch(completeAllItemsAction());
  };

  const handleClearCompletedItemsAction = () => {
    dispatch(clearCompletedItemsAction());
  };

  const handleShowModal = () => {
    dispatch(changeVisibilityAction());
  };

  return (
    <div className="shopping-list-buttons">
      <div className="shopping-list-buttons__left-side">
        <Button onClick={handleCompleteAllItems}>
          Complete all
        </Button>
        <Button onClick={handleClearCompletedItemsAction}>
          Clear completed
        </Button>
      </div>
      <Button onClick={handleShowModal}>
        Add item
      </Button>
    </div>
  );
};

export default ShoppingListButtons;