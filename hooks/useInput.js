import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    bind: {
      onChange: event => {
        setValue(event.target.value);
      },
      value,
    },
    reset: () => setValue(''),
    setValue,
    value,
  };
};

export default useInput;
