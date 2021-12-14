import React from 'react';
import {useDispatch} from 'react-redux';
import {completeItemAction, removeItemAction} from '../store/itemsReducer';
import removeIcon from '../images/remove-icon.svg';
import Button from './UI/Button';

const ShoppingListItem = ({item}) => {
  const dispatch = useDispatch();

  const completeItem = () => {
    dispatch(completeItemAction(item));
  };

  const removeItem = () => {
    dispatch(removeItemAction(item.id));
  };

  return (
    <div className={item.completed ? `shopping-list__item is-completed` : 'shopping-list__item'}>
      <div className="shopping-list__item-left-part">
        <p className="shopping-list__item-name">
          {item.name}
        </p>
      </div>
      <div className="shopping-list__item-right-part">
        <p className="shopping-list__item-price">
          {!item.price ? 0 : item.price} ₴
        </p>
        <input onClick={completeItem} type="checkbox" defaultChecked={item.completed && true}/>

        <Button classes={"shopping-list__item-button"}>
          <img onClick={removeItem} src={removeIcon} alt=""/>
        </Button>

      </div>
    </div>
  );
};

export default ShoppingListItem;