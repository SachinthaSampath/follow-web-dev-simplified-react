import React, { useEffect, useState } from 'react';
import useUpdateEffect from './useUpdateEffect';

const UseUpdateEffectComponent = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log('useUpdateEffect', count);
  }, [count]);

  useEffect(() => {
    console.log('useEffect', count);
  }, [count]);

  return (
    <div>
      <p>{count.toString()}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseUpdateEffectComponent;
