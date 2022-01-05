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

  const handleAddItem = (e) => {
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
    <form className="shopping-list-form">

      <Input
        className="shopping-list-form__input"
        type="text"
        ref={inputNameRef}
        placeholder="Наименование товара"/>

      <Input
        className="shopping-list-form__input"
        type="number"
        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
        ref={inputNumberRef}
        placeholder="Цена"/>

      <Button
        className="button_secondary"
        onClick={handleAddItem}>

        Добавить
      </Button>

    </form>
  );
};

export default ShoppingListForm;