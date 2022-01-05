import React from 'react';
import classNames from 'classnames';

const Button = ({children, className, ...props}) => {
  return (
    <button {...props} className={classNames('button', className)}>
      {children}
    </button>
  );
};

export default Button;