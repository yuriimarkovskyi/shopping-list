import React, {forwardRef} from 'react';
import './input.scss';

const Input = (props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Input);