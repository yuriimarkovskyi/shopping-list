import React from 'react';
import styled from 'styled-components';
import List from './components/List';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <List />
    </StyledApp>
  );
}

export default App;
