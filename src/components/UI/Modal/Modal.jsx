import React from 'react';
import './modal.scss';
import {useDispatch, useSelector} from 'react-redux';
import {changeVisibilityAction} from '../../../store/visibleReducer';
import removeIcon from '../../../images/remove-icon.svg';

const Modal = ({children}) => {
  const visible = useSelector(state => state.visible.visible);
  const dispatch = useDispatch();

  const modalClose = () => {
    dispatch(changeVisibilityAction());
  };

  return (
    <div className={`modal ${visible ? 'is-active' : ''}`}>
      <div className="modal__content">
        {children}

        <img
          className="modal__icon-close"
          onClick={modalClose}
          src={removeIcon} alt=""
        />
      </div>
    </div>
  );
};

export default Modal;