import React from 'react';
import styled from 'styled-components';
import ShoppingList from './components/ShoppingList';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <ShoppingList />
    </StyledApp>
  );
}

export default App;
