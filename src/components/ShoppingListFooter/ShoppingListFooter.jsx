import React, {useState} from 'react';
import './shopping-list-footer.scss';
import iconAddBlack from '../../images/add-icon-black.svg';
import iconAddWhite from '../../images/add-icon-white.svg';
import {useDispatch, useSelector} from 'react-redux';
import {changeVisibilityAction} from '../../store/visibleReducer';
import Button from '../UI/Button/Button';

const ShoppingListFooter = () => {
  const items = useSelector(state => state.items.items);
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  const handleShowModal = () => {
    dispatch(changeVisibilityAction());
  };

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="shopping-list-footer">
      <p className="shopping-list-footer__price-title">
        Сумма покупок
      </p>
      <p className="shopping-list-footer__price-value">
        {items.reduce((accum, curr) => accum + Number(curr.price), 0)} ₴
      </p>

      <Button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleShowModal}
        className="shopping-list-footer__button button_primary">

        <img src={isHover ? iconAddWhite : iconAddBlack} alt=""/>
      </Button>
    </div>
  );
};

export default ShoppingListFooter;