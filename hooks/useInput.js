import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [checked, setChecked] = useState(initialValue);

  return {
    bind: {
      checked,
      onChange: event => {
        if (typeof value === 'boolean') {
          return setChecked(event.target.checked);
        }
        return setValue(event.target.value);
      },
      value,
    },
    checked,
    reset: resetValue => {
      return typeof resetValue === 'boolean' ? setChecked(false) : setValue('');
    },
    setValue,
    value,
  };
};

export default useInput;
