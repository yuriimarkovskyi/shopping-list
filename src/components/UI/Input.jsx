import React, {forwardRef} from 'react';

const Input = (ref, props) => {
  return (
    <input
      className="input"
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Input);