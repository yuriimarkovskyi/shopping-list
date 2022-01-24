import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addItemAction } from '../store/itemsReducer';
import { changeVisibilityAction } from '../store/visibleReducer';
import Button from './UI/Button';
import Input from './UI/Input';

const StyledShoppingListForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

function ShoppingListForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    const item = {
      id: Date.now(),
      name,
      price,
      completed: false,
    };

    dispatch(addItemAction(item));
    dispatch(changeVisibilityAction());
  };

  return (
    <StyledShoppingListForm>
      <Input
        value={name}
        onChange={handleChangeName}
        placeholder="Товар"
      />
      <Input
        type="number"
        value={price}
        onChange={handleChangePrice}
        onKeyDown={(e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
        placeholder="Ціна"
      />
      <Button onClick={handleAddItem}>
        Додати
      </Button>
    </StyledShoppingListForm>
  );
}

export default ShoppingListForm;
