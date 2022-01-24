import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { completeItemAction, removeItemAction } from '../store/itemsReducer';
import Input from './UI/Input';

const StyledShoppingListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &.is-completed {
    text-decoration: line-through;
  }

  .left-side {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }
  
  .right-side {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

function ShoppingListItem({ item }) {
  const dispatch = useDispatch();

  const handleCompleteItem = () => {
    dispatch(completeItemAction(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemAction(item.id));
  };

  return (
    <StyledShoppingListItem className={item.completed && 'is-completed'}>
      <div className="left-side">
        <Input
          type="checkbox"
          defaultChecked={item.completed}
          onClick={handleCompleteItem}
        />
        <p>{item.name}</p>
      </div>
      <div className="right-side">
        <p>{`${item.price} UAH`}</p>
        <input
          type="image"
          src={`${window.location.origin}/images/icons/icon-close.png`}
          alt=""
          onClick={handleRemoveItem}
        />
      </div>
    </StyledShoppingListItem>
  );
}

ShoppingListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ShoppingListItem;
