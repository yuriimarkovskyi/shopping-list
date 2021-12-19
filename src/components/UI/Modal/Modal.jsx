import React from 'react';
import './modal.scss';
import removeIcon from '../../../images/remove-icon.svg';
import {useDispatch, useSelector} from 'react-redux';
import {changeVisibilityAction} from '../../../store/visibleReducer';
import classNames from 'classnames';

const Modal = ({children}) => {
  const visible = useSelector(state => state.visible.visible);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(changeVisibilityAction());
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      dispatch(changeVisibilityAction());
    }
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={classNames('modal', visible ? 'is-active' : '')}
      onClick={handleCloseModal}
      onKeyDown={handleKeyDown}>
      <div
        className="modal__content"
        onClick={stopPropagation}>

        {children}

        <img
          className="modal__icon-close"
          onClick={handleCloseModal}
          src={removeIcon} alt=""
        />
      </div>
    </div>
  );
};

export default Modal;