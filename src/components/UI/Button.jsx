import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 10px 15px;
  transition: .4s;
  border: 2px solid #515cc6;
  border-radius: 5px;
  outline: none;
  background: white;
  font-size: 18px;
  
  &:hover {
    color: white;
    border: 2px solid white;
    background: #515cc6;
  }
`;

function Button({ children, type, onClick }) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
};

export default Button;
