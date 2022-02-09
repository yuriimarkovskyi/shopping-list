import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { changeVisibility } from '../../store/visibilitySlice';
import Button from './Button';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 0, 0.5);
  
  &.is-active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    position: relative;
    min-width: 350px;
    padding: 35px;
    border-radius: 10px;
    background: white;
  }
  
  .button-close {
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    outline: none;
  }
`;

function Modal({ children }) {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.visibility);

  const closeModal = () => {
    dispatch(changeVisibility());
  };

  const closeModalKeyboard = (e) => {
    if ((e.key === 'Escape') && isVisible) {
      dispatch(changeVisibility());
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalKeyboard);

    return () => {
      document.removeEventListener('keydown', closeModalKeyboard);
    };
  }, []);

  return (
    <StyledModal className={isVisible ? 'is-active' : ''}>
      <div className="content">
        {children}
        <Button
          className="button-close"
          onClick={closeModal}
          onKeyDown={closeModalKeyboard}
        >
          &times;
        </Button>
      </div>
    </StyledModal>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default Modal;
