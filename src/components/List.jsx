import React from 'react';
import styled from 'styled-components';
import Modal from './UI/Modal';
import Body from './Body';
import Footer from './Footer';
import Form from './Form';

const StyledShoppingList = styled.div`
  overflow: hidden;
  width: 600px;
  padding: 20px 30px 50px;
  box-shadow: 0 0 10px 5px rgba(34, 60, 80, 0.3);
`;

function List() {
  return (
    <StyledShoppingList>
      <Body />
      <Footer />
      <Modal>
        <Form />
      </Modal>
    </StyledShoppingList>
  );
}

export default List;
