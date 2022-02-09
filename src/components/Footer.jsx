import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Buttons from './Buttons';

const StyledShoppingListFooter = styled.div`
  position: relative;
  padding-top: 15px;
  
  .top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
  }
  .bottom{
    display: flex;
    align-items: center;
    padding-top: 15px;
  }
  .price-title{
    font-weight: bold;
    font-style: italic;
  }
`;

function Footer() {
  const items = useSelector((state) => state.items.items);

  return (
    <StyledShoppingListFooter>
      <div className="top">
        <p className="price-title">Загальна сума покупок</p>
        <p>
          {items.reduce((accum, curr) => accum + Number(curr.price), 0)}
          {' '}
          ₴
        </p>
      </div>
      <div className="bottom">
        <Buttons />
      </div>
    </StyledShoppingListFooter>
  );
}

export default Footer;
