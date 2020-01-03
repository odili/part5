import React from 'react';

export const useField = type => {
  const [value, setValue] = React.useState('');

  const onChange = event => {
    setValue(event.target.value);
  };
  const reset = (initialValue = '') => {
    setValue(initialValue);
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};
