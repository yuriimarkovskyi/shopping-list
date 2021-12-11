import React, {useRef} from 'react';
import Button from './UI/Button';
import Input from './UI/Input';
import {useDispatch} from 'react-redux';
import {addItemAction} from '../store/itemsReducer';

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
    };

    dispatch(addItemAction(item));
  };

  return (
    <form className="shopping-list__form">
      <div className="shopping-list__form-inputs">
        <Input
          ref={inputNameRef}
          placeholder="Товар"
        />
        <Input
          type="number"
          onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
          ref={inputNumberRef}
          placeholder="Цена"
        />
        <Button onClick={addItem} className="button">
          Add item
        </Button>
      </div>
    </form>
  );
};

export default ShoppingListForm;