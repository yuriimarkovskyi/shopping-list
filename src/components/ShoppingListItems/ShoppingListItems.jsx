import React from 'react';
import './shopping-list-items.scss';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

const ShoppingListItems = ({isCompleted}) => {
  const items = useSelector(state => state.items.items);
  const filteredItems = items.filter(item => isCompleted ? item.completed : !item.completed);

  return (
    <div className={classNames('shopping-list-items', isCompleted ? 'is-completed' : '')}>

      <p className="shopping-list-items__title">
        {isCompleted ? 'Completed purchases' : 'Uncompleted purchases'}
      </p>

      <TransitionGroup>
        {filteredItems.map(filteredItem => (
          <CSSTransition
            key={filteredItem.id}
            timeout={{enter: 500, exit: 0}}
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