import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const UseDebounce = () => {

  const [count, setCount] = useState(0);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default UseDebounce;
