import React from 'react';
import styled from 'styled-components';
import ShoppingListItems from './Items';

const StyledShoppingListBody = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid black;
`;

function Body() {
  return (
    <StyledShoppingListBody>
      <ShoppingListItems isCompleted={false} />
      <ShoppingListItems isCompleted />
    </StyledShoppingListBody>
  );
}

export default Body;
