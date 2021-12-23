import React from 'react';
import './shopping-list-buttons-block.scss';
import {clearCompletedItemsAction, completeAllItemsAction} from '../../store/itemsReducer';
import {useDispatch} from 'react-redux';
import Button from '../UI/Button/Button';
import {changeVisibilityAction} from '../../store/visibleReducer';

const ShoppingListButtonsBlock = () => {
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
    <div className="shopping-list-buttons-block">
      <div className="shopping-list-buttons-block__left-side">
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

export default ShoppingListButtonsBlock;