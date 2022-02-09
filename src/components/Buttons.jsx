import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearCompletedItemsAction, completeAllItemsAction } from '../store/itemsReducer';
import { changeVisibility } from '../store/visibilitySlice';
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

  const openModal = () => {
    dispatch(changeVisibility());
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
      <Button onClick={openModal}>
        Додати
      </Button>
    </StyledShoppingListButtons>
  );
}

export default Buttons;
