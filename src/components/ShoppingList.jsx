import React from 'react';
import styled from 'styled-components';
import Modal from './UI/Modal';
import ShoppingListBody from './ShoppingListBody';
import ShoppingListFooter from './ShoppingListFooter';
import ShoppingListForm from './ShoppingListForm';

const StyledShoppingList = styled.div`
  overflow: hidden;
  width: 600px;
  padding: 20px 30px 50px;
  box-shadow: 0 0 10px 5px rgba(34, 60, 80, 0.3);
`;

function ShoppingList() {
  return (
    <StyledShoppingList>
      <ShoppingListBody />
      <ShoppingListFooter />
      <Modal>
        <ShoppingListForm />
      </Modal>
    </StyledShoppingList>
  );
}

export default ShoppingList;
