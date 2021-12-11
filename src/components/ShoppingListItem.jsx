import React from 'react';
import trashIcon from '../images/trash.svg';
import {useDispatch} from 'react-redux';
import {completeItemAction, removeItemAction} from '../store/itemsReducer';

const ShoppingListItem = ({item}) => {
  const dispatch = useDispatch();

  const completeItem = () => {
    dispatch(completeItemAction(item));
  };

  const removeItem = () => {
    dispatch(removeItemAction(item.id));
  };

  return (
    <div onClick={completeItem} className={item.completed ? `shopping-list__item is-completed` : 'shopping-list__item'}>
      <p className="shopping-list__item-name">
        {item.name}
      </p>
      <div className="shopping-list__item-info">
        <p className="shopping-list__item-price">
          {!item.price ? 0 : item.price} ₴
        </p>
        <img onClick={removeItem} src={trashIcon} alt=""/>
      </div>
    </div>
  );
};

export default ShoppingListItem;