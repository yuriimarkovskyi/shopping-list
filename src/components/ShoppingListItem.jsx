import React, {useState} from 'react';
import trashIcon from '../images/trash.svg';

const ShoppingListItem = ({item, removeItem}) => {
  const [stateItem, setStateItem] = useState(false);

  const isCompleted = () => setStateItem(prevState => !prevState);

  return (
    <div className={stateItem ? `shopping-list__item is-completed` : 'shopping-list__item'}>
      <p className="shopping-list__item-name">
        {item.name}
      </p>
      <div className="shopping-list__item-info">
        <p className="shopping-list__item-price">
          {!item.price ? 0 : item.price} ₴
        </p>
        <input onClick={isCompleted} type="checkbox"/>
        <img onClick={() => removeItem(item)} src={trashIcon} alt=""/>
      </div>
    </div>
  );
};

export default ShoppingListItem;