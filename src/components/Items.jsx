import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const StyledShoppingListItems = styled.div`
  margin-bottom: 20px;

  &.is-completed {
    margin-bottom: 0;
  }

  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .shopping-list-item {
    &-enter {
      transition: .2s;
      transform: translateX(-150%);

      &-active {
        transform: translateX(0);
      }
    }

    &-exit {
      transition: .2s;
      transform: translateX(0);

      &-active {
        transform: translateX(150%);
      }
    }
  }
`;

function ShoppingListItems({ isCompleted }) {
  const items = useSelector((state) => state.items.items);
  const filteredItems = items.filter((item) => (isCompleted ? item.completed : !item.completed));

  return (
    <StyledShoppingListItems className={isCompleted && 'is-completed'}>
      <p className="title">
        {isCompleted ? 'Виконані покупки' : 'Не виконані покупки'}
      </p>
      <TransitionGroup>
        {filteredItems.map((filteredItem) => (
          <CSSTransition
            key={filteredItem.id}
            classNames="shopping-list-item"
            timeout={{ enter: 500, exit: 0 }}
          >
            <Item
              key={filteredItem.id}
              item={filteredItem}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </StyledShoppingListItems>
  );
}

ShoppingListItems.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

export default ShoppingListItems;
