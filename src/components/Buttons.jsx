import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearCompletedItemsAction, completeAllItemsAction } from '../store/itemsReducer';
import { changeVisibilityAction } from '../store/visibleReducer';
import Button from './UI/Button';

const StyledShoppingListButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  .left-side {
    display: flex;
    column-gap: 5px;
  }
`;

function Buttons() {
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
    <StyledShoppingListButtons>
      <div className="left-side">
        <Button onClick={handleCompleteAllItems}>
          Виконати усе
        </Button>
        <Button onClick={handleClearCompletedItemsAction}>
          Очистити виконане
        </Button>
      </div>
      <Button onClick={handleShowModal}>
        Додати
      </Button>
    </StyledShoppingListButtons>
  );
}

export default Buttons;
