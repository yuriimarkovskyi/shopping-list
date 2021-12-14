import React from 'react';

const Button = ({children, classes, ...props}) => {
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;