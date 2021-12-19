import React, {useRef} from 'react';
import './shopping-list-form.scss';
import {useDispatch} from 'react-redux';
import {addItemAction} from '../../store/itemsReducer';
import {changeVisibilityAction} from '../../store/visibleReducer';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

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
    <form className="shopping-list-form">

      <Input
        className="shopping-list-form__input input"
        ref={inputNameRef}
        placeholder="Наименование товара"
      />

      <Input
        className="shopping-list-form__input input"
        type="number"
        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
        ref={inputNumberRef}
        placeholder="Цена"
      />

      <Button
        onClick={addItem}
        className="button_secondary">

        Добавить
      </Button>

    </form>
  );
};

export default ShoppingListForm;