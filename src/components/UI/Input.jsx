import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  &[type="text"],
  &[type="number"] {
    padding-left: 10px;
    height: 50px;
    font-size: 18px;
  }
  
  &[type="checkbox"] {
    cursor: pointer;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    width: 25px;
    height: 25px;
  }
`;

function Input({
  type, value, onClick, onChange, onKeyDown, placeholder, defaultChecked,
}) {
  return (
    <StyledInput
      type={type}
      value={value}
      onClick={onClick}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      defaultChecked={defaultChecked}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  onClick: null,
  onChange: null,
  onKeyDown: null,
  placeholder: null,
  defaultChecked: false,
};

export default Input;
