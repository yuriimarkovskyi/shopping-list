import React from 'react';
import './shopping-list-item.scss';
import removeIcon from '../../images/remove-icon.svg';
import {useDispatch} from 'react-redux';
import {completeItemAction, removeItemAction} from '../../store/itemsReducer';
import Button from '../UI/Button/Button';

const ShoppingListItem = ({item}) => {
  const dispatch = useDispatch();

  const completeItem = () => {
    dispatch(completeItemAction(item));
  };

  const removeItem = () => {
    dispatch(removeItemAction(item.id));
  };

  return (
    <div className={`shopping-list-item ${item.completed ? `is-completed` : ''}`}>
      <div className="shopping-list-item__left-side">

        <p className="shopping-list-item__name">
          {item.name}
        </p>

      </div>
      <div className="shopping-list-item__right-side">

        <p className="shopping-list-item__price">
          {!item.price ? 0 : item.price} ₴
        </p>

        <input
          className="shopping-list-item__checkbox"
          onClick={completeItem}
          type="checkbox"
          defaultChecked={item.completed && true}
        />

        <button className="shopping-list-item__button">
          <img onClick={removeItem} src={removeIcon} alt=""/>
        </button>

      </div>
    </div>
  );
};

export default ShoppingListItem;