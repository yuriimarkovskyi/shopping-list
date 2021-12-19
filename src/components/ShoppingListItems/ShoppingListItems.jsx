import React from 'react';
import './shopping-list-items.scss';
import {useSelector} from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import classNames from 'classnames';

const ShoppingListItems = ({isCompleted}) => {
  const items = useSelector(state => state.items.items);
  const filteredItems = items.filter(item => isCompleted ? item.completed : !item.completed);

  return (
    <div className={classNames('shopping-list-items', isCompleted ? 'is-completed' : '')}>
      <p className="shopping-list-items__title">
        {isCompleted ? 'Выполненные покупки' : 'Не выполненные покупки'}
      </p>
      <TransitionGroup>
        {filteredItems.map(filteredItem => (
          <CSSTransition
            key={filteredItem.id}
            timeout={200}
            classNames="shopping-list-item">
            <ShoppingListItem
              key={filteredItem.id}
              item={filteredItem}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ShoppingListItems;