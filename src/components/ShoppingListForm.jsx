import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addItemAction} from '../store/itemsReducer';
import {changeVisibilityAction} from '../store/visibleReducer';
import Button from './UI/Button';
import Input from './UI/Input';

const ShoppingListForm = () => {
  const inputNameRef = useRef();
  const inputNumberRef = useRef();
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    const item = {
      id: Date.now(),
      name: inputNameRef.current.value,
      price: inputNumberRef.current.value,
      completed: false,
    };

    inputNameRef.current.value = '';
    inputNumberRef.current.value = '';

    dispatch(addItemAction(item));
    dispatch(changeVisibilityAction());
  };

  return (
    <form className="shopping-list__form">

      <Input
        className="shopping-list__form-input"
        ref={inputNameRef}
        placeholder="Товар"
      />

      <Input
        className="shopping-list__form-input"
        type="number"
        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
        ref={inputNumberRef}
        placeholder="Цена"
      />

      <Button onClick={addItem} classes={'shopping-list__form-button button button_secondary'}>
        Add item
      </Button>

    </form>
  );
};

export default ShoppingListForm;