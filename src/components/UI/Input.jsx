import React, { forwardRef } from 'react';
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

const Input = forwardRef(({
  type,
  onKeyDown,
  placeholder,
  defaultChecked,
  ...props
}, ref) => (
  <StyledInput
    type={type}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    defaultChecked={defaultChecked}
    ref={ref}
    {...props}
  />
));

Input.propTypes = {
  type: PropTypes.string,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  onKeyDown: null,
  placeholder: null,
  defaultChecked: false,
};

export default Input;
