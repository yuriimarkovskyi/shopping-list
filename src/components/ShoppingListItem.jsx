import React from 'react';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {completeItemAction, removeItemAction} from '../store/itemsReducer';
import removeIcon from '../images/remove-icon.svg';

const ShoppingListItem = ({item}) => {
  const dispatch = useDispatch();

  const handleCompleteItem = () => {
    dispatch(completeItemAction(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemAction(item.id));
  };

  return (
    <div className={classNames('shopping-list-item', item.completed ? `is-completed` : '')}>
      <div className="shopping-list-item__left-side">

        <label className="shopping-list-item__name">
          <input
            className="shopping-list-item__checkbox"
            onClick={handleCompleteItem}
            type="checkbox"
            defaultChecked={item.completed}/>

          {item.name}
        </label>

      </div>
      <div className="shopping-list-item__right-side">

        <p className="shopping-list-item__price">
          {!item.price ? 0 : item.price} ₴
        </p>

        <button className="shopping-list-item__button">
          <img onClick={handleRemoveItem} src={removeIcon} alt=""/>
        </button>

      </div>
    </div>
  );
};

export default ShoppingListItem;