import React from 'react';
import useArray from '../hooks/useArray';

const UseArray = () => {
  const { array, clear, filter, push, remove, set, update } = useArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  return (
    <div>
      <div>{array.join(', ')}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => filter((n) => n < 5)}>Remove less than 5</button>
      <button onClick={() => update(1, 9)}>Change second element to 9</button>
      <button onClick={() => remove(4)}>Remove fifth element</button>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => set([1, 2, 3])}>Set to 1, 2, 3</button>
    </div>
  );
};

export default UseArray;
