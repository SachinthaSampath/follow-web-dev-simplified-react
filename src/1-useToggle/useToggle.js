import { useState } from 'react';

export const useToggle =(initialValue) => {
  const [toggle, setToggle] = useState(false);
  const toggleValue = (value) => {
    setToggle((prev) => (typeof value === 'boolean' ? value : !prev));
  };
  return [toggle, toggleValue];
};
