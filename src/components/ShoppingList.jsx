import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeVisibilityAction} from '../store/visibleReducer';
import addIcon from '../images/add-icon.svg';
import Button from './UI/Button';
import Modal from './UI/Modal';
import ShoppingListItem from './ShoppingListItem';
import ShoppingListForm from './ShoppingListForm';

const ShoppingList = () => {
  const items = useSelector(state => state.items.items);
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(changeVisibilityAction());
  };

  return (
    <div className="shopping-list">
      <div className="shopping-list__body">
        <p className="shopping-list__title">
          Не выполненные покупки
        </p>

        {items.filter(item => !item.completed).length ?
          items.filter(item => !item.completed).map(filteredItem => (
            <ShoppingListItem
              key={filteredItem.id}
              item={filteredItem}
            />
          )) : 'Список не выполненных покупок пуст'}
        <p className="shopping-list__title">
          Выполненные покупки
        </p>

        {items.filter(item => item.completed).length ?
          items.filter(item => item.completed).map(filteredItem => (
            <ShoppingListItem
              key={filteredItem.id}
              item={filteredItem}
            />
          )) : 'Список выполненных покупок пуст'}

      </div>
      <div className="shopping-list__footer">
        <div className="shopping-list__total-price-wrapper">
          <p className="shopping-list__total-price-title">
            Сумма всех покупок
          </p>
          <p className="shopping-list__total-price-value">
            {items.reduce((accum, curr) => accum + Number(curr.price), 0)} ₴
          </p>
        </div>
      </div>

      <Button onClick={showModal} classes={'shopping-list__button button button_primary'}>
        <img src={addIcon} alt=""/>
      </Button>

      <Modal>
        <ShoppingListForm/>
      </Modal>

    </div>
  );
};

export default ShoppingList;