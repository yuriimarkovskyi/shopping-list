import React, {forwardRef} from 'react';

const Input = (props, ref) => {
  return (
    <input
      className="input"
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Input);