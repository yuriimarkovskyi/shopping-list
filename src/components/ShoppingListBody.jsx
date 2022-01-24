import React from 'react';
import styled from 'styled-components';
import ShoppingListItems from './ShoppingListItems';

const StyledShoppingListBody = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid black;
`;

function ShoppingListBody() {
  return (
    <StyledShoppingListBody>
      <ShoppingListItems isCompleted={false} />
      <ShoppingListItems isCompleted />
    </StyledShoppingListBody>
  );
}

export default ShoppingListBody;
