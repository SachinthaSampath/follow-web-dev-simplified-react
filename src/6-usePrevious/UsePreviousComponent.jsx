import React, { useState } from 'react';
import usePrevious from './usePrevious';

const UsePreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  const previousCount = usePrevious(count);

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName('Doe')}>Change Name</button>
    </div>
  );
};

export default UsePreviousComponent;
