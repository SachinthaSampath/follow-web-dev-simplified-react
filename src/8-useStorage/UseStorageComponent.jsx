import React from 'react';
import { useLocalStorage, useSessionStorage } from './useStorage';

const UseStorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage('name', 'John');
  const [age, setAge, removeAge] = useLocalStorage('age', 29);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName('Jane')}>Set Name</button>
      <button onClick={() => setAge(30)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
};

export default UseStorageComponent;
