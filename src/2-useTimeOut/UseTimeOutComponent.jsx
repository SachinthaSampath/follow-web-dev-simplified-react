import React, { useState } from 'react';
import useTimeOut from './useTimeOut';

const UseTimeOutComponent = () => {
  const [count, setCount] = useState(0);

  const { clear, reset } = useTimeOut(() => setCount(0), 2000);

  return (
    <div>
      <p>{count.toString()}</p>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div>
        <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button>
      </div>
    </div>
  );
};

export default UseTimeOutComponent;
